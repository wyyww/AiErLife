

//诊室的大体介绍，包括图，，可以跳转到诊室里具有的科室和诊所地址
import React,{ Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
    ScrollView,
    AsyncStorage,
    Alert,
    Image,
    ListView,
    TouchableHighlight,
    TouchableOpacity
} from 'react-native';
import { NavigationActions } from 'react-navigation';
// 获取屏幕宽度
var Dimensions = require('Dimensions');
const {width,height} = Dimensions.get('window');

//网络请求组件
import NetUitl from './plugins/NetUitl';
import API from './plugins/API';

export default class ClinicIntroduction extends Component {

    static navigationOptions={
        headerTitle:'诊室',
    };

    componentWillMount(){
       const prevDeliveryParams=this.props.navigation.state;
       this.setState({
           hospital_id:prevDeliveryParams.params.hospital_id,
       })
        AsyncStorage.getItem('myToken',(err,result)=>{
            this.setState({
                myToken:result,
            },()=>{
                this._getClinicIntroductionDetails()
            })
        })
    }
    //获取具体诊室的信息详情
    _getClinicIntroductionDetails(){
        let that=this;
        let params={
            token:this.state.myToken,
            hospital_id:this.state.hospital_id
        }
        NetUitl.get(API.APIList.hospital_show,params,function(response){
            // console.log(response);
            let res=response.result;
            that.setState({
                dataSource:that.state.dataSource.cloneWithRows(res.specialities),
                latitude:res.latitude,
                longitude:res.longitude,
                specialities:res.specialities,

                clinicName:res.name,
                clinicAddress:res.address,
                clinicPhone:res.phone,
                clinicImage:res.pic_url,
            })
        })
    }

    constructor(props){
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds,
            myToken:'',
            hospital_id:'',
            latitude:'',
            longitude:'',
            specialities:'',
            //优化的时候尽可能去掉下面的变量
            clinicName:'',
            clinicAddress:'',
            clinicPhone:'',
            clinicImage:'',
        };
    }


    _renderRow(rowData,sectionID,rowID){
        return (
            <TouchableHighlight onPress={this._onPressRow.bind(this,rowID,sectionID)}>
                <View style={styles.list_frame}>
                        <View style={{flexDirection:'row',}}>
                            <Text style={[styles.text_container,{fontSize:15,fontWeight:'400',paddingRight:20}]}>{rowData.name}</Text>
                            <Text>{rowData.doctor_count}位三甲医生</Text>
                        </View>
                        <View  style={styles.list_btn}  >
                            <Text style={styles.text_color}>{rowData.description}</Text>
                            <Image source={require('../images/icon_common_rightarrow.png')}  style={styles.icon_small_title}/>
                        </View>
                </View>
            </TouchableHighlight >
        )
    }
    _onPressRow(rowID){
        let speciality_id=this.state.specialities[rowID].id
        const navigationAction=NavigationActions.navigate({
            routeName:'ClinicDetails',
            params:{
                hospital_id:this.state.hospital_id,
                speciality_id:speciality_id,
            }
        })
        this.props.navigation.dispatch(navigationAction);
    }
    render() {
        return (
            <ScrollView contentContainerStyle={styles.contentContainer}>
                <View style={styles.module_frame}>
                    <Image source={{uri:this.state.clinicImage}} style={styles.icon_container}/>
                    <Text style={styles.text_container}>{this.state.clinicName}</Text>
                    <View style={[styles.text_row,{justifyContent:'flex-start'}]}>
                        <Text>三甲名医出诊</Text>
                        <Text> 勿过无度医疗</Text>
                    </View>
                    <TouchableHighlight  onPress={()=>this.props.navigation.navigate('ClinicAddress',{latitude:this.state.latitude,longitude:this.state.longitude})}>
                        <View style={styles.text_row}>
                            <View style={{flexDirection:'row'}}>
                                <Image  source={require('../images/icon_address.png')} style={styles.icon_small_title}/>
                                <Text  >{this.state.clinicAddress}</Text>
                            </View>
                            <Image  source={require('../images/icon_common_rightarrow.png')} style={styles.icon_small_title} />
                        </View>
                    </TouchableHighlight>
                    <View style={styles.text_row}>
                        <View style={{flexDirection:'row'}}>
                            <Image  source={require('../images/icon_phone.png')} style={styles.icon_small_title}/>
                            <Text>{this.state.clinicPhone}</Text>
                        </View>
                        <Image  source={require('../images/icon_common_rightarrow.png')} style={styles.icon_small_title} />
                    </View>
                </View>
                <View style={[styles.text_row,styles.module_padding_view,{justifyContent:'flex-start'}]}>
                    <Text>科室</Text>
                    <Text style={{color:'#00ffff'}}>(点击科室选择医生进行门诊预约)</Text>
                </View>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow.bind(this)}
                />
                <View style={[styles.module_padding_view]}>
                    <Text>诊所介绍</Text>
                    <Text>艾尔诊所是爱而生活集团旗下，高品质专业口腔诊所，诊所坐镇专家团队均有当地三家医生主任即副主任医师组成，艾尔诊所可为诊所提供和线上线下专业诊疗方案</Text>
                </View>

            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    contentContainer: {
        // paddingVertical: 20,
        backgroundColor: '#F5FCFF',
        width:width,
        height:height,
    },
    module_frame:{
        marginLeft:10,
        marginBottom:10,
        backgroundColor:'white',
    },
    icon_container:{
        width:width,
        height:150,
        paddingBottom:10,
        // resizeMode:'cover'
    },
    text_container:{
        marginTop:5,
        marginBottom:5,
        fontSize:15,
        fontWeight:'600',
    },
    text_row:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        height:30,
    },
    icon_small_title:{
        width:20,
        height:20,
    },
    list_btn:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    text_color:{
        width:width-50,
    },
    list_frame:{
        width:width,
        borderBottomWidth:1,
        padding:10,
    },
    module_padding_view:{
        padding:5,
        borderTopWidth:1,
        borderBottomWidth:1,
        marginTop:15,
    }
});