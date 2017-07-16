//用户个人信息，
import React, {Component} from 'react';
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
import {NavigationActions} from 'react-navigation';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'

import NetUitl from './plugins/NetUitl';
import API from './plugins/API'


let Dimensions = require('Dimensions');
var {height, width} = Dimensions.get('window');

export default class ModifyContacts extends Component {

    static navigationOptions = {
        title: '修改联系人信息',
    };

    constructor(props) {
        super(props);
        this.state = {
            token: '',
            address: '',
            gender: '',
            identity_card: '',
            name: '',
            id: '',
            phone: ''
        }
    }

    componentWillMount() {
        AsyncStorage.getItem('myToken', (err, res) => {
            this.setState({
                token: res,
            }, () => {
            })
        })
        const prevParams = this.props.navigation.state;
        this.setState({
            address: prevParams.params.address,
            gender: prevParams.params.gender,
            identity_card: prevParams.params.identity_card,
            name: prevParams.params.name,
            phone: prevParams.params.phone,
            id: prevParams.params.id,
        }, () => {
        })


    }

    onSelect(index, value) {
        this.setState({
            gender: value + 1
        }, () => {
        })
    }

    render() {
        return (
            <View >
                <View style={styles.selfMessage}>
                    <Text>姓名</Text>
                    <TextInput value={this.state.name}
                               onChangeText={(name) => this.setState({name})}
                               style={styles.textContainer}
                               underlineColorAndroid="transparent"/>
                </View>
                <View style={styles.selfMessage}>
                    <Text>身份证</Text>
                    <TextInput value={this.state.identity_card}
                               onChangeText={(identity_card) => this.setState({identity_card})}
                               style={styles.textContainer}
                               underlineColorAndroid="transparent"/>
                </View>
                <View style={styles.selfMessage}>
                    <Text>性别</Text>
                    <RadioGroup style={{flexDirection: 'row'}} onSelect={(index, value) => this.onSelect(index, value)}
                                selectedIndex={this.state.gender - 1}>
                        <RadioButton value={0}>
                            <Text>男</Text>
                        </RadioButton>
                        <RadioButton value={1}>
                            <Text>女</Text>
                        </RadioButton>
                    </RadioGroup>
                </View>
                <View style={styles.selfMessage}>
                    <Text>联系电话</Text>
                    <TextInput value={this.state.phone}
                               onChangeText={(phone) => this.setState({phone})}
                               style={styles.textContainer}
                               underlineColorAndroid="transparent"/>
                </View>
                <View style={styles.selfMessage}>
                    <Text>地址</Text>
                    <TextInput value={this.state.address}
                               onChangeText={(address) => this.setState({address})}
                               style={styles.textContainer}
                               underlineColorAndroid="transparent"/>
                </View>
                <View style={styles.warmPrompt}>
                    <Text>温馨提示</Text>
                    <Text>请您正确填写个人信息，以便为您带来更优质的服务</Text>
                </View>
                <TouchableHighlight underlayColor='transparent' style={styles.lugoutButton}
                                    onPress={this._buttonClickModifyContactMessages.bind(this)}>
                    <Text style={styles.logoutButtonFontSize}>保存</Text>
                </TouchableHighlight>
                <TouchableHighlight underlayColor='transparent'
                                    style={[styles.lugoutButton, {backgroundColor: '#ff0000'}]}>
                    <Text style={styles.logoutButtonFontSize}>取消</Text>
                </TouchableHighlight>
            </View>
        );
    }

    //修改用户信息
    _buttonClickModifyContactMessages() {
        let that = this;
        // console.log(this.state.token)
        let params = {
            token: this.state.token,
            address: this.state.address,
            gender: this.state.gender,
            identity_card: this.state.identity_card,
            name: this.state.name,
            id: this.state.id,
            phone: this.state.phone
        }

        NetUitl.post(API.APIList.user_patient_update, params, function (res) {
            if (res.success == true) {
                Alert.alert('修改成功')
            }
            else {
                Alert.alert('网络错误，请重试')
            }
        })
    }


}


const styles = StyleSheet.create({
    selfMessage: {
        flexDirection: 'row',
        alignItems: 'center',
        // borderBottomWidth: 1,
        // borderColor:'#DCDCDC',
        height: 50,
        margin: 5,
    },
    textContainer: {
        width: width / 2,
        padding: 0,
        marginLeft: 50,
        alignSelf: 'center'
    },
    warmPrompt: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        borderWidth: 1,
        borderColor:'#DCDCDC',
        borderRadius: 4,
        margin: 5,
        height: 50,
    },
    lugoutButton: {
        backgroundColor: '#40e0d0',
        margin: 5,
        paddingTop: 8,
        paddingBottom: 8,
        borderRadius: 4,
        alignItems: 'center',
        width: width - 20,

    },
    logoutButtonFontSize: {
        fontSize: 18,
        color: '#fff'
    }

});