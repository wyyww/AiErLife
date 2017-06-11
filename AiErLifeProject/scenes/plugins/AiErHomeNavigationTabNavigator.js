/**
 * Created by PC on 2017/6/10.
 */

import React,{ Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
    ListView,
    Image,
    TouchableHighlight,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { TabNavigator } from "react-navigation";

import AiErLife from '../AiErLife';
import MyServiceDoctor from '../MyServiceDoctor';
import UserPersonalInformation from '../UserPersonalInformation';

const AiErHomeNavigationTabNavigator=TabNavigator({
    AiErLife:{screen:AiErLife,
        navigationOptions: {  // 也可以写在组件的static navigationOptions内
            tabBarLabel:  '主页',
            tabBarIcon: ({tintColor,focused}) => (
                focused
                    ?
                    <Image
                        source={require('../../images/ic_press_home.png')}
                        style={[styles.icon]}
                    />
                    :
                    <Image
                        source={require('../../images/ic_nor_home.png')}
                        style={[styles.icon]}
                    />
            ),
        }
    },
    MyServiceDoctor:{screen:MyServiceDoctor,
        navigationOptions: {  // 也可以写在组件的static navigationOptions内
            tabBarLabel:  '我的服务',
            tabBarIcon: ({tintColor,focused}) => (
                focused
                    ?
                    <Image
                        source={require('../../images/ic_press_service.png')}
                        style={[styles.icon]}
                    />
                    :
                    <Image
                        source={require('../../images/ic_nor_service.png')}
                        style={[styles.icon]}
                    />
            ),
        }
    },
    UserPersonalInformation:{screen:UserPersonalInformation,
        navigationOptions: {  // 也可以写在组件的static navigationOptions内
            tabBarLabel:  '个人中心',
            tabBarIcon: ({tintColor,focused}) => (
                focused
                    ?
                    <Image
                        source={require('../../images/ic_press_me.png')}
                        style={[styles.icon]}
                    />
                    :
                    <Image
                        source={require('../../images/ic_nor_me.png')}
                        style={[styles.icon]}
                    />
            ),
        }
    },
}, {
    animationEnabled: false, // 切换页面时是否有动画效果
    tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
    swipeEnabled: true, // 是否可以左右滑动切换tab
    backBehavior: 'none', // 按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
    tabBarOptions: {
        activeTintColor: '#999', // 文字和图片选中颜色
        inactiveTintColor: '#999', // 文字和图片未选中颜色
        showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
        indicatorStyle: {
            height: 0  // 如TabBar下面显示有一条线，可以设高度为0后隐藏
        },
        style: {
            backgroundColor: '#fff', // TabBar 背景色
            // height: 44
        },
        labelStyle: {
            fontSize: 10, // 文字大小
        },
    },
})

const styles=StyleSheet.create({
    icon:{
        height:26,
        width:26
    }
})

export default AiErHomeNavigationTabNavigator;