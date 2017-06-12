

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
    Alert,
    TouchableHighlight,
    TouchableOpacity,
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import { StackNavigator } from 'react-navigation';

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
                    clinicName:'爱尔诊所西电诊所',
                    threeDoctorsNumber:9,
                    clinicIndication:'牙科',
                    clinicAddress:'西安长安区兴隆街道266号'
                },{
                    imageSrc:'',
                    clinicName:'爱尔诊所南门诊所',
                    threeDoctorsNumber:9,
                    clinicIndication:'儿科',
                    clinicAddress:'西安永宁门130号向富楼对面'
                },]),
        };
    }


    //跳转到某一个具提的诊室的详细介绍
    _onPressRow(){
       // console.log(this.props)
        const {navigate} =this.props.navigation;
        navigate('ClinicIntroduction');
    }
    _renderRow(rowData){
        return (
            <TouchableHighlight onPress={this._onPressRow.bind(this)}>
                <View style={styles.list_frame}>
                    <View style={styles.list_icon_space}>
                        <Image source={require('../images/ben.png')} style={{width:80,height:80}}/>
                    </View>
                    <View style={{paddingLeft:3}}>
                        <View style={{flexDirection:'row',}}>
                            <Text style={{fontSize:15,fontWeight:'400',paddingRight:20}}>{rowData.clinicName}</Text>
                            <Text>{rowData.threeDoctorsNumber}位三甲医生</Text>
                        </View>
                        <View  style={styles.list_btn}  >
                            <Text style={styles.text_color}>{rowData.clinicIndication}</Text>
                        </View>
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
        width:60,
        padding:3,
        margin:5,
        backgroundColor:'#1e90ff',
    },
    text_color:{
        alignSelf:'center',
        color:'white',
    },
    list_frame:{
        width:screenW,
        height:100,
        borderBottomWidth:1,
        flexDirection:'row',
        padding:10,
    },
    list_icon_space:{
        width:100,
    }
});