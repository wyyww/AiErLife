//修改用户个人信息，
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
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button';
import NetUitl from './plugins/NetUitl';
import API from './plugins/API'

let Dimensions = require('Dimensions');
var {height, width} = Dimensions.get('window');

export default class ModifyUserPersonalCenter extends Component {

    static navigationOptions = {
        title: '个人信息',
    };

    constructor(props) {
        super(props);
        this.state = {
            gender: '',
            id: '',
            token: '',
            identity_card:'',
            address:'',
            name:'',
        }
    }

    componentDidMount() {

        AsyncStorage.getItem('normal_user_id', (err, res) => {
            // console.log(res)
            this.setState({
                id: res,
            })
        })
        AsyncStorage.getItem('myToken', (err, res) => {
            let that=this;
            this.setState({token: res}, () => {
                // console.log(this);
                let params = {
                    'token': this.state.token,
                    'normal_user_id': this.state.id,
                };
                NetUitl.get(API.APIList.normal_user_info, params, function (res) {
                    //下面的就是请求来的数据
                    // console.log(res);
                    that.setState({
                        name: res.result.name,
                        identity_card: res.result.identity_card,
                        username: res.result.username,
                        gender: res.result.gender,
                        address: res.result.address,
                    });

                });
            });
        })
    }

    onSelect(index, value) {
        this.setState({
            gender: value+1
        },()=>{
            // console.log(this.state);
        })
    }

    render() {
        return (
            <View style={styles.container}>
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
                    <RadioGroup style={{flexDirection: 'row'}} onSelect={(index, value) => this.onSelect(index, value)}  selectedIndex={this.state.gender - 1}>
                        <RadioButton value={0}>
                            <Text>男</Text>
                        </RadioButton>
                        <RadioButton value={1}>
                            <Text>女</Text>
                        </RadioButton>
                    </RadioGroup>
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
                <TouchableHighlight underlayColor='transparent' style={styles.lugoutButton}>
                    <Text style={styles.logoutButtonFontSize} onPress={this.clickToModifyUserMessages.bind(this)}>保存</Text>
                </TouchableHighlight>
            </View>
        );
    }
    clickToModifyUserMessages(){
        let that=this;
        let params =this.state;
        NetUitl.post(API.APIList.update_user_info,params,function (response){
            if(response.result==true){
                Alert.alert('修改成功')
            }
            else{
                Alert.alert('网络错误，请重试')
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
    selfMessage: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor:'#DCDCDC',
        paddingLeft:20,
        width: width,
    },
    textContainer: {
        width: width,
        marginLeft: 20,
        alignSelf: 'center'
    },
    warmPrompt: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        borderWidth: 1,
        borderColor:'#DCDCDC',
        padding:5,
        marginTop:5,
    },
    lugoutButton: {
        backgroundColor: '#40e0d0',
        borderRadius: 4,
        height:40,
        alignItems: 'center',
        marginTop: 20,
        width: width-20,

    },
    logoutButtonFontSize: {
        fontSize: 18,
        color: '#000'
    }

});