

//我的个人服务
import React,{ Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput
} from 'react-native';

export default class MyServiceDoctor extends Component {

    static navigationOptions={
        title:'我的服务',
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