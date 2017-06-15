

//重置密码
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
} from 'react-native';
import { NavigationActions } from 'react-navigation';

import Logo from '../images/logo.png';
import IconAccountnumber from '../images/icon_accountnumber.png';


import NetUitl from './plugins/NetUitl'
import API from './plugins/API'


export default class ResetPassword extends Component {
    static navigationOptions = {
        title: '重置密码',
    }

      constructor(props) {
        super(props);
        this.state = {
            userNumber: '15529625328',
            userPassword: '000000',
            sms_code :'',
        }
    }

    _onButtonClickToGetChangePasswordVerificationCode(){
        let params={
            phone :this.state.userNumber,
        }
        NetUitl.get(API.APIList.send_change_password_code,params,function(responseData){
            // console.log(responseData);
            Alert.alert('发送成功');
        })
    }

    //重置密码
    _onButtonClickToResetPassword() {
        let params={
            username:this.state.userNumber,
            password:this.state.userPassword,
            sms_code:this.state.sms_code,
        }
        let that=this;
        NetUitl.get(API.APIList.change_password,params,function(responseData){
            if(responseData.success===true){
                Alert.alert('重置密码成成功')
                const backAction = NavigationActions.back({
                    key:'LoginIn'
                });
                that.props.navigation.dispatch(backAction)
            }
        })
    }

    _onButtonClickToBackLoginIn() {
        const backAction=NavigationActions.back({
            key:'LoginIn'
        })
        this.props.navigation.dispatch(backAction);
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
                            onChangeText={(sms_code ) => this.setState({ sms_code  })} />
                        <Text style={{padding:5,backgroundColor:"#00ff00"}} onPress={this._onButtonClickToGetChangePasswordVerificationCode.bind(this)}>获取验证码</Text>
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
                            onChangeText={(userPassword) => this.setState({ userPassword })} />
                    </View>
                </View>
                <TouchableHighlight onPress={this._onButtonClickToResetPassword.bind(this)} style={[styles.btn, styles.topStatus,{ borderWidth: 1 }]}>
                    <Text>重置</Text>
                </TouchableHighlight>
                 <TouchableHighlight onPress={this._onButtonClickToBackLoginIn.bind(this)} style={[styles.btn, styles.topStatus,{ borderWidth: 1 }]}>
                    <Text>取消</Text>
                </TouchableHighlight>
            </View>
        );
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
        marginTop: 50,
    },
    topStatus: {
        marginTop: 15,
    },
    userInput: {
        height: 40,
        color: '#808080',
        // underlineColorAndroid="transparent"     让其底边框消失                
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
    }
});