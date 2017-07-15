

//某一医生的具体介绍，，可以在这里进行病情预约申请，可以跳到病情描述
import React,{ Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
    Image,
    ScrollView,
    TouchableHighlight,
    AsyncStorage
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import { TabNavigator } from "react-navigation";


import NetUitl from './plugins/NetUitl'
import API from './plugins/API'


// 获取屏幕宽度
var Dimensions = require('Dimensions');
const {width,height} = Dimensions.get('window');

export default class DoctorSpecificIntroduction extends Component {

    static navigationOptions={
        title:'医生简介',
    };

    constructor(props){
        super(props);
        this.state={
            doctor_id:'',
                token:'',
            doctor_info:{},

        }
    }

    componentDidMount(){
        const prevParams=this.props.navigation.state;
        console.log(prevParams)
        this.setState({
            doctor_id:prevParams.params.doctor_id
        })

        AsyncStorage.getItem('myToken',(err,res)=>{
            this.setState({
                token:res,
            },()=>{
                let that=this;
                let params={
                    doctor_id:this.state.doctor_id,
                    token:this.state.token,
                }
                NetUitl.get(API.APIList.doctor_show,params,function(response){
                    let res=response.result;
                    console.log(res)
                    that.setState({
                        doctor_info:res,
                    })

                })

            })
        })
    }
    //病情描述
    _onButtonClickToPatientConditionDescription(){
        const { navigate } =this.props.navigation;
        navigate('PatientConditionDescription');
    }

    render() {
        return (
             <View>
                    <View style={styles.list_frame}>
                        <View style={styles.list_icon}>
                            <Image source={{uri:this.state.doctor_info.head_url}} style={{width:80,height:80}}/>
                        </View>
                        <View style={{paddingLeft:3}}>
                            <Text style={{fontSize:17,fontWeight:'400',paddingRight:20}} onPress={this._onButtonClickToPatientConditionDescription.bind(this)}>{this.state.doctor_info.name}</Text>
                            <Text>{this.state.doctor_info.hospital_name}</Text>
                            <Text>{this.state.doctor_info.hospital_department_name}&nbsp;{this.state.doctor_info.job_title}</Text>
                        </View>
                    </View>
                 <ScrollView>
                    <MakeAppointment />
                </ScrollView>
             </View>
        );
    }
}

class AppointmentToDoctor extends Component{

    constructor(props){
        super(props);
        this.state={

        }
    }

    render(){
        return(
            <View>
                <Text>这是预约的</Text>
            </View>
        )
    }
}

class DoctorData extends Component{

    constructor(props){
        super(props);
        this.state={

        }
    }

    render(){
        return(
            <View>
                <Text>这是医生资料</Text>
            </View>
        )
    }
}



const MakeAppointment=TabNavigator({
    AppointmentToDoctor:{screen:AppointmentToDoctor,
        navigationOptions: {  // 也可以写在组件的static navigationOptions内
         tabBarLabel:  '预约',
    }},
    DoctorData:{screen:DoctorData,
        navigationOptions: {  // 也可以写在组件的static navigationOptions内
            tabBarLabel:  '资料',
        }},
},{
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
        }
});

const styles = StyleSheet.create({
    list_frame:{
        width:width,
        height:110,
        borderBottomWidth:1,
        flexDirection:'row',
        padding:15,
    },
    list_icon:{
        width:100,
    }
})
