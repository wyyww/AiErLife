

//诊室的大体介绍，包括图，，可以跳转到诊室里具有的科室和诊所地址
import React,{ Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput
} from 'react-native';

export default class ClinicIntroduction extends Component {

    static navigationOptions={
        title:'诊室',
    };

    constructor(props){
        super(props);
     
    }

    //跳转到诊室详情
    _onButtonClickToClinicDetails(){
        const { navigate } =this.props.navigation;
        navigate('ClinicDetails');
    }

    //跳转到诊室地址
    _onButtonClickToClinicAddress(){
        const { navigate } =this.props.navigation;
        navigate('ClinicAddress');
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>诊室</Text>
                <Button title=" 跳转到诊室详情" onPress={this._onButtonClickToClinicDetails.bind(this)}></Button>
                <Button title=" 跳转到诊室地址" onPress={this._onButtonClickToClinicAddress.bind(this)}></Button>
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