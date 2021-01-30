import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Image,
    ScrollView,
    SafeAreaView,
    SafeAreaViewBase,
} from "react-native";
import * as homeAction from '../../actions/home';
import { connect } from 'react-redux';
import { FONT_BLACK } from '../../../constant/color';
import { Avatar } from 'react-native-paper';

class Mapel extends Component {
    componentDidMount() {
        this._fetchPostData();
    }
    _fetchPostData = () => {
        const { getHomeSample } = this.props;
        getHomeSample();
    }


    _renderCardMapel = () => {
        const todaySchedull = [
            {
                subjectName: 'Kimia',
                teacherAva: 'FM',
                teacherName: 'Floyd Miles',
                color: '#FFC34E',
                image: require('../../../assets/clip-bio-technologies.png')
            },
            {
                subjectName: 'Matematika',
                teacherAva: 'JD',
                teacherName: 'John Doe',
                color: '#41D2CA',
                image: require('../../../assets/mapelicon/matematika.png')
            },
            {
                subjectName: 'Bahasa Indonesia',
                teacherAva: 'JD',
                teacherName: 'John Doe',
                color: '#F66795',
                image: require('../../../assets/mapelicon/bindo.png')
            },
            {
                subjectName: 'Biologi',
                teacherAva: 'JD',
                teacherName: 'John Doe',
                color: '#40DB7E',
                image: require('../../../assets/mapelicon/bindo.png')
            }
        ];
        return (
            <View style={{ paddingVertical: 20, flexDirection: 'column' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={{
                        color: FONT_BLACK,
                        fontSize: 14,
                        fontWeight: '700',
                        marginBottom: 16
                    }}>Mata Pelajaran Semester Ini</Text>
                    <Text style={{
                        color: FONT_BLACK,
                        fontSize: 11,
                        fontWeight: '700',
                        marginBottom: 16,
                        textDecorationLine: 'underline'
                    }}>Lihat Semua</Text>
                </View>
                <ScrollView>
                    {
                        todaySchedull.map((item, index) => (
                            <View
                                key={index}
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-around',
                                    alignItems: 'center',
                                    width: '100%',
                                    height: 73,
                                    overflow: 'hidden',
                                    paddingVertical: 16,
                                    marginBottom: 15,
                                    borderRadius: 5,
                                    position: 'relative',
                                    backgroundColor: item.color
                                }}>
                                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                                    <Image source={item.image} />
                                    <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#404040' }}>{item.subjectName}</Text>
                                </View>
                                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                                    <Avatar.Text size={20} label={item.teacherAva} />
                                    <Text style={{ paddingRight: 40, fontSize: 10, fontWeight: 'bold', color: '#404040' }}>{item.teacherName}</Text>
                                </View>
                                <View style={styles.circleContainer}>
                                    <View style={styles.circleOne} />
                                    <View style={styles.circleTwo} />
                                </View>
                                <View style={styles.circleContainer2}>
                                    <View style={styles.circleOne} />
                                    <View style={styles.circleTwo} />
                                </View>
                            </View>
                        ))
                    }
                </ScrollView>
            </View>
        );
    }

    _renderJadwalPelajaran = () => {
        const todaySchedull = [
            {
                subjectName: 'Biologi',
                color: '#FFC34E'
            },
            {
                subjectName: 'Biologi',
                color: '#00BBF9'
            },
            {
                subjectName: 'Biologi',
                color: '#F7C59F'
            },
            {
                subjectName: 'Biologi',
                color: '#00BBF9'
            },
            {
                subjectName: 'Biologi',
                color: '#FFC2E2'
            },
            {
                subjectName: 'Biologi',
                color: '#F7C59F'
            },
            {
                subjectName: 'Biologi',
                color: '#9B5DE5'
            },
            {
                subjectName: 'Biologi',
                color: '#F66795'
            },
            {
                subjectName: 'Biologi',
                color: '#00BBF9'
            },
            {
                subjectName: 'Biologi',
                color: '#FFC2E2'
            },
            {
                subjectName: 'Biologi',
                color: '#F7C59F'
            },
            {
                subjectName: 'Biologi',
                color: '#9B5DE5'
            },
            {
                subjectName: 'Biologi',
                color: '#F66795'
            },

        ];
        return (
            <View style={{ paddingBottom: 20, flexDirection: 'column' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={{
                        color: FONT_BLACK,
                        fontSize: 14,
                        fontWeight: '700',
                        marginBottom: 16
                    }}>Jadwal Pelajaran</Text>
                </View>
                <View style={{ marginBottom: 15, justifyContent: 'center', width: '100%', height: 45, backgroundColor: '#41D2CA', borderTopRightRadius: 5, borderTopLeftRadius: 5 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                        <Text style={{ fontSize: 10, fontWeight: 'bold', color: 'white' }}>Senin</Text>
                        <Text style={{ fontSize: 10, fontWeight: 'bold', color: 'white' }}>Selasa</Text>
                        <Text style={{ fontSize: 10, fontWeight: 'bold', color: 'white' }}>Rabu</Text>
                        <Text style={{ fontSize: 10, fontWeight: 'bold', color: 'white' }}>Kamis</Text>
                        <Text style={{ fontSize: 10, fontWeight: 'bold', color: 'white' }}>Jumat</Text>
                        <Text style={{ fontSize: 10, fontWeight: 'bold', color: 'white' }}>Sabtu</Text>
                    </View>
                </View>
                <View style={{ marginLeft: 2, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start' }}>
                    {
                        todaySchedull.map((item, index) => (
                            <View
                                key={index}
                                style={{
                                    marginRight: 3,
                                    justifyContent: 'flex-start',
                                    marginBottom: 10,
                                    flexDirection: 'row',
                                    borderRadius: 5,
                                    position: 'relative',
                                    backgroundColor: '#D8F1FF'
                                }}>
                                <Text
                                    style={{
                                        borderBottomWidth: 4,
                                        borderBottomColor: item.color,
                                        paddingHorizontal: 15,
                                        marginBottom: 10,
                                        paddingBottom: 5,
                                        paddingTop: 15,
                                        fontSize: 8,
                                        fontWeight: 'bold',
                                    }}>{item.subjectName}
                                </Text>

                            </View>
                        ))
                    }
                </View>
            </View>
        );
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
                                {this._renderCardMapel()}
                                {this._renderJadwalPelajaran()}
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

export default connect(mapStateToProps, mapDispatchToProps)(Mapel);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 35,
        paddingHorizontal: 20
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