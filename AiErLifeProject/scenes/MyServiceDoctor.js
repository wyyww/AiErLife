

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
    static navigationOptions={
        title:'wodefuwu',
        header:{
            title:'我的服务'
        }
    };
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
                    <View style={{paddingLeft:3}}>
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
        console.log('这是我的服务，我厉害');
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
    render() {
        return (
            <View>
                <Text>List of all contacts</Text>
            </View>
        );
    }
}
class WaitForReferral extends React.Component {
    render() {
        return (
            <View>
                <Text>List of recent chats</Text>

            </View>
        );
    }
}

class WaitForPay extends React.Component {
    render() {
        return (
            <View>
                <Text>List of all contacts</Text>

            </View>
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
    已确认:{screen:Confirmed},
    待确认:{screen:WaitForConfirme},
    待复诊:{screen:WaitForReferral},
    待支付:{screen:WaitForPay}
})

export default MyServiceDoctor;


