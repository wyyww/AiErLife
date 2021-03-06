

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
    AsyncStorage,
    TouchableHighlight,
    TouchableOpacity,
    Platform,
    RefreshControl
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import { StackNavigator } from 'react-navigation';

// 获取屏幕宽度
var Dimensions = require('Dimensions');
const {width,height} = Dimensions.get('window');

//网络请求组件
import NetUitl from './plugins/NetUitl';
import API from './plugins/API';


export default class AiErClinic extends Component {

    static navigationOptions = {
        headerTitle:'诊室',
        headerTintColor:'#000',
        headerTitleStyle:{
            fontSize:17,
        },
        headerStyle:{
            width:width,
            height: (Platform.OS === 'ios') ? 80 : 40,
            backgroundColor:'#fff',
        }
    };

    componentDidMount(){
        AsyncStorage.getItem('myToken',(err,result)=>{
            // console.log(result);
            this.setState({myToken:result},()=>{
               this._onRefresh();
            })

        })
    }
    _onRefresh(){
        this.setState({
            isRefreshing:true,
        })
        let that =this;
        let params={
            token:this.state.myToken,
        }
        NetUitl.get(API.APIList.all_hospital,params,function(response){
            //请求得到的医院信息
            that.setState({
                dataSource:that.state.dataSource.cloneWithRows(response.result),
                isRefreshing:false,
            })
        })
    }

    constructor(props) {
        super(props);
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            myToken:'',
            dataSource: ds,
            isRefreshing:false,
        };
    }


    //跳转到某一个具提的诊室的详细介绍
    _onPressRow(data){

        const navigateAction=NavigationActions.navigate({
            routeName:'ClinicIntroduction',
            params:{hospital_id:data.id}
        })
        this.props.navigation.dispatch(navigateAction)
    }
    _renderRow(rowData){
        return (
            <TouchableHighlight onPress={this._onPressRow.bind(this,rowData)}>
                <View style={styles.list_frame}>
                    <View style={styles.list_icon_space}>
                        <Image source={{uri:rowData.pic_url}} style={{width:80,height:80}}/>
                    </View>
                    <View style={{paddingLeft:3}}>
                        <View style={{flexDirection:'row',}}>
                            <Text style={{fontSize:15,fontWeight:'400',paddingRight:20}}>{rowData.name}</Text>
                            <Text>{rowData.doctor_count}位三甲医生</Text>
                        </View>
                        <View  style={styles.list_btn}  >
                            <Text style={styles.text_color}>{rowData.departments[0].name}</Text>
                        </View>
                        <Text>{rowData.address}</Text>
                    </View>
                </View>
            </TouchableHighlight >
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <ListView
                    initialListSize={10}
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow.bind(this)}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.isRefreshing}
                            onRefresh={this._onRefresh.bind(this)}
                             tintColor="#ff0000"
                             title="Loading..."
                             titleColor="#00ff00"
                            colors={['#808080', '#ff0000', '#0000ff']}
                            progressBackgroundColor="#ffffff"

                        />
                    }

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
        width:width,
        height:100,
        borderBottomWidth:1,
        borderColor:'#DCDCDC',
        flexDirection:'row',
        padding:10,
    },
    list_icon_space:{
        width:100,
    }
});