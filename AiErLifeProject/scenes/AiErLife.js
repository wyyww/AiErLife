

//爱尔生活界面   可以跳转到爱尔诊所，个人中心，我的服务
import React,{ Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    Image,
    TextInput,
    ScrollView,
    ListView,
    TouchableHighlight
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import { TabNavigator } from "react-navigation";
// 获取屏幕宽度
var Dimensions = require('Dimensions');
const screenW = Dimensions.get('window').width;


export default class AiErLife extends Component {

    static navigationOptions={
        title:'爱尔生活',
        header:{
            title:'我的艾尔生活棒棒哒'
        }
    };

    constructor(props){
        super(props);
        const listData=new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2});
        this.state={
            dataSource:listData.cloneWithRows([{
                    name:'邱红涛',
                    imageSrc:'../images/ben.png',
                    clinic:"产科 医事",
                    hospital:"西北妇女儿童医院",
                    description:"从事妇科临床与教学20余年，擅长处理产中出现的各种异常情况及难产问题"
                },
                {
                    name:"邱红涛",
                    imageSrc:'../images/ben.png',
                    clinic:"产科 医事",
                    hospital:"西北妇女儿童医院",
                    description:"从事妇科临床与教学20余年，擅长处理产中出现的各种异常情况及难产问题"
                },
                {
                    name:'邱红涛',
                    imageSrc:'../images/ben.png',
                    clinic:"产科 医事",
                    hospital:"西北妇女儿童医院",
                    description:"从事妇科临床与教学20余年，擅长处理产中出现的各种异常情况及难产问题"
                },
                {
                    name:'邱红涛',
                    imageSrc:'../images/ben.png',
                    clinic:"产科 医事",
                    hospital:"西北妇女儿童医院",
                    description:"从事妇科临床与教学20余年，擅长处理产中出现的各种异常情况及难产问题"
                }]
            )
        }
    }

  //返回到登录界面
    _onButtonClickBackToLoginIn(){
        const backAction = NavigationActions.back();
        const navigation = this.props.navigation;
        navigation.dispatch(backAction);
    }

    //跳转到爱尔诊所
    _onButtonClickToAiErClnic(){
        const { navigate } =this.props.navigation;
        navigate('AiErClinic');
    }

    //跳转到我的服务
    _onButtonClickToClinicIntroduction(){
        const { navigate } =this.props.navigation;
        navigate('ClinicIntroduction');
    }

    //跳转到个人中心
    _onButtonClickToUserPersonalInformation(){
        const { navigate } =this.props.navigation;
        navigate('UserPersonalInformation');
    }

    _renderRow(rowData){
        return (
            <TouchableHighlight onPress={() => {this._onPressRow}}>
                <View style={styles.list_frame}>
                    <View style={styles.list_icon}>
                        <Image source={require('../images/ben.png')} style={{width:80,height:80}}/>
                    </View>
                    <View style={{paddingLeft:3}}>
                        <View style={{flexDirection:'row',}}>
                            <Text style={{fontSize:17,fontWeight:'400',paddingRight:20}}>{rowData.name}</Text>
                            <Text>{rowData.clinic}</Text>
                        </View>
                        <Text>{rowData.hospital}</Text>
                        <Text>{rowData.description}</Text>
                    </View>
                </View>
            </TouchableHighlight >
        )
    }
    _onPressRow(){
        console.log('sdfd');
    }
    render() {
        return (
            <ScrollView contentContainerStyle={styles.container}>
               <Image style={styles.home_banner} source={require('../images/pic_home_banner.png')} />
                <View style={{flexDirection:'row'}}>
                    <View style={styles.header_nav}>
                            <View style={styles.header_nav_left}>
                                <Text style={styles.header_nav_left_topic}>复诊</Text>
                                <Text>及时复诊预约</Text>
                            </View>
                            <View >
                                <Image style={styles.header_nav_banner} source={require('../images/icon_fuzhen.png')}/>
                            </View>
                    </View>
                    <View style={styles.header_nav}>
                            <View  style={styles.header_nav_left} >
                                <Text style={styles.header_nav_left_topic} onPress={this._onButtonClickToAiErClnic.bind(this)}>爱尔诊所</Text>
                                <Text>名医坐诊</Text>
                            </View>
                            <View >
                                <Image style={styles.header_nav_banner} source={require('../images/icon_aierzhensuo.png')}/>
                            </View>
                    </View>
                </View>
                <View style={{flexDirection:'row'}}>
                    <View style={styles.header_nav}>
                        <View  style={styles.header_nav_left}>
                            <Text style={styles.header_nav_left_topic}>名医联盟</Text>
                            <Text>线上咨询</Text>
                        </View>
                        <View >
                            <Image style={styles.header_nav_banner} source={require('../images/icon_mingyilianmeng.png')}/>
                        </View>
                    </View>
                    <View style={styles.header_nav}>
                        <View  style={styles.header_nav_left}>
                            <Text style={styles.header_nav_left_topic}>商户联盟</Text>
                            <Text>依赖商户</Text>
                        </View>
                        <View >
                            <Image style={styles.header_nav_banner} source={require('../images/icon_major.png')}/>
                        </View>
                    </View>
                </View>
                <View style={styles.doctor_top}>
                    <Text >名医联盟推荐医生</Text >
                </View>
                <View style={{flex: 1, paddingTop: 22}}>
                    <ListView
                        dataSource={this.state.dataSource}
                        renderRow={this._renderRow.bind(this)}
                    />
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    home_banner: {
        height:150,
    },
    header_nav:{
        width:screenW/2,
        flexDirection:'row',
        justifyContent:'center',
        borderWidth:1,
        borderColor:'#808080',
    },
    header_nav_left:{
        justifyContent:'flex-start',
         padding:10,
    },
    header_nav_left_topic:{
       fontSize:16,
        color:'#000',
    },
    header_nav_banner:{
        marginTop:10,
        width:40,
        height:40,
    },
    doctor_top:{
        width:screenW,
        height:30,
        marginTop:5,
        padding:10,
        justifyContent:'flex-start',
    },
    list_frame:{
        width:screenW,
        height:130,
        borderTopWidth:1,
        flexDirection:'row',
        padding:20,
    },
    list_icon:{
        width:100,
    }
});

{/*<Button title="返回到登录界面" onPress={this._onButtonClickBackToLoginIn.bind(this)}/>*/}
{/*<Button title=" 跳转到爱尔诊所" onPress={this._onButtonClickToAiErClnic.bind(this)}></Button>*/}
{/*<Button title=" 跳转到我的服务" onPress={this._onButtonClickToClinicIntroduction.bind(this)}></Button>*/}
{/*<Button title=" 跳转到个人中心" onPress={this._onButtonClickToUserPersonalInformation.bind(this)}></Button>*/}