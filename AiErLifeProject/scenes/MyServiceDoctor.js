//我的个人服务
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Platform,
    TextInput,
    ListView,
    Image,
    TouchableHighlight,
    AsyncStorage,
    RefreshControl
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import {TabNavigator} from "react-navigation";

import NetUitl from './plugins/NetUitl';
import API from './plugins/API'

// 获取屏幕宽度
var Dimensions = require('Dimensions');
const {width, height} = Dimensions.get('window');

class Confirmed extends React.Component {

    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            token: '',
            normal_user_id: '',
            dataSource: ds,
            isRefreshing:false,
        };
    }

    componentDidMount() {
        AsyncStorage.getItem('normal_user_id', (err, res) => {
            // console.log(res)
            this.setState({
                normal_user_id: res,
            }, () => {
            })
        })
        AsyncStorage.getItem('myToken', (err, res) => {
            this.setState({
                token: res,
            }, () => {
                this._onRefresh();
            })
        })
    }

    _onRefresh() {
        this.setState({
            isRefreshing:true,
        })
        let that = this;
        let params = {
            token: this.state.token,
            normal_user_id: this.state.normal_user_id,
            confirm_state: 1,
        }
        NetUitl.get(API.APIList.normal_user_confirmed, params, function (res) {
            // console.log(res);
            that.setState({
                isRefreshing:false,
                dataSource: that.state.dataSource.cloneWithRows(res.result)
            })
        })
    }

    _renderRow(rowData) {
        return (
            <TouchableHighlight
                activeOpacity={0.8}
                underlayColor="#808080"
                onPress={() => {}}>
                <View style={styles.list_frame}>
                    <View style={styles.list_icon}>
                        <Image source={{uri: rowData.doctor_head_url}} style={{width: 80, height: 80}}/>
                    </View>
                    <View >
                        <View style={{flexDirection: 'row',}}>
                            <Text
                                style={{fontSize: 17, fontWeight: '400', paddingRight: 20}}>{rowData.doctor_name}</Text>
                            <Text>{rowData.doctor_job_title}</Text>
                        </View>
                        <Text>{rowData.address}</Text>
                        <View style={styles.list_time}>
                            <Text style={styles.list_color}>服务时间:{rowData.service_time}</Text>
                        </View>
                    </View>
                </View>

            </TouchableHighlight >
        )
    }

    // _onPressRow() {
    //     console.log(this.props);
    // }

    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this._renderRow.bind(this)}
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.isRefreshing}
                        onRefresh={this._onRefresh.bind(this)}
                        tintColor="#ff0000"
                        title="Loading..."
                        titleColor="#00ff00"
                        colors={['#808080', '#ff0000', '#0000ff']}
                        progressBackgroundColor="#ffffff"

                    />
                }
            />
        );
    }
}

class WaitForConfirme extends React.Component {

    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            token: '',
            normal_user_id: '',
            dataSource: ds,
            isRefreshing:false,
        };
    }

    componentDidMount() {
        AsyncStorage.getItem('normal_user_id', (err, res) => {
            // console.log(res)
            this.setState({
                normal_user_id: res,
            }, () => {
            })
        })
        AsyncStorage.getItem('myToken', (err, res) => {
            this.setState({
                token: res,
            }, () => {
                this._onRefresh();
            })
        })
    }

    _onRefresh() {
        this.setState({
            isRefreshing:true,
        })
        let that = this;
        let params = {
            token: this.state.token,
            normal_user_id: this.state.normal_user_id,

        }
        NetUitl.get(API.APIList.normal_user_unconfirmed, params, function (res) {
            // console.log(res);
            that.setState({
                isRefreshing:false,
                dataSource: that.state.dataSource.cloneWithRows(res.result)
            })
        })
    }

    _renderRow(rowData) {
        return (
            <TouchableHighlight
                activeOpacity={0.8}
                underlayColor="#808080"
                onPress={() => {}}>
                <View style={styles.list_frame}>
                    <View style={styles.list_icon}>
                        <Image source={{uri: rowData.patient_image_url}} style={{width: 80, height: 80}}/>
                    </View>
                    <View >
                        <View style={{flexDirection: 'row',}}>
                            <Text
                                style={{fontSize: 17, fontWeight: '400', paddingRight: 20}}>{rowData.doctor_name}</Text>
                            <Text>{rowData.doctor_job_title}</Text>
                        </View>
                        <Text>{rowData.appointment_address}</Text>
                        <View style={styles.list_time}>
                            <Text style={styles.list_color}>服务时间:{rowData.service_time}</Text>
                        </View>
                    </View>
                </View>
            </TouchableHighlight >
        )
    }

    // _onPressRow() {
    //     console.log('这是我的待确认，我厉害');
    // }

    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this._renderRow.bind(this)}
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.isRefreshing}
                        onRefresh={this._onRefresh.bind(this)}
                        tintColor="#ff0000"
                        title="Loading..."
                        titleColor="#00ff00"
                        colors={['#808080', '#ff0000', '#0000ff']}
                        progressBackgroundColor="#ffffff"

                    />
                }
            />
        );
    }
}
class WaitForReferral extends React.Component {
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            token: '',
            normal_user_id: '',
            dataSource: ds,
            isRefreshing:false,
        };
    }

    componentDidMount() {
        AsyncStorage.getItem('normal_user_id', (err, res) => {
            // console.log(res)
            this.setState({
                normal_user_id: res,
            }, () => {
            })
        })
        AsyncStorage.getItem('myToken', (err, res) => {
            this.setState({
                token: res,
            }, () => {
                this._onRefresh();
            })
        })
    }

    _onRefresh() {
        this.setState({
            isRefreshing:true,
        })
        let that = this;
        let params = {
            token: this.state.token,
            normal_user_id: this.state.normal_user_id,

        }
        NetUitl.get(API.APIList.normal_user_paid, params, function (res) {
            // console.log(res);
            that.setState({
                isRefreshing:false,
                dataSource: that.state.dataSource.cloneWithRows(res.result)
            })
        })
    }

    _renderRow(rowData) {
        return (
            <TouchableHighlight      activeOpacity={0.8}
                                 underlayColor="#808080"
                                 onPress={() => {}}>
                <View style={styles.list_frame}>
                    <View style={styles.list_icon}>
                        <Image source={{uri: rowData.doctor_head_url}} style={{width: 80, height: 80}}/>
                    </View>
                    <View >
                        <View style={{flexDirection: 'row',}}>
                            <Text
                                style={{fontSize: 17, fontWeight: '400', paddingRight: 20}}>{rowData.doctor_name}</Text>
                            <Text>{rowData.doctor_job_title}</Text>
                        </View>
                        <Text>{rowData.appointment_address}</Text>
                        <View style={styles.list_time}>
                            <Text style={styles.list_color}>建议复诊时间:{rowData.appointment_time}</Text>
                        </View>
                    </View>
                </View>
            </TouchableHighlight >
        )
    }

    // _onPressRow() {
    //     console.log('这是我的待复诊，我厉害');
    // }

    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this._renderRow.bind(this)}
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.isRefreshing}
                        onRefresh={this._onRefresh.bind(this)}
                        tintColor="#ff0000"
                        title="Loading..."
                        titleColor="#00ff00"
                        colors={['#808080', '#ff0000', '#0000ff']}
                        progressBackgroundColor="#ffffff"

                    />
                }
            />
        );
    }
}

class WaitForPay extends React.Component {

    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            token: '',
            normal_user_id: '',
            dataSource: ds,
            isRefreshing:false,
        };
    }

    componentDidMount() {
        AsyncStorage.getItem('normal_user_id', (err, res) => {
            // console.log(res)
            this.setState({
                normal_user_id: res,
            }, () => {
            })
        })
        AsyncStorage.getItem('myToken', (err, res) => {
            this.setState({
                token: res,
            }, () => {
                this._onRefresh();
            })
        })
    }

    _onRefresh() {
        this.setState({
            isRefreshing:true,
        })
        let that = this;
        let params = {
            token: this.state.token,
            normal_user_id: this.state.normal_user_id,

        }
        NetUitl.get(API.APIList.normal_user_unpaid, params, function (res) {
            // console.log(res);
            that.setState({
                isRefreshing:false,
                dataSource: that.state.dataSource.cloneWithRows(res.result)
            })
        })
    }

    _renderRow(rowData) {
        return (
            <TouchableHighlight
                activeOpacity={0.8}
                underlayColor="#808080"
                onPress={() => {}}>
                <View style={styles.list_frame}>
                    <View style={styles.list_icon}>
                        <Image source={require('../images/ben.png')} style={{width: 80, height: 80}}/>
                    </View>
                    <View >
                        <View style={{flexDirection: 'row',}}>
                            <Text
                                style={{fontSize: 17, fontWeight: '400', paddingRight: 20}}>{rowData.doctor_name}</Text>
                            <Text>{rowData.doctor_job_title}</Text>
                        </View>
                        <Text>{rowData.appointment_address}</Text>
                        <View style={styles.list_time}>
                            <Text style={styles.list_color}>服务时间{rowData.appointment_time}</Text>
                        </View>
                    </View>
                </View>
            </TouchableHighlight >
        )
    }

    // _onPressRow() {
    //     console.log('这是我需要支付的页面，我厉害');
    // }

    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this._renderRow.bind(this)}
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.isRefreshing}
                        onRefresh={this._onRefresh.bind(this)}
                        tintColor="#ff0000"
                        title="Loading..."
                        titleColor="#00ff00"
                        colors={['#808080', '#ff0000', '#0000ff']}
                        progressBackgroundColor="#ffffff"

                    />
                }
            />
        );
    }
}
const styles = StyleSheet.create({
    list_frame: {
        width: width,
        height: 120,
        borderTopWidth: 1,
        borderColor: '#DCDCDC',
        flexDirection: 'row',
        backgroundColor:"#fff",
        padding: 10,
    },
    list_time: {
        borderWidth: 1,
        borderColor: '#09a9ef',
        width: 2 * width / 3,
        padding: 2,
        borderRadius: 5
    },
    list_color: {
        color: '#09a9ef'
    },
    list_icon: {
        width: 100,
    }
});

const MyServiceDoctor = TabNavigator({

    Confirmed: {
        screen: Confirmed,
        navigationOptions: {  // 也可以写在组件的static navigationOptions内
            tabBarLabel: '已确认',
            title: "我的服务",
            headerTitleStyle: {
                fontSize: 17,
                alignSelf: 'center',
            },
        }
    },
    WaitForConfirme: {
        screen: WaitForConfirme,
        navigationOptions: {  // 也可以写在组件的static navigationOptions内
            tabBarLabel: '待确认',
            title: "我的服务",
            headerTitleStyle: {
                fontSize: 17,
                alignSelf: 'center',
            },

        }
    },
    WaitForReferral: {
        screen: WaitForReferral,
        navigationOptions: {  // 也可以写在组件的static navigationOptions内
            tabBarLabel: '待复诊',
            title: "我的服务",
            headerTitleStyle: {
                fontSize: 17,
                alignSelf: 'center',
            },

        }
    },
    WaitForPay: {
        screen: WaitForPay,
        navigationOptions: {  // 也可以写在组件的static navigationOptions内
            tabBarLabel: '待支付',
            title: "我的服务",
            headerTitleStyle: {
                fontSize: 17,
                alignSelf: 'center',
            },
        }
    },

}, {
    animationEnabled: false, // 切换页面时是否有动画效果
    tabBarPosition: 'top', // 显示在底端，android 默认是显示在页面顶端的
    swipeEnabled: true, // 是否可以左右滑动切换tab
    backBehavior: 'none', // 按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
    tabBarOptions: {
        activeTintColor: '#d2691e', // 文字和图片选中颜色
        inactiveTintColor: '#999', // 文字和图片未选中颜色
        showIcon: false, // android 默认不显示 icon, 需要设置为 true 才会显示
        indicatorStyle: {
            height: 1  // 如TabBar下面显示有一条线，可以设高度为0后隐藏
        },
        style: {
            backgroundColor: '#fff', // TabBar 背景色
        },
        labelStyle: {
            fontSize: 14, // 文字大小
        },
    },
})

export default MyServiceDoctor;


