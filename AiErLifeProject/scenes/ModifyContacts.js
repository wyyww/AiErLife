

//修改联系人界面
import React,{ Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput
} from 'react-native';
import { NavigationActions } from 'react-navigation';

export default class ModifyContacts extends Component {

    static navigationOptions={
        title:'修改家庭联系人',
    };

    constructor(props){
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>修改家庭联系人</Text>
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