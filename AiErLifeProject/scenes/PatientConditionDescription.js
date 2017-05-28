

//，病人病情描述界面         里面预约医生，，，上传照片  可以跳转到支付界面
import React,{ Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput
} from 'react-native';

export default class PatientConditionDescription extends Component {

    static navigationOptions={
        title:'病情描述',
    };

    constructor(props){
        super(props);
     
    }

    //跳转到用户支付界面
    _onButtonClickToUserPayment(){
        const { navigate } =this.props.navigation;
        navigate('UserPayment');
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>病情描述</Text>
                <Button title=" 跳转到用户支付界面" onPress={this._onButtonClickToUserPayment.bind(this)}></Button>
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