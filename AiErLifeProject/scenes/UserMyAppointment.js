//用户中我的预约界面
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
    ListView,
    TouchableHighlight,
    AsyncStorage
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import {TabNavigator} from "react-navigation";

import NetUitl from './plugins/NetUitl';
import API from './plugins/API';


// 获取屏幕宽度
var Dimensions = require('Dimensions');
const screenW = Dimensions.get('window').width;

//我的预约中未付款的
class MyAppointmentUnPaid extends Component {
    static navigationOptions = {
        title: '我的预约',
    };

    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            token: '',
            normal_user_id: '',
            dataSource: ds,
        };
    }

    componentDidMount() {
        AsyncStorage.getItem('normal_user_id', (err, res) => {
            // console.log(res);
            this.setState({
                normal_user_id: res,
            })
        })
        AsyncStorage.getItem('myToken', (err, res) => {
            // console.log(res)
            this.setState({
                token: res,
            }, () => {
                this._freshingData()
            })
        });
    }

    _freshingData() {
        let that = this;
        let params = {
            token: this.state.token,
            normal_user_id: this.state.normal_user_id,
        }
        NetUitl.get(API.APIList.normal_user_unpaid, params, function (response) {
            let res = response.result;
            // console.log(res);
            that.setState({
                dataSource: that.state.dataSource.cloneWithRows(res)
            })
        })
    }

    _renderRow(rowData) {
        return (
            <TouchableHighlight onPress={() => {
                this._onPressRow
            }}>
                <View style={styles.list_frame}>
                    <View style={styles.list_row}>
                        <Text>{rowData.appointment_time}{rowData.patient_name} </Text>
                        <Text>{rowData.time_type == 1 ? "普通" : rowData.time_type == 2 ? "加急" : "实时"}预约</Text>
                    </View>
                    <View style={styles.list_row}>
                        <Text >{rowData.doctor_department} {rowData.doctor_name}</Text>
                        <Text>￥{rowData.price}</Text>
                    </View>
                </View>
            </TouchableHighlight >
        )
    }

    _onPressRow() {
        console.log('这是已经预约的内容');
    }

    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this._renderRow.bind(this)}
            />
        );
    }
}

//已经付款的界面
class MyAppointmentAlreadyPaid extends Component {

    static navigationOptions = {
        title: '我的预约',
    };

    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            normal_user_id: '',
            token: '',
            dataSource: ds,
        };
    }

    componentDidMount() {
        AsyncStorage.getItem('normal_user_id', (err, res) => {
            // console.log(res);
            this.setState({
                normal_user_id: res,
            })
        })
        AsyncStorage.getItem('myToken', (err, res) => {
            // console.log(res)
            this.setState({
                token: res,
            }, () => {
                this._freshingData()
            })
        });
    }

    _freshingData() {
        let that = this;
        let params = {
            token: this.state.token,
            normal_user_id: this.state.normal_user_id,
        }
        NetUitl.get(API.APIList.normal_user_paid, params, function (response) {
            let res = response.result;
            // console.log(res);
            that.setState({
                dataSource: that.state.dataSource.cloneWithRows(res)
            })
        })
    }

    _renderRow(rowData) {
        return (
            <TouchableHighlight onPress={() => {
                this._onPressRow
            }}>
                <View style={styles.list_frame}>
                    <View style={styles.list_row}>
                        <Text>{rowData.appointment_time}{rowData.patient_name} </Text>
                        <Text>{rowData.time_type == 1 ? "普通" : rowData.time_type == 2 ? "加急" : "实时"}预约</Text>
                    </View>
                    <View style={styles.list_row}>
                        <Text >{rowData.doctor_department} {rowData.doctor_name}</Text>
                        <Text>￥{rowData.price}</Text>
                    </View>
                </View>
            </TouchableHighlight >
        )
    }

    _onPressRow() {
        console.log('这是我的已支付的页面')
    }

    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this._renderRow.bind(this)}
            />
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    list_frame: {
        width: screenW,
        // height:70,
        borderBottomWidth: 1,
        flexDirection: 'column',
        padding: 10,
    },
    list_row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
});
const UserMyAppointment = TabNavigator({
    MyAppointmentUnPaid: {
        screen: MyAppointmentUnPaid,
        navigationOptions: {  // 也可以写在组件的static navigationOptions内
            tabBarLabel: '未付款',
        }
    },
    MyAppointmentAlreadyPaid: {
        screen: MyAppointmentAlreadyPaid,
        navigationOptions: {  // 也可以写在组件的static navigationOptions内
            tabBarLabel: '已付款',
        }
    },
}, {
    animationEnabled: false, // 切换页面时是否有动画效果
    tabBarPosition: 'top', // 显示在底端，android 默认是显示在页面顶端的
    swipeEnabled: false, // 是否可以左右滑动切换tab
    backBehavior: 'none', // 按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
    tabBarOptions: {
        activeTintColor: '#ff8500', // 文字和图片选中颜色
        inactiveTintColor: '#999', // 文字和图片未选中颜色
        showIcon: false, // android 默认不显示 icon, 需要设置为 true 才会显示
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

export default UserMyAppointment;