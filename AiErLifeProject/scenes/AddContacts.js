

//用户个人信息，
import React,{ Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
    Image,
    TouchableHighlight,
    AsyncStorage,
    Alert
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button';

import NetUitl from './plugins/NetUitl';
import API from './plugins/API'

let Dimensions=require('Dimensions');
var {height, width} = Dimensions.get('window');

export default class AddContacts extends Component {

    static navigationOptions={
        title:'添加联系人',
    };

    constructor(props){
        super(props);
        this.state={
            gender: '',
            normal_user_id:'',
            token: '',
            identity_card:'',
            address:'',
            name:'',
            phone:'',
        }
    }
    componentDidMount(){
        AsyncStorage.getItem('normal_user_id',(err,res)=>{
            this.setState({
                normal_user_id:res,
            })
        })
        AsyncStorage.getItem('myToken',(err,res)=>{
            this.setState({
                token:res,
            })
        },()=>{
            // console.log(this.state);
        })
    }

    onSelect(index, value){
        this.setState({
            gender: value+1,
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.selfMessage}>
                    <Text>姓名</Text>
                    <TextInput value={this.state.name} onChangeText={(name)=>this.setState({name})} style={styles.textContainer} underlineColorAndroid="transparent"/>
                </View>
                <View style={styles.selfMessage}>
                    <Text>身份证</Text>
                    <TextInput value={this.state.identity_card} onChangeText={(identity_card)=>this.setState({identity_card})}  style={styles.textContainer} underlineColorAndroid="transparent"/>
                </View>
                <View style={styles.selfMessage}>
                    <Text>性别</Text>
                    <RadioGroup style={{flexDirection:'row'}} onSelect = {(index, value) => this.onSelect(index, value)} selectedIndex={this.state.gender-1}>
                        <RadioButton value={0} >
                            <Text>男</Text>
                        </RadioButton>
                        <RadioButton value={1}>
                            <Text>女</Text>
                        </RadioButton>
                    </RadioGroup>

                </View>
                <View style={styles.selfMessage}>
                    <Text>联系电话</Text>
                    <TextInput value={this.state.phone} onChangeText={(phone)=>this.setState({phone})}   style={styles.textContainer}  underlineColorAndroid="transparent"/>
                </View>
                <View style={styles.selfMessage}>
                    <Text>地址</Text>
                    <TextInput value={this.state.address} onChangeText={(address)=>this.setState({address})} style={styles.textContainer}   underlineColorAndroid="transparent"/>
                </View>
                <View style={styles.warmPrompt}>
                    <Text>温馨提示</Text>
                    <Text>请您正确填写个人信息，以便为您带来更优质的服务</Text>
                </View>
                <TouchableHighlight underlayColor='transparent' style={styles.lugoutButton} onPress={this._buttonClickToAddNewContact.bind(this)}>
                    <Text style={styles.logoutButtonFontSize}>保存</Text>
                </TouchableHighlight>
            </View>
        );
    }
    _buttonClickToAddNewContact(){
        let params={
            gender: this.state.gender,
            normal_user_id:this.state.normal_user_id,
            token: this.state.token,
            identity_card:this.state.identity_card,
            address:this.state.address,
            name:this.state.name,
            phone:this.state.phone,
        }
        console.log(params);
        NetUitl.post(API.APIList.user_patient_add,params,function(response){
            console.log(response);
            if(response.success===true){
                Alert.alert('保存成功,请返回');
            }
            else{
                Alert.alert('网络错误，请重试');
            }
        })
    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    selfMessage:{
        // flexGrow:1,
        flexDirection:'row',
        alignItems:'center',
        borderBottomWidth:1,
        height:50,
        margin:5,
        width:width-20,
        // padding:5,
    },
    textContainer:{
        width:width/2,
        padding:0,
        marginLeft:50,
        alignSelf:'center'
    },
    warmPrompt:{
        justifyContent:'flex-start',
        alignItems:'flex-start',
        borderWidth:1,
        borderRadius:4,
        margin:5,
        height:50,
    },
    lugoutButton:{
        backgroundColor:'#40e0d0',
        borderWidth:0,
        margin:5,
        paddingTop:8,
        paddingBottom:8,
        borderRadius:4,
        alignItems:'center',
        width:width-20,

    },
    logoutButtonFontSize:{
        fontSize:18,
        color:'#fff'
    }

});