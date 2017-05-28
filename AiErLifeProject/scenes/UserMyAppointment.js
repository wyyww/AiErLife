

//用户中我的预约界面
import React,{ Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput
} from 'react-native';

export default class UserMyAppointment extends Component {

    static navigationOptions={
        title:'我的预约',
    };

    constructor(props){
        super(props);
     
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>我的服务</Text>
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