
//某一具体科室里面医生的大体介绍，，可以跳转到某一个医生信息介绍
import React,{ Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput
} from 'react-native';
import { NavigationActions } from 'react-navigation';

export default class DepartmentDoctorsIntroduced extends Component {

    static navigationOptions={
        title:'科室医生列表',
    };

    constructor(props){
        super(props);
    }

    //跳转到医生简介
    _onButtonClickToDoctorSpecificIntroduction(){
        const { navigate } =this.props.navigation;
        navigate('DoctorSpecificIntroduction');
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>科室医生列表</Text>
                <Button title=" 跳转到医生简介" onPress={this._onButtonClickToDoctorSpecificIntroduction.bind(this)}></Button>
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