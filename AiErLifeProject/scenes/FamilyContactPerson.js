//用户家庭联系人，，可以跳转到添加联系人，修改联系人
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
    ListView,
    Image,
    TouchableHighlight,
    AsyncStorage,
    RefreshControl
} from 'react-native';
import {NavigationActions} from 'react-navigation';

import NetUitl from './plugins/NetUitl';
import API from './plugins/API'

let thes;
export default class FamilyContactPerson extends Component {

    static navigationOptions = {
        headerTitle: '家庭联系人',
        headerTitleStyle: {
            fontSize: 16,
        },
        //添加新的家庭联系人
        headerRight: (
            <View>
                <Text style={{
                    color: '#000',
                    // backgroundColor: '#fff',
                    fontSize:16,
                    padding:10,
                }} onPress={() => {
                    const {navigate} = thes.props.navigation;
                    navigate('AddContacts');
                }}>添加</Text>
            </View>)
    };

    constructor(props) {
        super(props);
        thes = this;
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            normal_user_id: '',
            token: '',
            dataSource: ds,
            isRefreshing:false,
        };
    }

    componentDidMount() {
        AsyncStorage.getItem('normal_user_id', (err, res) => {
            // console.log(res);
            this.setState({
                normal_user_id: res,
            })
        })
        AsyncStorage.getItem('myToken', (err, res) => {
            this.setState({
                token: res,
            }, () => {
                this._onRefresh()
            })
        })

    }

    _onRefresh() {
        this.setState({
            isRefreshing:true,
        })
        let that = this;
        let params = {
            normal_user_id: this.state.normal_user_id,
            token: this.state.token,
        }
        NetUitl.get(API.APIList.user_patient_list, params, function (response) {
            let res = response.result;
            that.setState({
                dataSource: that.state.dataSource.cloneWithRows(res),
                isRefreshing:false,
            })

        })
    }

    _renderRow(rowData) {
        return (
            <TouchableHighlight onPress={this._onPressRow.bind(this, rowData)}>
                <View style={styles.list_frame}>
                    <Text style={{fontSize: 16}}>{rowData.name}</Text>
                    <View style={styles.list_content}>
                        <Image source={require('../images/icon_phone.png')} style={styles.list_icon}></Image>
                        <Text>{rowData.phone}</Text>
                    </View>
                    <View style={styles.list_content}>
                        <Image source={require('../images/icon_address.png')} style={styles.list_icon}></Image>
                        <Text >{rowData.address}</Text>
                    </View>
                </View>
            </TouchableHighlight >
        )
    }

    //修改家庭联系人信息
    _onPressRow(rowData) {
        const navigationAction = NavigationActions.navigate({
            routeName: 'ModifyContacts',
            params: rowData,
            // action:NavigationActions.navigate({routeName:''})这个官网说给子元素使用的，很蒙蔽啊
        })
        this.props.navigation.dispatch(navigationAction)
    }

    render() {
        return (
            <ListView
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
    list_frame: {
        marginBottom: 10,
        padding: 10,
        backgroundColor: '#fff',
    },
    list_content: {
        padding: 5,
        flexDirection: 'row',
    },
    list_icon: {
        width: 18,
        height: 18,
    }
});