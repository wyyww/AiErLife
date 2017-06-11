/**
 * Created by PC on 2017/6/8.
 */

import React,{Component} from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet,
} from 'react-native'
import TabNavigator from 'react-native-tab-navigator';

// 引入三个导航组件
import AiErLife from '../AiErLife';
import MyServiceDoctor from '../MyServiceDoctor';
import UserPersonalInformation from '../UserPersonalInformation';

export default class AiErHomeTabNavigator  extends Component{

    constructor(props) {
       super(props)
            this.state={
                selectedTab:'首页', //默认页面为“首页”
            }
        }

        render(){
            const { navigate } =this.props.navigation;
            return(
                <View style={styles.container}>
                    <TabNavigator>
                        <TabNavigator.Item
                            selected={this.state.selectedTab === '首页'}
                            title="首页"
                            renderIcon={() => <Image style={styles.icon} source={require('../../images/ic_nor_home.png')} />}
                            renderSelectedIcon={() => <Image style={styles.icon} source={require('../../images/ic_press_home.png')} />}
                            badgeText="1"
                            onPress={() => this.setState({ selectedTab: '首页' })}>
                            <AiErLife />
                        </TabNavigator.Item>
                        <TabNavigator.Item
                            selected={this.state.selectedTab === '我的服务'}
                            title="我的服务"
                            renderIcon={() => <Image style={styles.icon} source={require('../../images/ic_nor_service.png')} />}
                            renderSelectedIcon={() => <Image style={styles.icon} source={require('../../images/ic_press_service.png')} />}
                            onPress={() =>{
                                this.setState({ selectedTab: '我的服务'});
                            }}>
                            <MyServiceDoctor />
                        </TabNavigator.Item>
                        <TabNavigator.Item
                            selected={this.state.selectedTab === '个人中心'}
                            title="个人中心"
                            renderIcon={() => <Image style={styles.icon} source={require('../../images/ic_nor_me.png')} />}
                            renderSelectedIcon={() => <Image style={styles.icon} source={require('../../images/ic_press_me.png')} />}
                            onPress={() => this.setState({ selectedTab: '个人中心' })}>
                            <UserPersonalInformation />
                        </TabNavigator.Item>
                    </TabNavigator>
                </View>
            )
        }
}

let styles=StyleSheet.create({
        container: {
            flex: 1
        },
        tabText: {
            color: "#000000",
            fontSize: 13
        },
        selectedTabText: {
            color: "#999999",
            fontSize: 13
        },
        icon: {
            width: 20,
            height: 20
        }
});