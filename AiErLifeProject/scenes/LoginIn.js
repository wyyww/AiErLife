

//登录界面，，登录界面可以跳转到，重置密码，注册，爱尔生活

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

import Logo from '../images/logo.png';
import IconAccountnumber from '../images/icon_accountnumber.png';
var Dimensions = require('Dimensions');//获取Dimensions库得到屏幕的宽高
let {height, width} = Dimensions.get('window')

export default class LoginIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userNumber: '15529625328',
            userPassword: '000000',
        }
    }

    //跳转到重置密码页面
    _onButtonClickToResetPossword() {
        const { navigate } = this.props.navigation;
        navigate('ResetPassword');
    }
    //跳转到用户注册界面
    _onButtonClickToRegistered() {
        const { navigate } = this.props.navigation;
        navigate('RegisteredUser');
    }

    //跳转到爱尔生活界面
    _onButtonClickToAiErLife() {
        const { navigate } = this.props.navigation;
        navigate('AiErHomeTabNavigator');
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
                <TouchableHighlight   onPress={this._onButtonClickToAiErLife.bind(this)} style={[styles.btn, styles.topStatus]}>
                    <Text>登录</Text>
                </TouchableHighlight>
                <TouchableHighlight accessibilityLabel="See an informative alert" >
                    <View style={styles.horizontal}>
                        <Text style={{ color: '#808080'}} onPress={this._onButtonClickToResetPossword.bind(this)}>忘记密码? </Text>
                        <Text style={{ color: '#808080'}} onPress={this._onButtonClickToRegistered.bind(this)}>注册</Text>
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
        width: 2*width/3,
    },
    topLevelStatus:{
        marginTop:50,
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
        borderWidth: 1,
        width: 2*width/3,
        borderWidth: 1,
        borderColor: '#808080',
        height: 45,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginBg:{
        width:width,
        // height:400,
        resizeMode:'contain',
    },
});

                // <Button title=" 跳转到爱尔诊所" onPress={this._onButtonClickToAiErClnic.bind(this)}></Button>
                // <Button title=" 跳转到诊室详情" onPress={this._onButtonClickToClinicDetails.bind(this)}></Button>
                // <Button title=" 跳转到诊室" onPress={this._onButtonClickToClinicIntroduction.bind(this)}></Button>
                // <Button title=" 跳转到科室医生列表" onPress={this._onButtonClickToDepartmentDoctorsIntroduced.bind(this)}></Button>
                // <Button title=" 跳转到医生简介" onPress={this._onButtonClickToDoctorSpecificIntroduction.bind(this)}></Button>
                // <Button title=" 跳转到家庭联系人" onPress={this._onButtonClickToFamilyContactPerson.bind(this)}></Button>
                // <Button title=" 跳转到添加联系人" onPress={this._onButtonClickToAddContacts.bind(this)}></Button>
                // <Button title=" 跳转到修改家庭联系人" onPress={this._onButtonClickToModifyContacts.bind(this)}></Button>
                // <Button title=" 跳转到我的服务" onPress={this._onButtonClickToMyServiceDoctor.bind(this)}></Button>
                // <Button title=" 跳转到病情描述" onPress={this._onButtonClickToPatientConditionDescription.bind(this)}></Button>
                // <Button title=" 跳转到我的预约" onPress={this._onButtonClickToUserMyAppointment.bind(this)}></Button>
                // <Button title=" 跳转到用户支付界面" onPress={this._onButtonClickToUserPayment.bind(this)}></Button>
                // <Button title=" 跳转到个人信息" onPress={this._onButtonClickToUserPersonalCenter.bind(this)}></Button>
                // <Button title=" 跳转到个人中心" onPress={this._onButtonClickToUserPersonalInformation.bind(this)}></Button>

   // //跳转到添加联系人
    // _onButtonClickToAddContacts(){
    //     const { navigate } =this.props.navigation;
    //     navigate('AddContacts');
    // }
    //
    // //跳转到爱尔诊所
    // _onButtonClickToAiErClnic(){
    //     const { navigate } =this.props.navigation;
    //     navigate('AiErClinic');
    // }
    //
    // //跳转到诊室详情
    // _onButtonClickToClinicDetails(){
    //     const { navigate } =this.props.navigation;
    //     navigate('ClinicDetails');
    // }
    //
    // //跳转到诊室
    // _onButtonClickToClinicIntroduction(){
    //     const { navigate } =this.props.navigation;
    //     navigate('ClinicIntroduction');
    // }
    //
    // //科室医生列表
    // _onButtonClickToDepartmentDoctorsIntroduced(){
    //     const { navigate } =this.props.navigation;
    //     navigate('DepartmentDoctorsIntroduced');
    // }
    //
    // //跳转到医生简介
    // _onButtonClickToDoctorSpecificIntroduction(){
    //     const { navigate } =this.props.navigation;
    //     navigate('DoctorSpecificIntroduction');
    // }
    //
    // //跳转到家庭联系人
    // _onButtonClickToFamilyContactPerson(){
    //     const { navigate } =this.props.navigation;
    //     navigate('FamilyContactPerson');
    // }
    //
    // //跳转到修改家庭联系人
    // _onButtonClickToModifyContacts(){
    //     const { navigate } =this.props.navigation;
    //     navigate('ModifyContacts');
    // }
    //
    // //跳转到我的服务
    // _onButtonClickToMyServiceDoctor(){
    //     const { navigate } =this.props.navigation;
    //     navigate('MyServiceDoctor');
    // }
    //
    // //病情描述
    // _onButtonClickToPatientConditionDescription(){
    //     const { navigate } =this.props.navigation;
    //     navigate('PatientConditionDescription');
    // }
    //
    // //跳转到我的预约
    // _onButtonClickToUserMyAppointment(){
    //     const { navigate } =this.props.navigation;
    //     navigate('UserMyAppointment');
    // }
    //
    // //跳转到用户支付界面
    // _onButtonClickToUserPayment(){
    //     const { navigate } =this.props.navigation;
    //     navigate('UserPayment');
    // }
    //
    // //跳转到个人信息
    // _onButtonClickToUserPersonalCenter(){
    //     const { navigate } =this.props.navigation;
    //     navigate('UserPersonalCenter');
    // }
    //
    // //跳转到个人中心
    // _onButtonClickToUserPersonalInformation(){
    //     const { navigate } =this.props.navigation;
    //     navigate('UserPersonalInformation');
    // }