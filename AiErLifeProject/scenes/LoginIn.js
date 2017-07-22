//登录界面，，登录界面可以跳转到，重置密码，注册，爱尔生活

import React, {Component} from 'react';
import {
    StyleSheet,
    AsyncStorage,
    Text,
    View,
    TextInput,
    Image,
    TouchableHighlight,
    Alert,
    ActivityIndicator
} from 'react-native';
import {NavigationActions} from 'react-navigation'

import Logo from '../images/logo.png';
import IconAccountnumber from '../images/icon_accountnumber.png';
var Dimensions = require('Dimensions');//获取Dimensions库得到屏幕的宽高
let {height, width} = Dimensions.get('window')

//网络请求组件
import NetUitl from './plugins/NetUitl';
import API from './plugins/API';

export default class LoginIn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            phone:'',
            password: '',
            circleSize: 0,
            animating: true,
        }
    }

    // 15029972629
    // 111111
    componentDidMount() {
        AsyncStorage.getItem('phone', (err, res) => {
            this.setState({
                phone: JSON.parse(res),
            })
        })
        AsyncStorage.getItem('password', (err, res) => {
            this.setState({
                password: JSON.parse(res),
            })
        })
    }

    //跳转到重置密码页面
    _onButtonClickToResetPossword() {
        const {navigate} = this.props.navigation;
        navigate('ResetPassword');
    }

    //跳转到用户注册界面
    _onButtonClickToRegistered() {
        const {navigate} = this.props.navigation;
        navigate('RegisteredUser');
    }


    //跳转到底部导航，三层路由界面
    _onButtonClickToAiErLife() {
        this.setState({
            circleSize: 'large'
        })
        let params = {
            'username': this.state.phone,
            'password': this.state.password,
        }

        //这里需要使用that来代替this，否则会出现this指向不正确；这个就是作用域链的原因
        let that = this;
        NetUitl.post(API.APIList.authenticate, params, function (responseData) {
            //请求得来的数据
            that.setState({
                circleSize: 0,
            })
            if (responseData.success === true) {

                AsyncStorage.setItem('phone', JSON.stringify(that.state.phone), () => {
                })
                AsyncStorage.setItem('password', JSON.stringify(that.state.password), () => {
                })
                AsyncStorage.setItem('normal_user_id', JSON.stringify(responseData.result.id)).then(
                    () => {
                        // console.log('用户的id保存完成')
                    }
                )
                AsyncStorage.setItem('myToken', responseData.result.token).then(
                    () => {
                        // console.log('token值保存成功')
                    }
                )
                const resetActions = NavigationActions.reset({
                    index: 0,
                    actions: [
                        NavigationActions.navigate({routeName: 'AiErHomeNavigationTabNavigator'})
                    ]
                })
                that.props.navigation.dispatch(resetActions)
            }
            else {
                Alert.alert(responseData.error.message)
            }
        })

    }


    render() {
        return (
            <View style={styles.container}>
                <Image source={Logo} style={{width: 80, height: 80}}/>
                <View style={[styles.flexDirection, styles.topLevelStatus]}>
                    <View style={styles.Icon}>
                        <Image source={IconAccountnumber} style={styles.img}/>
                    </View>
                    <View style={{flex: 1}}>
                        <TextInput
                            style={styles.userInput}
                            placeholder="请输入手机号"
                            underlineColorAndroid="transparent"
                            selectTextOnFocus={true}
                            value={this.state.phone}
                            // autoFocus={true}
                            onChangeText={(phone) => this.setState({phone})}/>
                    </View>
                </View>
                <View style={[styles.flexDirection, styles.topStatus]}>
                    <View style={styles.Icon}>
                        <Image source={require('../images/icon_password.png')} style={styles.img}/>
                    </View>
                    <View style={{flex: 1}}>
                        <TextInput
                            style={styles.userInput}
                            placeholder="请输入密码"
                            secureTextEntry={true}
                            selectTextOnFocus={true}
                            underlineColorAndroid="transparent"
                            value={this.state.password}
                            onChangeText={(password) => this.setState({password})}/>
                    </View>
                </View>
                <TouchableHighlight onPress={this._onButtonClickToAiErLife.bind(this)}
                                    activeOpacity ={0.7}
                                    underlayColor="#6495ed"
                                    style={[styles.btn, styles.topStatus]}>
                    <Text>登录</Text>
                </TouchableHighlight>
                <ActivityIndicator animating={this.state.animating} size={this.state.circleSize}/>
                <TouchableHighlight
                    accessibilityLabel="See an informative alert"
                    activeOpacity ={0.7}>
                    <View style={styles.horizontal}>
                        <Text style={{color: '#808080'}}
                              onPress={this._onButtonClickToResetPossword.bind(this)}>忘记密码? </Text>
                        <Text style={{color: '#808080'}} onPress={this._onButtonClickToRegistered.bind(this)}>注册</Text>
                    </View>
                </TouchableHighlight>
                <View>
                    <Image style={styles.loginBg} source={require('../images/login_bg.png')}/>
                </View>
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
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    flexDirection: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#808080',
        height: 45,
        width: 3 * width / 4,
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
        width: 3 * width / 4,
        borderWidth: 1,
        borderColor: '#808080',
        height: 45,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginBg: {
        width: width,
        // height:400,
        resizeMode: 'contain',
    },
});
