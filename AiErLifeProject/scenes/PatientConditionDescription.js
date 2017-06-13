

//，病人病情描述界面         里面预约医生，，，上传照片  可以跳转到支付界面
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

export default class PatientConditionDescription extends Component {

    static navigationOptions={
        title:'病情描述',
    };

    constructor(props){
        super(props);
        this.state={
            confirmSure:true,
            modalVisible:true,
        }
     
    }

    //跳转到用户支付界面
    _onButtonClickToUserPayment(){
        const { navigate } =this.props.navigation;
        navigate('UserPayment');
    }

    render() {
        return (
            <View >
                <Modal
                    animationType={"slide"}
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {alert("Modal has been closed.")}}>
                   <View style={styles.confirm_icon}>
                       {
                           [right,line,circle].map((image,index)=>{
                                   return <Image key={index} source={image} style={{width:25,height:25}}/>
                           })
                       }
                   </View>
                    <View style={styles.order_frame}>
                        <View style={styles.order_dactor}>
                            <Text>孙医生（工号007） 2016-12-04 06：34</Text>
                        </View>
                        <Text style={styles.title_important}>病情描述</Text>
                        <View style={styles.order_patient_describe}>
                            <TextInput underlineColorAndroid='transparent' multiline={true}/>
                        </View>
                        <Text style={styles.title_important}>病情图片</Text>
                        <View style={[styles.upload_image,{   borderBottomWidth:1,}]}>
                            <Text>上传图片</Text>
                            <Image source={require('../images/icon_common_rightarrow.png')} style={{width:24,height:24}}/>
                        </View>
                        <Text style={styles.title_important}>就诊人</Text>
                        <View style={styles.upload_image}>
                            <Text>选择就诊人</Text>
                            <Image source={require('../images/icon_common_rightarrow.png')} style={{width:24,height:24}}/>
                        </View>

                    </View>
                    <TouchableHighlight underlayColor='transparent' style={styles.lugoutButton} onPress={this._onButtonClickToUserPayment.bind(this)}>
                        <Text style={styles.logoutButtonFontSize}>提交预约单</Text>
                    </TouchableHighlight>
                    <View style={styles.warmPrompt}>
                        <Text>温馨提示</Text>
                        <Text>医生确认后在历史中查看就诊时间，就诊地点和门诊预约码</Text>
                        <Text>此费用为您的门诊预约费用，线下就诊需另行支付挂号</Text>
                    </View>
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
    order_frame:{
      width:width-30,
        margin:10,
        borderWidth:1,
        borderColor:'#808080',
    },
    order_dactor:{
        flexGrow:1,
        flexDirection:'row',
        alignItems:'center',
        height:30,
        borderBottomWidth:1,
        borderColor:'#808080',
    },
    order_patient_describe:{
        height:100,
        borderBottomWidth:1,
        borderTopWidth:1,
        borderColor:'#808080',
    },
    upload_image:{
        flexGrow:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        height:40,
        borderTopWidth:1,
        borderColor:'#808080'
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
    warmPrompt:{
        justifyContent:'flex-start',
        alignItems:'flex-start',
        borderWidth:1,
        borderRadius:4,
        borderColor:'#808080',
        margin:5,
        height:100,
    },
    title_important:{
        fontSize:14,
        fontWeight:'300',
        color:'#000',
    }
});