import React, { Component } from "react";
import {
    View,
    StyleSheet,
    FlatList,
    Image,
    ScrollView,
    SafeAreaView,
    SafeAreaViewBase,
    Touchable,
    TouchableOpacity,
    TouchableHighlight,
} from "react-native";
import * as homeAction from '../../actions/home';
import { connect } from 'react-redux';
import { FONT_BLACK } from '../../../constant/color';
import { PieChart } from 'react-native-svg-charts';
import { Text } from 'react-native-svg'

class Statistik extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selected: false,
        }
    }

    componentDidMount() {
        this._fetchPostData();
    }
    _fetchPostData = () => {
        const { getHomeSample } = this.props;
        getHomeSample();
    }

    _renderHeader = () => {
        return (
            <View style={{ paddingVertical: 20, flexDirection: 'column' }}>

                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => { this.setState({ selected: false }) }}
                        style={this.state.selected ? styles.button2 : styles.button1}>
                        <Text style={this.state.selected ? styles.textButton2 : styles.textButton1}>Absensi</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { this.setState({ selected: !this.state.selected }) }}
                        style={this.state.selected ? styles.button1 : styles.button2}>
                        <Text style={this.state.selected ? styles.textButton1 : styles.textButton2}>Nilai</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={{
                        color: FONT_BLACK,
                        fontSize: 14,
                        fontWeight: '700',
                        marginBottom: 16
                    }}>Absensi Semester Ini</Text>
                </View>
            </View>
        )
    }

    _renderAbsensi = () => {
        const data = [
            {
                key: 1,
                amount: 86,
                nama: 'Hadir',
                svg: { fill: '#F66795' },
            },
            {
                key: 2,
                amount: 4,
                nama: 'Izin',
                svg: { fill: '#41D2CA' }
            },
            {
                key: 3,
                amount: 10,
                nama: 'Tanpa Keterangan',
                svg: { fill: '#9B5DE5' }
            },
        ]

        const Labels = ({ slices, height, width }) => {
            return slices.map((slice, index) => {
                const { labelCentroid, pieCentroid, data } = slice;
                return (
                    <Text
                        key={index}
                        x={pieCentroid[0]}
                        y={pieCentroid[1]}
                        fill={'white'}
                        textAnchor={'middle'}
                        alignmentBaseline={'middle'}
                        fontSize={12}
                        stroke={'black'}
                        strokeWidth={0.2}
                    >
                        {data.nama} {data.amount}
                    </Text>
                )
            })
        }

        return (
            <PieChart
                style={{ height: 200 }}
                valueAccessor={({ item }) => item.amount}
                data={data}
                spacing={0}
                outerRadius={'95%'}
            >
                <Labels />
            </PieChart>
        )
    }

    render() {
        const { userData, isLoading } = this.props;
        return (
            <View style={styles.container}>
                {
                    isLoading ? (
                        <Text>Loading...</Text>
                    ) : (
                            <View style={{ flex: 1 }}>
                                {this._renderHeader()}
                                {this._renderAbsensi()}
                            </View >
                        )
                }
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        userData: state.home.userData,
        isLoading: state.loading.isLoading
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getHomeSample: () => dispatch(homeAction.getHomeSample()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Statistik);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 35,
        paddingHorizontal: 20
    },

    button1: {
        height: 44,
        backgroundColor: '#FFC34E',
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center'
    },

    textButton1: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold'
    },

    textButton2: {
        color: '#FFC34E',
        fontSize: 14,
        fontWeight: 'bold',
    },

    button2: {
        borderWidth: 1,
        borderColor: '#FFC34E',
        height: 44,
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center'
    },

    image: {
        width: 50,
        height: 50,
        resizeMode: 'contain'
    },
    circleContainer: {
        position: 'absolute',
        top: -20,
        right: 25,
        zIndex: -1,
    },
    circleContainer2: {
        position: 'absolute',
        top: -20,
        left: 45,
        zIndex: -1,
    },
    circleOne: {
        width: 115,
        height: 115,
        borderRadius: 115,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        position: 'absolute',
        top: 0,
        right: 0
    },
    circleTwo: {
        width: 152,
        height: 152,
        borderRadius: 152,
        backgroundColor: 'transparent',
        borderColor: 'rgba(255, 255, 255, 0.2)',
        borderWidth: 10,
        position: 'absolute',
        top: -20,
        right: -20,
    }
});