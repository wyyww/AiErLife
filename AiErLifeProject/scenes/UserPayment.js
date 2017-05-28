

//用户支付界面
import React,{ Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput
} from 'react-native';
import { NavigationActions } from 'react-navigation';

export default class UserPayment extends Component {

    static navigationOptions={
        title:'用户支付界面',
    };

    constructor(props){
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>用户支付界面</Text>
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
    }
});