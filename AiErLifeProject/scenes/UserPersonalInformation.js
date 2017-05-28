

///用户个人中心页面，，可以跳转到个人信息，重置密码，我的预约，家庭联系人
import React,{ Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput
} from 'react-native';
import { NavigationActions } from 'react-navigation';

export default class UserPersonalInformation extends Component {

    static navigationOptions={
        title:'个人中心',
    };

    constructor(props){
        super(props);
    }
    //跳转到个人信息
    _onButtonClickToUserPersonalCenter(){
        const { navigate } =this.props.navigation;
        navigate('UserPersonalCenter');
    }

    //跳转到重置密码页面
    _onButtonClickToResetPossword(){
        const {navigate} =this.props.navigation;
        navigate('ResetPassword');
    }

    //跳转到我的预约
    _onButtonClickToUserMyAppointment(){
        const { navigate } =this.props.navigation;
        navigate('UserMyAppointment');
    }

    //跳转到家庭联系人
    _onButtonClickToFamilyContactPerson(){
        const { navigate } =this.props.navigation;
        navigate('FamilyContactPerson');
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>个人中心</Text>
                <Button title=" 跳转到个人信息" onPress={this._onButtonClickToUserPersonalCenter.bind(this)}></Button>
                <Button title='跳转到重置密码页面'color='#f78832'  accessibilityLabel="See an informative alert"  onPress={this._onButtonClickToResetPossword.bind(this)}></Button>
                <Button title=" 跳转到我的预约" onPress={this._onButtonClickToUserMyAppointment.bind(this)}></Button>
                <Button title=" 跳转到家庭联系人" onPress={this._onButtonClickToFamilyContactPerson.bind(this)}></Button>
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