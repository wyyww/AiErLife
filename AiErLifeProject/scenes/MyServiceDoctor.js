

//我的个人服务
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

// 获取屏幕宽度
var Dimensions = require('Dimensions');
const screenW = Dimensions.get('window').width;

class Confirmed extends React.Component {
    // static navigationOptions={
    //     title:'已确认',
    // };
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([{
                name:'邓医生（新生儿）',
                imageSrc:'../images/ben.png',
                doctorLevel:"医师",
                address:"爱尔诊所后宰门诊室 后宰门130号创之星大厦一单元122（中户",
                serviceTime:"2017-07-16 17:00:00"
            },{
                name:'邓医生（新生儿）',
                imageSrc:'../images/ben.png',
                doctorLevel:"医师",
                address:"爱尔诊所后宰门诊室 后宰门130号创之星大厦一单元122（中户",
                serviceTime:"2017-07-16 17:00:00"
            },{
                name:'邓医生（新生儿）',
                imageSrc:'../images/ben.png',
                doctorLevel:"医师",
                address:"爱尔诊所后宰门诊室 后宰门130号创之星大厦一单元122（中户",
                serviceTime:"2017-07-16 17:00:00"
            },{
                name:'邓医生（新生儿）',
                imageSrc:'../images/ben.png',
                doctorLevel:"医师",
                address:"爱尔诊所后宰门诊室 后宰门130号创之星大厦一单元122（中户",
                serviceTime:"2017-07-16 17:00:00"
            },{
                name:'邓医生（新生儿）',
                imageSrc:'../images/ben.png',
                doctorLevel:"医师",
                address:"爱尔诊所后宰门诊室 后宰门130号创之星大厦一单元122（中户",
                serviceTime:"2017-07-16 17:00:00"
            },{
                name:'邓医生（新生儿）',
                imageSrc:'../images/ben.png',
                doctorLevel:"医师",
                address:"爱尔诊所后宰门诊室 后宰门130号创之星大厦一单元122（中户",
                serviceTime:"2017-07-16 17:00:00"
            },]),
        };
     }
   _renderRow(rowData){
        return (
            <TouchableHighlight onPress={() => this._onPressRow}>
                <View style={styles.list_frame}>
                    <View style={styles.list_icon}>
                        <Image source={require('../images/ben.png')} style={{width:80,height:80}}/>
                    </View>
                    <View >
                        <View style={{flexDirection:'row',}}>
                            <Text style={{fontSize:17,fontWeight:'400',paddingRight:20}}>{rowData.name}</Text>
                            <Text>{rowData.doctorLevel}</Text>
                        </View>
                        <Text>{rowData.address}</Text>
                        <Text>服务时间{rowData.serviceTime}</Text>
                    </View>
                    <Text onPress={()=>{console.log(this.props)}}>点击试一下呗</Text>
                </View>

            </TouchableHighlight >
        )
    }

    _onPressRow(){
        console.log(this.props);
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

class WaitForConfirme extends React.Component {
    // static navigationOptions={
    //     title:'待确认',
    // };
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([{
                name:'邓医生（新生儿）',
                imageSrc:'../images/ben.png',
                doctorLevel:"医师",
                address:"爱尔诊所后宰门诊室 后宰门130号创之星大厦一单元122（中户",
                serviceTime:"2017-07-16 17:00:00"
            },{
                name:'邓医生（新生儿）',
                imageSrc:'../images/ben.png',
                doctorLevel:"医师",
                address:"爱尔诊所后宰门诊室 后宰门130号创之星大厦一单元122（中户",
                serviceTime:"2017-07-16 17:00:00"
            },{
                name:'邓医生（新生儿）',
                imageSrc:'../images/ben.png',
                doctorLevel:"医师",
                address:"爱尔诊所后宰门诊室 后宰门130号创之星大厦一单元122（中户",
                serviceTime:"2017-07-16 17:00:00"
            },{
                name:'邓医生（新生儿）',
                imageSrc:'../images/ben.png',
                doctorLevel:"医师",
                address:"爱尔诊所后宰门诊室 后宰门130号创之星大厦一单元122（中户",
                serviceTime:"2017-07-16 17:00:00"
            },{
                name:'邓医生（新生儿）',
                imageSrc:'../images/ben.png',
                doctorLevel:"医师",
                address:"爱尔诊所后宰门诊室 后宰门130号创之星大厦一单元122（中户",
                serviceTime:"2017-07-16 17:00:00"
            },{
                name:'邓医生（新生儿）',
                imageSrc:'../images/ben.png',
                doctorLevel:"医师",
                address:"爱尔诊所后宰门诊室 后宰门130号创之星大厦一单元122（中户",
                serviceTime:"2017-07-16 17:00:00"
            },]),
        };
    }
    _renderRow(rowData){
        return (
            <TouchableHighlight onPress={() => {this._onPressRow}}>
                <View style={styles.list_frame}>
                    <View style={styles.list_icon}>
                        <Image source={require('../images/ben.png')} style={{width:80,height:80}}/>
                    </View>
                    <View >
                        <View style={{flexDirection:'row',}}>
                            <Text style={{fontSize:17,fontWeight:'400',paddingRight:20}}>{rowData.name}</Text>
                            <Text>{rowData.doctorLevel}</Text>
                        </View>
                        <Text>{rowData.address}</Text>
                        <Text>服务时间{rowData.serviceTime}</Text>
                    </View>
                </View>
            </TouchableHighlight >
        )
    }

    _onPressRow(){
        console.log('这是我的待确认，我厉害');
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
class WaitForReferral extends React.Component {
    // static navigationOptions={
    //     title:'待复诊',
    // };
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([{
                name:'邓医生（新生儿）',
                imageSrc:'../images/ben.png',
                doctorLevel:"医师",
                address:"爱尔诊所后宰门诊室 后宰门130号创之星大厦一单元122（中户",
                serviceTime:"2017-07-16 17:00:00"
            },{
                name:'邓医生（新生儿）',
                imageSrc:'../images/ben.png',
                doctorLevel:"医师",
                address:"爱尔诊所后宰门诊室 后宰门130号创之星大厦一单元122（中户",
                serviceTime:"2017-07-16 17:00:00"
            },{
                name:'邓医生（新生儿）',
                imageSrc:'../images/ben.png',
                doctorLevel:"医师",
                address:"爱尔诊所后宰门诊室 后宰门130号创之星大厦一单元122（中户",
                serviceTime:"2017-07-16 17:00:00"
            },{
                name:'邓医生（新生儿）',
                imageSrc:'../images/ben.png',
                doctorLevel:"医师",
                address:"爱尔诊所后宰门诊室 后宰门130号创之星大厦一单元122（中户",
                serviceTime:"2017-07-16 17:00:00"
            },{
                name:'邓医生（新生儿）',
                imageSrc:'../images/ben.png',
                doctorLevel:"医师",
                address:"爱尔诊所后宰门诊室 后宰门130号创之星大厦一单元122（中户",
                serviceTime:"2017-07-16 17:00:00"
            },{
                name:'邓医生（新生儿）',
                imageSrc:'../images/ben.png',
                doctorLevel:"医师",
                address:"爱尔诊所后宰门诊室 后宰门130号创之星大厦一单元122（中户",
                serviceTime:"2017-07-16 17:00:00"
            },]),
        };
    }
    _renderRow(rowData){
        return (
            <TouchableHighlight onPress={() => {this._onPressRow}}>
                <View style={styles.list_frame}>
                    <View style={styles.list_icon}>
                        <Image source={require('../images/ben.png')} style={{width:80,height:80}}/>
                    </View>
                    <View >
                        <View style={{flexDirection:'row',}}>
                            <Text style={{fontSize:17,fontWeight:'400',paddingRight:20}}>{rowData.name}</Text>
                            <Text>{rowData.doctorLevel}</Text>
                        </View>
                        <Text>{rowData.address}</Text>
                        <Text>服务时间{rowData.serviceTime}</Text>
                    </View>
                </View>
            </TouchableHighlight >
        )
    }

    _onPressRow(){
        console.log('这是我的待复诊，我厉害');
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

class WaitForPay extends React.Component {
    // static navigationOptions={
    //     title:'待支付',
    // };
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([{
                name:'邓医生（新生儿）',
                imageSrc:'../images/ben.png',
                doctorLevel:"医师",
                address:"爱尔诊所后宰门诊室 后宰门130号创之星大厦一单元122（中户",
                serviceTime:"2017-07-16 17:00:00"
            },{
                name:'邓医生（新生儿）',
                imageSrc:'../images/ben.png',
                doctorLevel:"医师",
                address:"爱尔诊所后宰门诊室 后宰门130号创之星大厦一单元122（中户",
                serviceTime:"2017-07-16 17:00:00"
            },{
                name:'邓医生（新生儿）',
                imageSrc:'../images/ben.png',
                doctorLevel:"医师",
                address:"爱尔诊所后宰门诊室 后宰门130号创之星大厦一单元122（中户",
                serviceTime:"2017-07-16 17:00:00"
            },{
                name:'邓医生（新生儿）',
                imageSrc:'../images/ben.png',
                doctorLevel:"医师",
                address:"爱尔诊所后宰门诊室 后宰门130号创之星大厦一单元122（中户",
                serviceTime:"2017-07-16 17:00:00"
            },{
                name:'邓医生（新生儿）',
                imageSrc:'../images/ben.png',
                doctorLevel:"医师",
                address:"爱尔诊所后宰门诊室 后宰门130号创之星大厦一单元122（中户",
                serviceTime:"2017-07-16 17:00:00"
            },{
                name:'邓医生（新生儿）',
                imageSrc:'../images/ben.png',
                doctorLevel:"医师",
                address:"爱尔诊所后宰门诊室 后宰门130号创之星大厦一单元122（中户",
                serviceTime:"2017-07-16 17:00:00"
            },]),
        };
    }
    _renderRow(rowData){
        return (
            <TouchableHighlight onPress={() => {this._onPressRow}}>
                <View style={styles.list_frame}>
                    <View style={styles.list_icon}>
                        <Image source={require('../images/ben.png')} style={{width:80,height:80}}/>
                    </View>
                    <View >
                        <View style={{flexDirection:'row',}}>
                            <Text style={{fontSize:17,fontWeight:'400',paddingRight:20}}>{rowData.name}</Text>
                            <Text>{rowData.doctorLevel}</Text>
                        </View>
                        <Text>{rowData.address}</Text>
                        <Text>服务时间{rowData.serviceTime}</Text>
                    </View>
                </View>
            </TouchableHighlight >
        )
    }

    _onPressRow(){
        console.log('这是我需要支付的页面，我厉害');
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
        height:130,
        borderTopWidth:1,
        flexDirection:'row',
        padding:20,
    },
    list_icon:{
        width:100,
    }
});

const MyServiceDoctor=TabNavigator({
    Confirmed:{screen:Confirmed,
        navigationOptions: {  // 也可以写在组件的static navigationOptions内
            tabBarLabel:  '已确认',
        }},
    WaitForConfirme:{screen:WaitForConfirme,
        navigationOptions: {  // 也可以写在组件的static navigationOptions内
            tabBarLabel:  '待确认',
        }},
    WaitForReferral:{screen:WaitForReferral,
        navigationOptions: {  // 也可以写在组件的static navigationOptions内
            tabBarLabel:  '待复诊',
        }},
    WaitForPay:{screen:WaitForPay,
        navigationOptions: {  // 也可以写在组件的static navigationOptions内
            tabBarLabel:  '待支付',
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

export default MyServiceDoctor;


