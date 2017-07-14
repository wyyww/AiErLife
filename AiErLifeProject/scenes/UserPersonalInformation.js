

///用户个人中心页面，，可以跳转到个人信息，重置密码，我的预约，家庭联系人
import React,{ Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Button,
    TextInput,
    Alert,
    TouchableHighlight,
    AsyncStorage,
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import { StackNavigator } from 'react-navigation';

import NetUitl from './plugins/NetUitl';
import API from './plugins/API'
import ItemCell from './plugins/ItemCell';

export default class UserPersonalInformation extends Component {

    static navigationOptions={
        title:'个人中心',
    };
    constructor(props){
        super(props);
        this.state={
            token:'',
            normal_user_id:'',
            name:'',
            username:'',
        }
    }

    componentDidMount(){
        AsyncStorage.getItem('normal_user_id',(err,result)=>{
            this.setState({
                normal_user_id:result,
            })
            console.log(result)
        })
        AsyncStorage.getItem('myToken',(err,result)=>{
            let that=this;
            this.setState({
                token:result,
            },()=>{
                let params={
                    token:this.state.token,
                    normal_user_id:this.state.normal_user_id,
                }
                NetUitl.get(API.APIList.normal_user_info,params,function(response){
                    let res=response.result;
                    // console.log(res);
                    that.setState({
                        name:res.name,
                        username:res.username,
                    })

                })

            })
        })
    }

    //修改跳转到个人信息
    _onButtonClickToUserPersonalCenter(){
        const { navigate } =this.props.navigation;
        navigate('ModifyUserPersonalCenter');
    }

    //跳转到重置密码页面
    _onButtonClickToResetPossword(){
        const { navigate } = this.props.navigation;
        navigate('ResetPassword');
    }

    //跳转到我的预约
    _onButtonClickToUserMyAppointment(){
        const { navigate } =this.props.navigation;
        navigate('UserMyAppointment');
    }

    //跳转到家庭联系人
    _onButtonClickToFamilyContactPerson(){
        const { navigate } =this.props.navigation;
        navigate('FamilyContactPerson');
    }
    render() {
        return (
            <View >
                    <TouchableHighlight underlayColor='transparent' >
                        <View style={styles.tweetContainer}>
                            <Image source={require('../images/head.jpg')} style={styles.avatar}/>
                            <View style={styles.rightContainer}>
                                <View style={styles.userContainer}>
                                    <Text style={styles.name}>Name:{this.state.name}</Text>
                                </View>
                                <Text style={[styles.time,styles.tel]}>手机号:{this.state.username}</Text>
                            </View>
                        </View>
                    </TouchableHighlight>
                <ItemCell
                    onPress={this._onButtonClickToUserPersonalCenter.bind(this)}
                    showDisclosureIndicator={false}
                    showBottomBorder={false}
                    iconStyle={itemCellColor.feedbackIcon}
                    containerStyle={itemCellColor.container}
                    icon={require('../images/icon_edit.png')}>
                    编辑个人信息
                </ItemCell>
                <ItemCell
                    onPress={this._onButtonClickToResetPossword.bind(this)}
                    showDisclosureIndicator={false}
                    showBottomBorder={false}
                    iconStyle={itemCellColor.feedbackIcon}
                    containerStyle={itemCellColor.container}
                    icon={require('../images/icon_password_red.png')}>
                    修改密码
                </ItemCell>
                <ItemCell
                    onPress={this._onButtonClickToUserMyAppointment.bind(this)}
                    showDisclosureIndicator={false}
                    showBottomBorder={true}
                    iconStyle={itemCellColor.feedbackIcon}
                    containerStyle={itemCellColor.container}
                    icon={require('../images/icon_appointment.png')}>
                    我的预约
                </ItemCell>
                <ItemCell
                    onPress={this._onButtonClickToFamilyContactPerson.bind(this)}
                    showDisclosureIndicator={false}
                    showBottomBorder={true}
                    iconStyle={itemCellColor.feedbackIcon}
                    containerStyle={itemCellColor.container}
                    icon={require('../images/icon_people.png')}>
                    家庭联系人
                </ItemCell>
                <ItemCell
                    onPress={this._gotoView.bind(this,'feedback')}
                    showDisclosureIndicator={false}
                    showBottomBorder={false}
                    iconStyle={itemCellColor.feedbackIcon}
                    containerStyle={itemCellColor.container}
                    icon={require('../images/icon_message.png')}>
                    意见反馈
                </ItemCell>
                <ItemCell
                    onPress={this._gotoView.bind(this,'feedback')}
                    showDisclosureIndicator={false}
                    showBottomBorder={false}
                    iconStyle={itemCellColor.feedbackIcon}
                    containerStyle={itemCellColor.container}
                    icon={require('../images/icon_info.png')}>
                    关于
                </ItemCell>

                <TouchableHighlight underlayColor='transparent' style={styles.lugoutButton}>
                    <Text style={styles.logoutButtonFontSize}>退出登录</Text>
                </TouchableHighlight>
            </View>
        );
    }

    _gotoView(){
        console.log('暂时没提供有什么用处');
    }
}

const itemCellColor={
    container:{
      backgroundColor:'white',
        margin:10,
        marginBottom:0,
        borderRadius:2,
        // shadowColor:'#000',
        // shadowOpacity:'0.1',
        // shadowRadius:0,
        // shadowOffset:{
        //   height:2,
        //     width:1,
        // }
    },
    feedbackIcon:{
        backgroundColor:'white'
    },
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#F5FCFF',
    },
    tweetContainer:{
        flexGrow:1,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'white',
        paddingTop:4,
        paddingBottom:10,
    },
    avatar:{
        backgroundColor:'gray',
        width:50,
        height:50,
        marginLeft:10,
        borderRadius:4,
    },
    userContainer:{
        flexDirection:'row'
    },
    time:{
        marginLeft:4,
        fontSize:13,
        color:'#8999a5',
        marginTop:2,
    },
    name:{
        fontWeight:'600',
        fontSize:15
    },
    rightContainer:{
        flexGrow:1,
        padding:10,
    },
    tel:{
        marginLeft:0,
    },
    lugoutButton:{
        backgroundColor:'white',
        borderWidth:0,
        margin:10,
        paddingTop:8,
        paddingBottom:8,
        borderRadius:4,
        alignItems:'center',
    },
    logoutButtonFontSize:{
        fontSize:18,
        color:'#000'
    }
});