

//诊室里面的科室 ，，可以跳转到具体科室的医生介绍
import React,{ Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    Image,
    TextInput,
    ListView,
    AsyncStorage,
    TouchableHighlight
} from 'react-native';
import { NavigationActions } from 'react-navigation';

// 获取屏幕宽度
var Dimensions = require('Dimensions');
const {width,height} = Dimensions.get('window');

//网络请求组件
import NetUitl from './plugins/NetUitl';
import API from './plugins/API';

export default class ClinicDetails extends Component {

    static navigationOptions={
        title:'艾尔诊所后宰门诊室',
    };

    constructor(props){
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            speciality_id:'',
            hospital_id:'',
            token:'',
            dataSource: ds,
            doctor_id:'',
        };
    }

    componentDidMount(){
        const prevParams=this.props.navigation.state;
        this.setState({
            speciality_id:prevParams.params.speciality_id,
            hospital_id:prevParams.params.hospital_id,
        })

        AsyncStorage.getItem('myToken',(err,result)=>{
            // console.log(result)
            this.setState({
                token:result,
            },()=>{
                this._getClinicDetails();
            })
        })
     }

        _getClinicDetails(){
        let that=this;
        let params={
            token:this.state.token,
            speciality_id:this.state.speciality_id,
            hospital_id:this.state.hospital_id,
        }
        NetUitl.get(API.APIList.speciality_of_hospital,params,function(response){
            let res=response.result;
            // console.log(res)
            that.setState({
                dataSource:that.state.dataSource.cloneWithRows(res),
            })
        })
    }

    _renderRow(rowData,sectionID){
        return (
            <TouchableHighlight onPress={this._onPressRow.bind(this,rowData)}>
                <View style={styles.list_frame}>
                    <View style={styles.list_icon}>
                        <Image source={{uri:rowData.head_url}} style={{width:80,height:80}}/>
                    </View>
                    <View style={{paddingLeft:3}}>
                        <Text style={{fontSize:17,fontWeight:'400',paddingRight:20}}>{rowData.name}</Text>
                        <Text>{rowData.hospital_name}{rowData.id}</Text>
                        <Text>{rowData.introducation}</Text>
                    </View>
                </View>
            </TouchableHighlight >
        )
    }
    //科室医生列表
    _onPressRow(rowData){
        // console.log(rowData)
        const NavigationAction=NavigationActions.navigate({
            routeName:'DoctorSpecificIntroduction',
            params:{
                doctor_id:rowData.id
            }
        })
       this.props.navigation.dispatch(NavigationAction)

        //这个界面貌似是多余的，写着看吧，暂时被抛弃不需要了
        // navigate('DepartmentDoctorsIntroduced');
    }

    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this._renderRow.bind(this)}
            />
        );
    }
}

const styles = StyleSheet.create({
    list_frame:{
        width:width,
        height:110,
        borderBottomWidth:1,
        flexDirection:'row',
        padding:15,
    },
    list_icon:{
        width:100,
    }
});