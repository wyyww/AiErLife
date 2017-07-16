

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import LoginIn from './scenes/LoginIn';
import ResetPassword from './scenes/ResetPassword';
import RegisteredUser from './scenes/RegisteredUser';
import AiErLife from './scenes/AiErLife';
import AiErClinic from './scenes/AiErClinic';
import ClinicDetails from './scenes/ClinicDetails';
import ClinicIntroduction from './scenes/ClinicIntroduction';
import AddContacts from './scenes/AddContacts';
import ClinicAddress from './scenes/ClinicAddress';
import DepartmentDoctorsIntroduced from './scenes/DepartmentDoctorsIntroduced';

import DoctorSpecificIntroduction from './scenes/DoctorSpecificIntroduction';
import FamilyContactPerson from './scenes/FamilyContactPerson';
import ModifyContacts from './scenes/ModifyContacts';
import MyServiceDoctor from './scenes/MyServiceDoctor';
import PatientConditionDescription from './scenes/PatientConditionDescription';
import UserMyAppointment from './scenes/UserMyAppointment';
import UserPayment from './scenes/UserPayment';
import ModifyUserPersonalCenter from './scenes/ModifyUserPersonalCenter';
import UserPersonalInformation from './scenes/UserPersonalInformation';

import ItemCell from './scenes/plugins/ItemCell'

import AiErHomeNavigationTabNavigator from './scenes/plugins/AiErHomeNavigationTabNavigator'
// import AiErHomeTabNavigator from './scenes/plugins/AiErHomeTabNavigator';            这个暂时不可用，react-native-tab-navigaator和react-navigation可能不能一起使用
const AiErLifeProject=StackNavigator({
    LoginIn:{ screen: LoginIn },                                                 //登录界面
    ResetPassword:{ screen:ResetPassword },                                      //重置密码
    RegisteredUser:{screen:RegisteredUser},                                      //注册界面
    AiErLife:{screen:AiErLife},                                                 //爱尔生活界面
    AiErClinic:{screen:AiErClinic},                                             //爱尔相关的诊所
    ClinicDetails:{screen:ClinicDetails},                                       //某一个具提的诊室详情
    ClinicIntroduction:{screen:ClinicIntroduction},                              //诊所介绍
    AddContacts:{screen:AddContacts},                                            //添加联系人
    ClinicAddress:{screen:ClinicAddress},                                      //诊所地址
    DepartmentDoctorsIntroduced:{screen:DepartmentDoctorsIntroduced },          //诊室医生介绍
    DoctorSpecificIntroduction:{screen:DoctorSpecificIntroduction},             //医生简介
    FamilyContactPerson:{screen:FamilyContactPerson},                           //家庭联系人
    ModifyContacts:{screen:ModifyContacts},                                     //修改家庭联系人
    MyServiceDoctor:{screen:MyServiceDoctor},                                      //我的服务
    PatientConditionDescription:{screen:PatientConditionDescription},           //病情描述界面
    UserMyAppointment:{screen:UserMyAppointment},                               //我的预约
    UserPayment:{screen:UserPayment},                                           //用户支付界面
    ModifyUserPersonalCenter:{screen:ModifyUserPersonalCenter},                     //修改个人信息
    UserPersonalInformation:{screen:UserPersonalInformation},                       //用户中心

    AiErHomeNavigationTabNavigator:{screen:AiErHomeNavigationTabNavigator},           //三大主题底部导航
    // AiErHomeTabNavigator:{screen:AiErHomeTabNavigator },                          //主页底部导航栏，插件
    ItemCell:{screen:ItemCell}                                                  //个人中心添加对的插件，不知道能不能解决无法跳转问题
})
AppRegistry.registerComponent('AiErLifeProject', () => AiErLifeProject);
