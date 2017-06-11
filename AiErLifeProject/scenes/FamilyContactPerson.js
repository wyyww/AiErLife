

//用户家庭联系人，，可以跳转到添加联系人，修改联系人
import React,{ Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
    ListView,
    Image,
    TouchableHighlight
} from 'react-native';
import { NavigationActions } from 'react-navigation';

let thes;
export default class FamilyContactPerson extends Component {

    static navigationOptions={
        headerTitle:'家庭联系人',
        headerBackTitle:'个人中心',
        headerRight:<Button title="添加" onPress={()=>{
            //添加新的家庭联系人
            const { navigate } =thes.props.navigation;
            navigate('AddContacts');}} />
    };

    constructor(props) {
        super(props);
        thes=this;
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([{
                contactName:'媳妇',
                contactTelephone:"15529625328",
                contactAddress:"北京",
            },{
                contactName:'老爸',
                contactTelephone:"18156749532",
                contactAddress:"杭州",
            },{
                contactName:'老张',
                contactTelephone:"15529635228",
                contactAddress:"北京",
            },{
                contactName:'同学',
                contactTelephone:"18869625328",
                contactAddress:"南京",
            },{
                contactName:'王宇',
                contactTelephone:"15537565328",
                contactAddress:"上海",
            },{
                contactName:'兄弟',
                contactTelephone:"15529625690",
                contactAddress:"合肥",
            },]),
        };
    }

    _renderRow(rowData){
        return (
            <TouchableHighlight onPress={this._onPressRow.bind(this)}>
                <View style={styles.list_frame}>
                   <Text style={{fontSize:17}}>{rowData.contactName}</Text>
                    <View style={styles.list_content}>
                        <Image source={require('../images/icon_phone.png')} style={styles.list_icon}></Image>
                        <Text>{rowData.contactTelephone}</Text>
                    </View>
                    <View  style={styles.list_content}>
                        <Image source={require('../images/icon_address.png')} style={styles.list_icon}></Image>
                        <Text >{rowData.contactAddress}</Text>
                    </View>
                </View>
            </TouchableHighlight >
        )
    }

//修改家庭联系人信息
    _onPressRow(){
        console.log('家庭联系人');
        const { navigate } =this.props.navigation;
        navigate('ModifyContacts');
    }
    render() {
        return (
        <ListView
            dataSource={this.state.dataSource}
            renderRow={this._renderRow.bind(this)}
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
    list_frame:{
        marginBottom:10,
        padding:5,
        backgroundColor:'white',
    },
    list_content:{
        marginLeft:10,
        flexDirection:'row',
    },
    list_icon:{
        width:22,
        height:22,
    }
});