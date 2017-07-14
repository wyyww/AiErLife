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
    AsyncStorage
} from 'react-native';
import {NavigationActions} from 'react-navigation';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'
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
            normal_user_id: '',
            token: '',
            identification_card:'',
            address:'',
            name:'',
        }
    }

    componentDidMount() {
        AsyncStorage.getItem('normal_user_id', (err, res) => {
            // console.log(res)
            this.setState({
                normal_user_id: res,
            })
        })
        AsyncStorage.getItem('myToken', (err, res) => {
            // console.log(res);
            this.setState({
                token: res,
            })
        })
    }

    onSelect(index, value) {
        this.setState({
            gender: `Selected index: ${index} , value: ${value}`
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
                    <TextInput value={this.state.identification_card}
                               onChangeText={(identification_card) => this.setState({identification_card})}
                               style={styles.textContainer}
                               underlineColorAndroid="transparent"/>
                </View>
                <View style={styles.selfMessage}>
                    <Text>性别</Text>
                    <RadioGroup style={{flexDirection: 'row'}} onSelect={(index, value) => this.onSelect(index, value)}>
                        <RadioButton value={'男'}>
                            <Text>男</Text>
                        </RadioButton>
                        <RadioButton value={'女'}>
                            <Text>女</Text>
                        </RadioButton>
                    </RadioGroup>
                    {/*<Text style={styles.text}>{this.state.text}</Text>*/}
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
                    <Text style={styles.logoutButtonFontSize}>保存</Text>
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
    selfMessage: {
        // flexGrow:1,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        height: 50,
        margin: 5,
        width: width - 20,
    },
    textContainer: {
        width: width,
        padding: 0,
        marginLeft: 20,
        alignSelf: 'center'
    },
    warmPrompt: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        borderWidth: 1,
        borderRadius: 4,
        margin: 5,
        height: 50,
    },
    lugoutButton: {
        backgroundColor: '#40e0d0',
        borderWidth: 0,
        margin: 5,
        paddingTop: 8,
        paddingBottom: 8,
        borderRadius: 4,
        alignItems: 'center',
        marginTop: 20,
        width: width - 20,

    },
    logoutButtonFontSize: {
        fontSize: 18,
        color: '#000'
    }

});