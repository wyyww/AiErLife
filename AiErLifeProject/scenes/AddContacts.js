

//添加联系人界面
import React,{ Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput
} from 'react-native';
import { NavigationActions } from 'react-navigation';

export default class AddContacts extends Component {

    static navigationOptions={
        title:'添加联系人',
    };

    constructor(props){
        super(props);
    }


  //返回到登录界面
    _onButtonClickBackToLoginIn(){
           const backAction = NavigationActions.back();
        const navigation = this.props.navigation;
        navigation.dispatch(backAction);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>添加联系人</Text>
                 <Button title="返回到登录界面" onPress={this._onButtonClickBackToLoginIn.bind(this)}/>
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