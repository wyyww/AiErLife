

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
            dataSource: ds.cloneWithRows([
                {
                    imageSrc:'',
                    clinicSectionDoctorName:'景医生（工号007）',
                    clinicName:'艾尔诊所后宰门诊室',
                    clinicSectionDescription:'口腔修复，专业擅长贴膜，吃面，大豆睡觉，好大米中国造，好油大豆油'
                }]),
        };
    }

    componentDidMount(){
        const prevParams=this.props.navigation.state;
        this.setState={
            speciality_id:prevParams.params.speciality_id,
            hospital_id:prevParams.params.hospital_id,
        }

        AsyncStorage.getItem('myToken',(err,result)=>{
            console.log(result)
            this.setState({
                token:result,
            },()=>{
                this._getClinicDetails();
            })
        })
    }

    _getClinicDetails(){
        let that=this;
        let patams={
            speciality_id:this.state.speciality_id,
            hospital_id:this.state.hospital_id,
        }
        NetUitl.get(API.APIList.speciality_of_hospital,params,function(res){
            console.log(res);
        })
    }
    _renderRow(rowData){
        return (
            <TouchableHighlight onPress={this._onPressRow.bind(this)}>
                <View style={styles.list_frame}>
                    <View style={styles.list_icon}>
                        <Image source={require('../images/ben.png')} style={{width:80,height:80}}/>
                    </View>
                    <View style={{paddingLeft:3}}>
                        <Text style={{fontSize:17,fontWeight:'400',paddingRight:20}}>{rowData.clinicSectionDoctorName}</Text>
                        <Text>{rowData.clinicName}</Text>
                        <Text>{rowData.clinicSectionDescription}</Text>
                    </View>
                </View>
            </TouchableHighlight >
        )
    }
    //科室医生列表
    _onPressRow(){
        const { navigate } =this.props.navigation;
        navigate('DoctorSpecificIntroduction');

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