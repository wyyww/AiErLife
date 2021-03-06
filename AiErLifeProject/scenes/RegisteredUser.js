

//注册用户

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
    Image,
    TouchableHighlight,
    Alert,
    AsyncStorage
} from 'react-native';
var Dimensions = require('Dimensions');//获取Dimensions库得到屏幕的宽高
let {height, width} = Dimensions.get('window')

import { NavigationActions } from 'react-navigation';

import Logo from '../images/logo.png';
import IconAccountnumber from '../images/icon_accountnumber.png';
import NetUitl from './plugins/NetUitl'
import API from './plugins/API'


export default class RegisteredUser extends Component {

    static navigationOptions = {
        title: '注册',
    }

    constructor(props) {
        super(props);
        this.state = {
            userNumber: '15529625328',
            userPassword: '123456',
            VerificationCode: '',
            invitationCode: '5363967',
        }
    }

    //获取注册验证码
    _onButtonClickToGetVerificationCode(){
        let params={
            phone:this.state.userNumber,
        }
        NetUitl.get(API.APIList.send_register_code,params,function(responseData){
            if(responseData.success===true){
                Alert.alert('发送成功');
            }
           else{
                Alert.alert('手机号已存在，不要重复注册')
            }
        })
    }
    //注册用户
    _onButtonClickToRegisteredUser() {
            let params={
                username:this.state.userNumber,
                password:this.state.userPassword,
                sms_code:this.state.VerificationCode,
                invitation_code:this.state.invitationCode,
            }
            let that=this;
        NetUitl.post(API.APIList.register,params,function(response){
                    if(response.success===true){
                        Alert.alert('您已经成功注册')
                        const backAction = NavigationActions.back({
                            key: 'LoginIn'
                        })
                        that.props.navigation.dispatch(backAction)
                    }
                    else{
                        Alert.alert(response.error.message)
                    }
        })

    }
    //返回登录页面
    _onButtonClickToBackLoginIn(){
        const resetActions=NavigationActions.reset({
            index:0,
            actions:[
                NavigationActions.navigate({routeName:'LoginIn'})
            ]
        })
        this.props.navigation.dispatch(resetActions)
    }

    render() {
        return (
            <View style={styles.container}>
                <Image source={Logo} style={{ width: 80, height: 80 }} />
                <View style={[styles.flexDirection, styles.topLevelStatus]}>
                    <View style={styles.Icon}>
                        <Image source={IconAccountnumber} style={styles.img} />
                    </View>
                    <View style={{ flex: 1 }}>
                        <TextInput
                            style={styles.userInput}
                            placeholder="请输入手机号"
                            underlineColorAndroid="transparent"
                            value={this.state.userNumber}
                            onChangeText={(userNumber) => this.setState({ userNumber })} />
                    </View>
                </View>
                <View style={[styles.flexDirection, styles.topStatus]}>
                    <View style={styles.Icon}>
                        <Image source={require('../images/icon_verificationcode.png')} style={styles.img} />
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                        <TextInput
                            style={styles.userInput}
                            placeholder="请输入验证码"
                            underlineColorAndroid="transparent"
                            value={this.state.VerificationCode}
                            onChangeText={(VerificationCode) => this.setState({ VerificationCode })} />
                        <Text style={{padding:5}} onPress={this._onButtonClickToGetVerificationCode.bind(this)}>获取验证码</Text>
                    </View>
                </View>
                <View style={[styles.flexDirection, styles.topStatus]}>
                    <View style={styles.Icon}>
                        <Image source={require('../images/icon_password.png')} style={styles.img} />
                    </View>
                    <View style={{ flex: 1 }}>
                        <TextInput
                            style={styles.userInput}
                            placeholder="请输入密码"
                            underlineColorAndroid="transparent"
                            value={this.state.userPassword}
                            onChangeText={(userPassword) => this.setState({ userPassword })} />
                    </View>
                </View>
                <View style={[styles.flexDirection, styles.topLevelStatus]}>
                    <View style={styles.Icon}>
                        <Image source={IconAccountnumber} style={styles.img} />
                    </View>
                    <View style={{ flex: 1 }}>
                        <TextInput
                            style={styles.userInput}
                            placeholder="请输入邀请码"
                            underlineColorAndroid="transparent"
                            value={this.state.invitationCode}
                            onChangeText={(invitationCode) => this.setState({ invitationCode })} />
                    </View>
                </View>
                <TouchableHighlight onPress={this._onButtonClickToRegisteredUser.bind(this)} style={[styles.btn, styles.topStatus,{borderWidth: 1 }]}>
                    <Text>注册</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={this._onButtonClickToBackLoginIn.bind(this)} style={[styles.btn, styles.topStatus,{borderWidth: 1,backgroundColor:'#fff' }]}>
                    <Text>取消</Text>
                </TouchableHighlight>
            </View>
        )
    }
}




const styles = StyleSheet.create({
    horizontal: {
        marginTop: 10,
        width: 250,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    container: {
        flex: 1,
        // justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    flexDirection: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#808080',
        height: 45,
        width: 250,
    },
    topLevelStatus: {
        marginTop: 30,
    },
    topStatus: {
        marginTop: 15,
    },
    userInput: {
        height: 40,
        color: '#808080',
        width:width/3,
        marginLeft: 10,
    },
    Icon: {
        height: 40,
        marginTop: 20,

    },
    img: {
        width: 20,
        height: 20,
        marginLeft: 5
    },
    btn: {
        width: 250,
        borderWidth: 1,
        borderColor: '#808080',
        height: 45,
        justifyContent: 'center',
        alignItems: 'center'
    },
});