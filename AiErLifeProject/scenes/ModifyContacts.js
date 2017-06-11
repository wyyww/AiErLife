

//用户个人信息，
import React,{ Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
    Image,
    TouchableHighlight
} from 'react-native';
import { NavigationActions } from 'react-navigation';

let Dimensions=require('Dimensions');
var {height, width} = Dimensions.get('window');

export default class ModifyContacts extends Component {

    static navigationOptions={
        title:'修改联系人信息',
    };

    constructor(props){
        super(props);
        this.state={

        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.selfMessage}>
                    <Text>姓名</Text>
                    <TextInput style={styles.textContainer} underlineColorAndroid="transparent"/>
                </View>
                <View style={styles.selfMessage}>
                    <Text>身份证</Text>
                    <TextInput style={styles.textContainer} underlineColorAndroid="transparent"/>
                </View>
                <View style={styles.selfMessage}>
                    <Text>性别</Text>
                    <TextInput style={styles.textContainer} />
                </View>
                <View style={styles.selfMessage}>
                    <Text>联系电话</Text>
                    <TextInput style={styles.textContainer}  underlineColorAndroid="transparent"/>
                </View>
                <View style={styles.selfMessage}>
                    <Text>地址</Text>
                    <TextInput style={styles.textContainer}  underlineColorAndroid="transparent"/>
                </View>
                <View style={styles.warmPrompt}>
                    <Text>温馨提示</Text>
                    <Text>请您正确填写个人信息，以便为您带来更优质的服务</Text>
                </View>
                <TouchableHighlight underlayColor='transparent' style={styles.lugoutButton}>
                    <Text style={styles.logoutButtonFontSize}>保存</Text>
                </TouchableHighlight>
                <TouchableHighlight underlayColor='transparent' style={[styles.lugoutButton,{backgroundColor:'#ff0000'}]}>
                    <Text style={styles.logoutButtonFontSize}>取消</Text>
                </TouchableHighlight>
            </View>
        );
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