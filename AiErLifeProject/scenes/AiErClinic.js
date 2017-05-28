

//爱尔诊所界面  可以跳转到诊室
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput
} from 'react-native';
import { NavigationActions } from 'react-navigation';

export default class AiErClinic extends Component {

    static navigationOptions = {
        title: '爱尔诊所',
    };

    constructor(props) {
        super(props);
    }


    //跳转到某一个具提的诊室
    _onButtonClickToClinicIntroduction() {
         const {navigate} =this.props.navigation;
        navigate('ClinicIntroduction');
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>爱尔诊所</Text>
                <Button title="跳转到具提一个诊室" onPress={this._onButtonClickToClinicIntroduction.bind(this)} />
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