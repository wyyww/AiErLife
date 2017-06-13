

//用户支付界面
import React,{ Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
    Image,
    Modal,
    TouchableHighlight
} from 'react-native';

let circle=require('../images/circle.png');
let right=require('../images/right.png')
let line=require('../images/line.png')

// 获取屏幕宽度
var Dimensions = require('Dimensions');
const {width,height} = Dimensions.get('window');

export default class UserPayment extends Component {

    static navigationOptions={
        title:'支付',
    };

    constructor(props){
        super(props);
        this.state={
            confirmSure:true,
            modalVisible:true,
        }

    }

    render() {
        return (
            <View >
                <Modal
                    animationType={"slide"}
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {alert("Modal has been closed.")}}
                >
                    <View style={styles.confirm_icon}>
                        {
                            [right,line,circle].map((image,index)=>{
                                return <Image key={index} source={image} style={{width:25,height:25}}/>
                            })
                        }
                    </View>
                    <View >
                        <View style={styles.order_dactor}>
                            <Text>孙医生（工号007） 口腔科加急门诊预约</Text>
                            <Text>0.01元</Text>
                        </View>
                        <View style={styles.order_describe}>
                            <Text style={styles.order_text}>预约时间：2017-06-12 08：30：00</Text>
                            <Text style={styles.order_text}>就诊地址：艾尔诊所后宰门诊室</Text>
                            <Text style={styles.order_text}>病情描述：测试</Text>
                        </View>
                        <Text style={styles.title_important}>请选择支付方式</Text>
                        <View style={[styles.pay_method,{   borderBottomWidth:1,}]}>
                            <View style={{flexDirection:'row'}}>
                                <Image source={require('../images/weixinzhifu.png')} style={{width:30,height:30,margin:10}}/>
                                <View>
                                    <Text>微信支付</Text>
                                    <Text>推荐安装微信5.0及以上的用户使用</Text>
                                </View>
                            </View>
                            <Image source={require('../images/agree.png')} style={{width:30,height:30}}/>
                        </View>
                        <View style={[styles.pay_method,{   borderBottomWidth:1,}]}>
                            <View style={{flexDirection:'row'}}>
                                <Image source={require('../images/zhifubao.png')} style={{width:30,height:30,margin:10}}/>
                                <View>
                                    <Text>支付宝支付</Text>
                                    <Text>推荐安装支付宝客户端的用户使用</Text>
                                </View>
                            </View>
                            <Image source={require('../images/agreenone.png')} style={{width:30,height:30}}/>
                        </View>

                    </View>
                    <TouchableHighlight underlayColor='transparent' style={styles.lugoutButton} onPress={()=>console.log('确认支付')}>
                        <Text style={styles.logoutButtonFontSize}>确认支付</Text>
                    </TouchableHighlight>

                </Modal>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    confirm_icon:{
        width:width,
        height:50,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        borderBottomWidth:1,
    },
    order_dactor:{
        flexGrow:1,
        flexDirection:'row',
        alignItems:'center',
        height:30,
        padding:5,
        borderBottomWidth:1,
        borderColor:'#808080',
    },
    order_describe:{

    },
    order_text:{
        flexGrow:1,
        alignItems:'center',
        padding:5,
        borderBottomWidth:1,
        borderColor:'#808080',
    },
    title_important:{
        fontSize:14,
        fontWeight:'300',
        color:'#000',
        margin:10,
    },
    pay_method:{
        flexGrow:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        height:60,
        borderBottomWidth:1,
        borderColor:'#808080',
        backgroundColor:'#fff'
    },
    lugoutButton:{
        backgroundColor:'#40e0d0',
        borderWidth:0,
        margin:5,
        paddingTop:8,
        paddingBottom:8,
        borderRadius:4,
        alignItems:'center',
        width:width-20,

    },
    logoutButtonFontSize:{
        fontSize:18,
        color:'#fff'
    },

});