

//用户家庭联系人，，可以跳转到添加联系人，修改联系人
import React,{ Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput
} from 'react-native';
import { NavigationActions } from 'react-navigation';

export default class FamilyContactPerson extends Component {

    static navigationOptions={
        title:'家庭联系人',
    };

    constructor(props){
        super(props);
    }

    //跳转到添加联系人
    _onButtonClickToAddContacts(){
        const { navigate } =this.props.navigation;
        navigate('AddContacts');
    }

    //跳转到修改家庭联系人
    _onButtonClickToModifyContacts(){
        const { navigate } =this.props.navigation;
        navigate('ModifyContacts');
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>家庭联系人</Text>
                <Button title=" 跳转到添加联系人" onPress={this._onButtonClickToAddContacts.bind(this)}></Button>
                <Button title=" 跳转到修改家庭联系人" onPress={this._onButtonClickToModifyContacts.bind(this)}></Button>
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