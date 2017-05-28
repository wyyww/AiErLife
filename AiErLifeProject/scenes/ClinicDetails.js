

//诊室里面的科室 ，，可以跳转到具体科室的医生介绍
import React,{ Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput
} from 'react-native';
import { NavigationActions } from 'react-navigation';

export default class ClinicDetails extends Component {

    static navigationOptions={
        title:'诊室详情',
    };

    constructor(props){
        super(props);
    }

    //科室医生列表
    _onButtonClickToDepartmentDoctorsIntroduced(){
        const { navigate } =this.props.navigation;
        navigate('DepartmentDoctorsIntroduced');
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>诊室详情</Text>
                <Button title=" 跳转到科室医生列表" onPress={this._onButtonClickToDepartmentDoctorsIntroduced.bind(this)}></Button>
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