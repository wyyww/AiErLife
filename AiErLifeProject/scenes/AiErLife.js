

//爱尔生活界面   可以跳转到爱尔诊所，个人中心，我的服务
import React,{ Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    Image,
    TextInput,
    AsyncStorage,
    ScrollView,
    ListView,
    Alert,
    TouchableHighlight,
    Platform
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import { TabNavigator } from "react-navigation";

//网络请求组件
import NetUitl from './plugins/NetUitl';
import API from './plugins/API';

// 获取屏幕宽度
var Dimensions = require('Dimensions');
const {width,height} = Dimensions.get('window');

//本地图片需要使用import引入，才能正常的显示
import Home_banner from '../images/pic_home_banner.png';
import Icon_fuzhen from '../images/icon_fuzhen.png';
import Icon_aierzhensuo from '../images/icon_aierzhensuo.png';
import Icon_mingyilianmeng from '../images/icon_mingyilianmeng.png';
import Icon_major from '../images/icon_major.png';
export default class AiErLife extends Component {

    static navigationOptions=({navigation})=>({
        headerTitle:'爱尔生活',
        headerTintColor:'#000',
        headerTitleStyle:{
            fontSize:18,
            alignSelf:'center',
        },
        headerStyle:{
            width:width,
            height: (Platform.OS === 'ios') ? 80 : 40,
            backgroundColor:'#fff',
        }
    })
    // headerStyle

    constructor(props) {
        super(props);
        const ds=new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2});
        this.state={
            token:'',
            dataSource:ds,
        }
    }

    componentDidMount(){
        // recommend_doctor
        AsyncStorage.getItem('myToken',(err,res)=>{
            this.setState({
                token:res,
            },()=>{
                this._getRecommendDoctor()
            })
        })
    }
    _getRecommendDoctor(){
        let that=this;
        let params={
            token:this.state.token,
        }
        NetUitl.get(API.APIList.recommend_doctor,params,(response)=>{
            // console.log(response)
            let res=response.result;
            that.setState({
                dataSource:that.state.dataSource.cloneWithRows(res)
            })
        })
    }

    //跳转到爱尔诊所
    _onButtonClickNavigateToAiErClnic(){
        const { navigate } =this.props.navigation;
        navigate('AiErClinic');
    }

    render() {
        return (
            <ScrollView style={styles.container}>
               <Image style={styles.home_banner} source={Home_banner} />
                <View style={{flexDirection:'row'}}>
                    <View style={[styles.header_nav,styles.header_bottom_width,styles.header_right_width]}>
                            <View style={styles.header_nav_left}>
                                <Text style={styles.header_nav_left_topic}>复诊</Text>
                                <Text>及时复诊预约</Text>
                            </View>
                            <View >
                                <Image style={styles.header_nav_banner} source={Icon_fuzhen}/>
                            </View>
                    </View>
                    <View style={[styles.header_nav,styles.header_bottom_width]} >
                            <View  style={styles.header_nav_left} >
                                    <Text style={styles.header_nav_left_topic} onPress={this._onButtonClickNavigateToAiErClnic.bind(this)}>爱尔诊所</Text>
                                <Text>名医坐诊</Text>
                            </View>
                            <View >
                                <Image style={styles.header_nav_banner} source={Icon_aierzhensuo}/>
                            </View>
                    </View>
                </View>
                <View style={{flexDirection:'row'}}>
                    <View style={[styles.header_nav,styles.header_bottom_width,styles.header_right_width]}>
                        <View  style={styles.header_nav_left}>
                            <Text style={styles.header_nav_left_topic}>名医联盟</Text>
                            <Text>线上咨询</Text>
                        </View>
                        <View >
                            <Image style={styles.header_nav_banner} source={Icon_mingyilianmeng}/>
                        </View>
                    </View>
                    <View style={[styles.header_nav,styles.header_bottom_width]}>
                        <View  style={styles.header_nav_left}>
                            <Text style={styles.header_nav_left_topic}>商户联盟</Text>
                            <Text>依赖商户</Text>
                        </View>
                        <View >
                            <Image style={styles.header_nav_banner} source={Icon_major}/>
                        </View>
                    </View>
                </View>
                <View>
                    <Text style={styles.divide_line}></Text>
                </View>
                <View style={styles.doctor_top}>
                    <Text >名医联盟推荐医生</Text >
                </View>
                <View style={{flex: 1, paddingTop: 10}}>
                    <ListView
                        dataSource={this.state.dataSource}
                        renderRow={this._renderRow.bind(this)}
                    />
                </View>
            </ScrollView>
        );
    }

    _renderRow(rowData){
        return (
            // onPress={this._onPressRow.bind(this)}
            <TouchableHighlight >
                <View style={styles.list_frame}>
                    <View style={styles.list_icon}>
                        <Image source={{uri:rowData.head_url}} style={{width:80,height:80}}/>
                    </View>
                    <View style={{paddingLeft:3}}>
                        <View style={{flexDirection:'row',}}>
                            <Text style={styles.list_size}>{rowData.name}</Text>
                            <Text>{rowData.hospital_department_name}&nbsp;{rowData.job_title}</Text>
                        </View>
                        <Text style={{paddingTop:5,paddingBottom:5}}>{rowData.hospital_name}</Text>
                        <Text>{rowData.introducation}</Text>
                    </View>
                </View>
            </TouchableHighlight >
        )
    }
    // _onPressRow(){
    //     console.log('sdfd');
    // }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#F5FCFF',
    },
    divide_line:{
       width:width,
        height:10,
        backgroundColor:'#DCDCDC',
    },
    home_banner: {
        width:width,
        height:150,
    },
    header_bottom_width:{
        borderBottomWidth:1,
        borderColor:'#DCDCDC',
    },
    header_right_width:{
        borderRightWidth:1,
        borderColor:'#DCDCDC',
    },
    header_nav:{
        width:width/2,
        flexDirection:'row',
        justifyContent:'space-around',
    },
    header_nav_left:{
        justifyContent:'flex-start',
         padding:5,
    },
    header_nav_left_topic:{
       fontSize:16,
        color:'#000',
    },
    header_nav_banner:{
        marginTop:5,
        width:40,
        height:40,
    },
    doctor_top:{
        width:width,
        height:20,
        marginTop:10,
        paddingLeft:15,
        justifyContent:'flex-start',
    },
    list_frame:{
        width:width,
        height:120,
        borderTopWidth:1,
        borderColor:'#DCDCDC',
        flexDirection:'row',
        padding:10,
    },
    list_size:{
        fontSize:17,
        fontWeight:'bold',
        paddingRight:20
    },
    list_icon:{
        width:100,
    }
});
