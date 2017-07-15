

//诊室在地图上的详情
/**
 * Created by PC on 2017/6/15.
 */
import React, {
    Component,
} from 'react';

import {
    MapView,
    MapTypes,
    Geolocation
} from 'react-native-baidu-map';

import {
    Button,
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableHighlight
} from 'react-native';

import Dimensions from 'Dimensions';

export default class ClinicAddress extends Component {

    static navigationOptions={
        headerTitle:'诊所地址',
        headerTintColor:'#763922'
    }

    componentWillMount(){

    }

    constructor(props) {
        super(props);
        const prevDeliverParams=this.props.navigation.state;
        console.log(prevDeliverParams.params)
        this.state = {
            mayType: MapTypes.NORMAL,
            zoom: 18,
            center: {
                longitude: prevDeliverParams.params.longitude,
                latitude: prevDeliverParams.params.latitude,
            },
            trafficEnabled: false,
            baiduHeatMapEnabled: false,
            markers: [{
                longitude: prevDeliverParams.params.longitude,
                latitude: prevDeliverParams.params.latitude,
                title: "医院地址"
            },{
                longitude: prevDeliverParams.params.longitude,
                latitude: prevDeliverParams.params.latitude,
                title: prevDeliverParams.params.address,
            }]
        };
    }

    componentDidMount() {

    }

    render() {
        return (
            <View style={styles.container}>
                <MapView
                    trafficEnabled={this.state.trafficEnabled}
                    baiduHeatMapEnabled={this.state.baiduHeatMapEnabled}
                    zoom={this.state.zoom}
                    mapType={this.state.mapType}
                    center={this.state.center}
                    marker={this.state.marker}
                    markers={this.state.markers}
                    style={styles.map}
                    onMarkerClick={(e) => {
                        console.warn(JSON.stringify(e));
                    }}
                    onMapClick={(e) => {
                    }}
                >
                </MapView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        height: 40
    },
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        marginBottom: 16
    }
});