

//爱尔诊所界面  可以跳转到诊室
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    ListView,
    TextInput,
    Image,
    TouchableHighlight,
    TouchableOpacity,
} from 'react-native';
import { NavigationActions } from 'react-navigation';
// 获取屏幕宽度
var Dimensions = require('Dimensions');
const screenW = Dimensions.get('window').width;

export default class AiErClinic extends Component {

    static navigationOptions = {
        title: '爱尔诊所',
    };

    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([
                {
                    imageSrc:'',
                    clinicName:'爱尔诊所后宰门诊所',
                    threeDoctorsNumber:9,
                    clinicIndication:'口腔科',
                    clinicAddress:'后宰门130号创之星大厦一单元122（中户）'
                }, {
                    imageSrc:'',
                    clinicName:'爱尔诊所后宰门诊所',
                    threeDoctorsNumber:9,
                    clinicIndication:'口腔科',
                    clinicAddress:'后宰门130号创之星大厦一单元122（中户）'
                },{
                    imageSrc:'',
                    clinicName:'爱尔诊所后宰门诊所',
                    threeDoctorsNumber:9,
                    clinicIndication:'口腔科',
                    clinicAddress:'后宰门130号创之星大厦一单元122（中户）'
                },]),
        };
    }


    //跳转到某一个具提的诊室
    _onButtonClickToClinicIntroduction() {
         const {navigate} =this.props.navigation;
        navigate('ClinicIntroduction');
    }
    _onPressRow(){
        const {navigate} =this.props.navigation;
        navigate('ClinicIntroduction');
    }
    _renderRow(rowData){
        return (
            <TouchableHighlight onPress={() => {this._onPressRow}}>
                <View style={styles.list_frame}>
                    <View style={styles.list_icon}>
                        <Image source={require('../images/ben.png')} style={{width:80,height:80}}/>
                    </View>
                    <View style={{paddingLeft:3}}>
                        <View style={{flexDirection:'row',}}>
                            <Text style={{fontSize:15,fontWeight:'400',paddingRight:20}}>{rowData.clinicName}</Text>
                            <Text>{rowData.threeDoctorsNumber}位三甲医生</Text>
                        </View>
                        <TouchableOpacity  style={[styles.list_btn,{activeOpacity:0.8}]}  >
                            <Text>{rowData.clinicIndication}</Text>
                        </TouchableOpacity>
                        <Text>{rowData.clinicAddress}</Text>
                    </View>
                </View>
            </TouchableHighlight >
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow.bind(this)}
                />
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
    },
    list_btn:{
        width:40,
        height:20,
        margin:5,
        backgroundColor:'#00ffff',
        textAlign:'center',
    },
    list_frame:{
        width:screenW,
        height:130,
        borderTopWidth:1,
        flexDirection:'row',
        padding:20,
    },
    list_icon:{
        width:100,
    }
});