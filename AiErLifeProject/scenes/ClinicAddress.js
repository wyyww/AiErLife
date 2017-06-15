

//诊室在地图上的详情
import React,{ Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput
} from 'react-native';
import { MapView, MapTypes, MapModule, Geolocation } from 'react-native-baidu-map'
import BaiduMapDemo from './plugins/BaiduMapDemo';
export default class ClinicAddress extends Component {

    static navigationOptions={
        title:'诊所地址',
    };

    constructor(props){
        super(props);
    }

    render() {
        return (
           <BaiduMapDemo />
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