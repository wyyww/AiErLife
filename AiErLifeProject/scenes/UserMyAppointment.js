

//用户中我的预约界面
import React,{ Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
    ListView,
    TouchableHighlight
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { TabNavigator } from "react-navigation";
// 获取屏幕宽度
var Dimensions = require('Dimensions');
const screenW = Dimensions.get('window').width;

class MyAppointmentUnPaid extends Component {
    static navigationOptions={
        title:'我的预约',
    };
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([{
                reservationName:'邓超（新生儿）',
                reservationType:'加急预约',
                reservationSection:"口腔科",
                appointmentDoctor:'孙医生',
                reservationDoctorJobNumber:"007",
                reservationTime:"2017-07-16 17:00:00",
                reservationExpense:'0.01',
            },{
                reservationName:'王皓（新生儿）',
                reservationType:'普通预约',
                reservationSection:"新生儿科",
                appointmentDoctor:'李医生',
                reservationDoctorJobNumber:"057",
                reservationTime:"2017-07-16 17:00:00",
                reservationExpense:'0.01',
            },{
                reservationName:'王佳玉',
                reservationType:'加急预约',
                reservationSection:"口腔科",
                appointmentDoctor:'孙医生',
                reservationDoctorJobNumber:"007",
                reservationTime:"2017-03-16 17:06:00",
                reservationExpense:'0.00',
            }]),
        };
    }
    _renderRow(rowData){
        return (
            <TouchableHighlight onPress={() => {this._onPressRow}}>
                <View style={styles.list_frame}>
                    <View style={styles.list_row}>
                        <Text>{rowData.reservationTime}{rowData.reservationName} </Text>
                        <Text>{rowData.reservationType}</Text>
                    </View>
                        <View style={styles.list_row}>
                            <Text >{rowData.reservationSection} {rowData.appointmentDoctor}({rowData.reservationDoctorJobNumber})</Text>
                            <Text>￥{rowData.reservationExpense}</Text>
                        </View>
                </View>
            </TouchableHighlight >
        )
    }

    _onPressRow(){
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

    static navigationOptions={
        title:'我的预约',
    };
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([{
                reservationName:'邓超（新生儿）',
                reservationType:'加急预约',
                reservationSection:"口腔科",
                appointmentDoctor:'孙医生',
                reservationDoctorJobNumber:"007",
                reservationTime:"2017-07-16 17:00:00",
                reservationExpense:'0.01',
            },{
                reservationName:'王皓（新生儿）',
                reservationType:'普通预约',
                reservationSection:"新生儿科",
                appointmentDoctor:'李医生',
                reservationDoctorJobNumber:"057",
                reservationTime:"2017-07-16 17:00:00",
                reservationExpense:'0.01',
            },{
                reservationName:'王佳玉',
                reservationType:'加急预约',
                reservationSection:"口腔科",
                appointmentDoctor:'孙医生',
                reservationDoctorJobNumber:"007",
                reservationTime:"2017-03-16 17:06:00",
                reservationExpense:'0.00',
            },{
                reservationName:'李美玲',
                reservationType:'加急预约',
                reservationSection:"内科",
                appointmentDoctor:'王医生',
                reservationDoctorJobNumber:"025",
                reservationTime:"2017-07-17 13:00:00",
                reservationExpense:'0.01',
            },{
                reservationName:'刘宇鹏',
                reservationType:'普通预约',
                reservationSection:"外科",
                appointmentDoctor:'刘医生',
                reservationDoctorJobNumber:"078",
                reservationTime:"2017-07-15 17:34:00",
                reservationExpense:'0.01',
            },{
                reservationName:'孙丽丽（新生儿）',
                reservationType:'普通预约',
                reservationSection:"心脏科",
                appointmentDoctor:'宋医生',
                reservationDoctorJobNumber:"008",
                reservationTime:"2017-04-16 12:20:00",
                reservationExpense:'0.00',
            },]),
        };
    }
    _renderRow(rowData){
        return (
            <TouchableHighlight onPress={() => {this._onPressRow}}>
                <View style={styles.list_frame}>
                    <View style={styles.list_row}>
                        <Text>{rowData.reservationTime}{rowData.reservationName} </Text>
                        <Text>{rowData.reservationType}</Text>
                    </View>
                    <View style={styles.list_row}>
                        <Text >{rowData.reservationSection} {rowData.appointmentDoctor}({rowData.reservationDoctorJobNumber})</Text>
                        <Text>￥{rowData.reservationExpense}</Text>
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
        list_frame:{
            width:screenW,
            // height:70,
            borderBottomWidth:1,
            flexDirection:'column',
            padding:10,
        },
    list_row:{
        flexDirection:'row',
        justifyContent:'space-between',
    }
});
const UserMyAppointment=TabNavigator({
    MyAppointmentUnPaid:{screen:MyAppointmentUnPaid,
        navigationOptions: {  // 也可以写在组件的static navigationOptions内
            tabBarLabel:  '未付款',
        }},
    MyAppointmentAlreadyPaid:{screen:MyAppointmentAlreadyPaid,
        navigationOptions: {  // 也可以写在组件的static navigationOptions内
            tabBarLabel:  '已付款',
        }},
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