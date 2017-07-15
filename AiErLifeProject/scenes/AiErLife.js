

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
    TouchableHighlight
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import { TabNavigator } from "react-navigation";

//网络请求组件
import NetUitl from './plugins/NetUitl';
import API from './plugins/API';

// 获取屏幕宽度
var Dimensions = require('Dimensions');
const {width,height} = Dimensions.get('window');


export default class AiErLife extends Component {

    static navigationOptions={
        title:'主页',
    };

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


    _renderRow(rowData){
        return (
            <TouchableHighlight onPress={this._onPressRow.bind(this)}>
                <View style={styles.list_frame}>
                    <View style={styles.list_icon}>
                        <Image source={{uri:rowData.head_url}} style={{width:80,height:80}}/>
                    </View>
                    <View style={{paddingLeft:3}}>
                        <View style={{flexDirection:'row',}}>
                            <Text style={{fontSize:17,fontWeight:'400',paddingRight:20}}>{rowData.name}</Text>
                            <Text>{rowData.job_title}</Text>
                        </View>
                        <Text>{rowData.hospital_name}</Text>
                        <Text>{rowData.introducation}</Text>
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
            <ScrollView >
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
                    <View style={styles.header_nav} >
                            <View  style={styles.header_nav_left} >
                                    <Text style={styles.header_nav_left_topic} onPress={this._onButtonClickNavigateToAiErClnic.bind(this)}>爱尔诊所</Text>
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
        height:height,
    },
    home_banner: {
        height:150,
    },
    header_nav:{
        width:width/2,
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
        width:width,
        height:30,
        marginTop:5,
        padding:10,
        justifyContent:'flex-start',
    },
    list_frame:{
        width:width,
        height:130,
        borderTopWidth:1,
        flexDirection:'row',
        padding:20,
    },
    list_icon:{
        width:100,
    }
});
