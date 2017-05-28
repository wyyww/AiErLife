

//某一医生的具体介绍，，，可以跳到病情描述
import React,{ Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput
} from 'react-native';
import { NavigationActions } from 'react-navigation';

export default class DoctorSpecificIntroduction extends Component {

    static navigationOptions={
        title:'医生简介',
    };

    constructor(props){
        super(props);
    }

    //病情描述
    _onButtonClickToPatientConditionDescription(){
        const { navigate } =this.props.navigation;
        navigate('PatientConditionDescription');
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>医生简介</Text>
                <Button title=" 跳转到病情描述" onPress={this._onButtonClickToPatientConditionDescription.bind(this)}></Button>
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