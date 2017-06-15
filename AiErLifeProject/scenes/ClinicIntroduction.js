

//诊室的大体介绍，包括图，，可以跳转到诊室里具有的科室和诊所地址
import React,{ Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
    ScrollView,
    Alert,
    Image,
    ListView,
    TouchableHighlight,
    TouchableOpacity
} from 'react-native';
// 获取屏幕宽度
var Dimensions = require('Dimensions');
const {width,height} = Dimensions.get('window');
export default class ClinicIntroduction extends Component {

    static navigationOptions={
        headerTitle:'诊室',
    };

    constructor(props){
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([{
                clinicSectionName:'修复科（镶牙）',
                clinicSectionThreeTopDoctor:'1',
                clinicSectionDescription:'由美国矫正技术医生，结合笑线设计等美学理念，定制专属隐形矫正预案，重塑颌面美观'
            },{
                clinicSectionName:'正奇科（矫正）',
                clinicSectionThreeTopDoctor:'3',
                clinicSectionDescription:'镶一颗大狗牙，好好出去咬人去吧',
            },
                {
                    clinicSectionName:'种植科',
                    clinicSectionThreeTopDoctor:'1',
                    clinicSectionDescription:'单个，多个以及全部牙齿缺失的种植修复',
                }]),
            clinicName:'爱尔诊所后宰门诊室',
            clinicAddress:'后宰门130号创之星大厦一单元122(中户)',
            clinicPhone:'8976567',
        };
    }

    //跳转到诊室详情   ,这个页面好像多余的，不跳过去了
    _onButtonClickToClinicDetails(){
        const { navigate } =this.props.navigation;
        navigate('ClinicDetails');
    }

    _renderRow(rowData){
        return (
            <TouchableHighlight onPress={this._onPressRow.bind(this)}>
                <View style={styles.list_frame}>
                        <View style={{flexDirection:'row',}}>
                            <Text style={[styles.text_container,{fontSize:15,fontWeight:'400',paddingRight:20}]}>{rowData.clinicSectionName}</Text>
                            <Text>{rowData.clinicSectionThreeTopDoctor}位三甲医生</Text>
                        </View>
                        <View  style={styles.list_btn}  >
                            <Text style={styles.text_color}>{rowData.clinicSectionDescription}</Text>
                            <Image source={require('../images/icon_common_rightarrow.png')}  style={styles.icon_small_title}/>
                        </View>
                </View>
            </TouchableHighlight >
        )
    }
    _onPressRow(){
        const { navigate } =this.props.navigation;
        navigate('ClinicDetails');
    }
    render() {
        return (
            <ScrollView contentContainerStyle={styles.contentContainer}>
                <View style={styles.module_frame}>
                    <Image source={require('../images/clinic.jpg')} style={styles.icon_container}/>
                    <Text style={styles.text_container}>{this.state.clinicName}</Text>
                    <View style={[styles.text_row,{justifyContent:'flex-start'}]}>
                        <Text>三甲名医出诊</Text>
                        <Text>勿过无度医疗</Text>
                    </View>
                    <TouchableHighlight  onPress={()=>this.props.navigation.navigate('ClinicAddress')}>
                        <View style={styles.text_row}>
                            <View style={{flexDirection:'row'}}>
                                <Image  source={require('../images/icon_address.png')} style={styles.icon_small_title}/>
                                <Text  >{this.state.clinicAddress}</Text>
                            </View>
                            <Image  source={require('../images/icon_common_rightarrow.png')} style={styles.icon_small_title} />
                        </View>
                    </TouchableHighlight>
                    <View style={styles.text_row}>
                        <View style={{flexDirection:'row'}}>
                            <Image  source={require('../images/icon_phone.png')} style={styles.icon_small_title}/>
                            <Text>{this.state.clinicPhone}</Text>
                        </View>
                        <Image  source={require('../images/icon_common_rightarrow.png')} style={styles.icon_small_title} />
                    </View>
                </View>
                <View style={[styles.text_row,styles.module_padding_view,{justifyContent:'flex-start'}]}>
                    <Text>科室</Text>
                    <Text style={{color:'#00ffff'}}>(点击科室选择医生进行门诊预约)</Text>
                </View>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow.bind(this)}
                />
                <View style={[styles.module_padding_view]}>
                    <Text>诊所介绍</Text>
                    <Text>艾尔诊所是爱而生活集团旗下，高品质专业口腔诊所，诊所坐镇专家团队均有当地三家医生主任即副主任医师组成，艾尔诊所可为诊所提供和线上线下专业诊疗方案</Text>
                </View>

            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    contentContainer: {
        // paddingVertical: 20,
        backgroundColor: '#F5FCFF',
        width:width,
        height:height,
    },
    module_frame:{
        marginLeft:10,
        marginBottom:10,
        backgroundColor:'white',
    },
    icon_container:{
        width:width,
        height:150,
        paddingBottom:10,
        // resizeMode:'cover'
    },
    text_container:{
        marginTop:5,
        marginBottom:5,
        fontSize:15,
        fontWeight:'600',
    },
    text_row:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        height:30,
    },
    icon_small_title:{
        width:20,
        height:20,
    },
    list_btn:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    text_color:{
        width:width-50,
    },
    list_frame:{
        width:width,
        borderBottomWidth:1,
        padding:10,
    },
    module_padding_view:{
        padding:5,
        borderTopWidth:1,
        borderBottomWidth:1,
        marginTop:15,
    }
});