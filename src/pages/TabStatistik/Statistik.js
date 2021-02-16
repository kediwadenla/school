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
  Text
} from "react-native";
import * as homeAction from '../../actions/home';
import { connect } from 'react-redux';
import { FONT_BLACK } from '../../../constant/color';
import { Avatar } from 'react-native-paper';
import { PieChart } from 'react-native-svg-charts';

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
        teacherAva: 'FM',
        nama: 'Hadir',
        warna: '#F66795',
        svg: { fill: '#F66795' },
      },
      {
        key: 2,
        amount: 4,
        teacherAva: 'FM',
        nama: 'Izin',
        warna: '#41D2CA',
        svg: { fill: '#41D2CA' }
      },
      {
        key: 3,
        amount: 10,
        teacherAva: 'FM',
        nama: 'Tanpa Keterangan',
        warna: '#9B5DE5',
        svg: { fill: '#9B5DE5' }
      },
    ]

    const Labels = ({ slices }) => {
      return slices.map((slice, index) => {
        const { data } = slice;

      })
    }

    return (
      <View style={{ height: 136, backgroundColor: '#C8EBFF', flexDirection: 'row', borderRadius: 5 }}>
        <View style={{ flex: 1 }}>
          <PieChart
            style={{ height: 140 }}
            valueAccessor={({ item }) => item.amount}
            data={data}
            spacing={0}
            outerRadius={'70%'}
          >
            <Labels />
          </PieChart>
        </View>
        <View style={{ flex: 1, marginTop: 35 }}>
          {data.map((item, index) => (

            <View key={index} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
              <View style={{ borderRadius: 10, width: 10, backgroundColor: item.warna, height: 10, marginRight: 15 }}></View>
              <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold' }}>
                {item.nama} : {item.amount} %
                        </Text>
            </View>
          ))
          }
        </View>
      </View >
    )
  }

  _renderAbsensiTerakhir = () => {
    const data = [
      {
        key: 1,
        mapel: 'Kimia',
        waktu: '07.00-10.00',
        teacherAva: 'JD',
        teacherName: 'John Doe',
        warna: '#FFC34E',
        status: 'Hadir'

      },
      {
        key: 2,
        mapel: 'Matematika',
        waktu: '10.15-11.30',
        teacherAva: 'JD',
        teacherName: 'John Doe',
        warna: '#41D2CA',
        status: 'Hadir'

      },
      {
        key: 3,
        mapel: 'Kimia',
        waktu: '07.00-10.00',
        teacherAva: 'JD',
        teacherName: 'John Doe',
        warna: '#FFC34E',
        status: 'Hadir'

      },
      {
        key: 4,
        mapel: 'Matematika',
        waktu: '10.15-11.30',
        teacherAva: 'JD',
        teacherName: 'John Doe',
        warna: '#41D2CA',
        status: 'Hadir'

      },
      {
        key: 5,
        mapel: 'Kimia',
        waktu: '07.00-10.00',
        teacherAva: 'JD',
        teacherName: 'John Doe',
        warna: '#FFC34E',
        status: 'Hadir'

      },
      {
        key: 6,
        mapel: 'Matematika',
        waktu: '10.15-11.30',
        teacherAva: 'JD',
        teacherName: 'John Doe',
        warna: '#41D2CA',
        status: 'Hadir'

      }
    ]
    return (
      <View style={{ height: '70%', paddingVertical: 20, flexDirection: 'column' }}>
        <View>
          <Text style={{
            color: FONT_BLACK,
            fontSize: 14,
            fontWeight: '700',
            marginBottom: 16
          }}>Absensi Terakhir</Text>
          <Text style={{
            color: FONT_BLACK,
            fontSize: 12,
            fontWeight: '700',
            marginBottom: 16,
          }}>Senin, 1 Januari 2021</Text>
        </View>
        <ScrollView >
          {
            data.map((item, index) => (
              <View
                key={index}
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '100%',
                  height: 73,
                  overflow: 'hidden',
                  paddingVertical: 16,
                  marginBottom: 15,
                  borderRadius: 5,
                  position: 'relative',
                  backgroundColor: item.warna
                }}>
                <View style={{ flex: 1, flexDirection: 'row', width: '100%', justifyContent: 'space-around', height: 50 }}>
                  <View style={{ justifyContent: 'space-around' }}>
                    <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#404040' }}>{item.mapel}</Text>
                    <Text style={{ fontSize: 12, color: '#404040' }}>{item.waktu}</Text>
                  </View>
                  <View style={{ flexDirection: 'row', alignItems: 'center', width: 80, justifyContent: 'space-between' }}>
                    <Avatar.Text size={20} label={item.teacherAva} />
                    <Text style={{ fontSize: 10, fontWeight: 'bold', color: '#404040' }}>{item.teacherName}</Text>
                  </View>
                  <View style={{ alignItems: 'center', justifyContent: 'space-around' }}>
                    <Image
                      style={{ width: 16, height: 16 }}
                      source={require('../../../assets/cek.png')} />
                    <Text style={{ fontSize: 10, fontWeight: 'bold', color: '#404040' }}>{item.teacherName}</Text>
                  </View>
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

  _renderUlanganHarian = () => {
    const data = [
      {
        key: 1,
        mapel: 'Kimia',
        waktu: '07.00-10.00',
        teacherAva: 'JD',
        teacherName: 'John Doe',
        warna: '#FFC34E',
        status: 'Hadir'

      },
      {
        key: 2,
        mapel: 'Matematika',
        waktu: '10.15-11.30',
        teacherAva: 'JD',
        teacherName: 'John Doe',
        warna: '#41D2CA',
        status: 'Hadir'

      },
      {
        key: 3,
        mapel: 'Kimia',
        waktu: '07.00-10.00',
        teacherAva: 'JD',
        teacherName: 'John Doe',
        warna: '#FFC34E',
        status: 'Hadir'

      },
      {
        key: 4,
        mapel: 'Matematika',
        waktu: '10.15-11.30',
        teacherAva: 'JD',
        teacherName: 'John Doe',
        warna: '#41D2CA',
        status: 'Hadir'

      },
      {
        key: 5,
        mapel: 'Kimia',
        waktu: '07.00-10.00',
        teacherAva: 'JD',
        teacherName: 'John Doe',
        warna: '#FFC34E',
        status: 'Hadir'

      },
      {
        key: 6,
        mapel: 'Matematika',
        waktu: '10.15-11.30',
        teacherAva: 'JD',
        teacherName: 'John Doe',
        warna: '#41D2CA',
        status: 'Hadir'

      }
    ]
    return (
      <View style={{ height: '65%', paddingVertical: 20, flexDirection: 'column' }}>
        <View>
          <Text style={{
            color: FONT_BLACK,
            fontSize: 14,
            fontWeight: '700',
            marginBottom: 16
          }}>Absensi Terakhir</Text>
          <Text style={{
            color: FONT_BLACK,
            fontSize: 12,
            fontWeight: '700',
            marginBottom: 16,
          }}>Senin, 1 Januari 2021</Text>
        </View>
        <ScrollView >
          {
            data.map((item, index) => (
              <View
                key={index}
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '100%',
                  height: 73,
                  overflow: 'hidden',
                  paddingVertical: 16,
                  marginBottom: 15,
                  borderRadius: 5,
                  position: 'relative',
                  backgroundColor: item.warna
                }}>
                <View style={{ flex: 1, flexDirection: 'row', width: '100%', justifyContent: 'space-around', height: 50 }}>
                  <View style={{ justifyContent: 'space-around' }}>
                    <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#404040' }}>{item.mapel}</Text>
                    <Text style={{ fontSize: 12, color: '#404040' }}>{item.waktu}</Text>
                  </View>
                  <View style={{ flexDirection: 'row', alignItems: 'center', width: 80, justifyContent: 'space-between' }}>
                    <Avatar.Text size={20} label={item.teacherAva} />
                    <Text style={{ fontSize: 10, fontWeight: 'bold', color: '#404040' }}>{item.teacherName}</Text>
                  </View>
                  <View style={{ alignItems: 'center', justifyContent: 'space-around' }}>
                    <Image
                      style={{ width: 16, height: 16 }}
                      source={require('../../../assets/cek.png')} />
                    <Text style={{ fontSize: 10, fontWeight: 'bold', color: '#404040' }}>{item.teacherName}</Text>
                  </View>
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

  render() {
    const { userData, isLoading } = this.props;
    return (
      <View style={styles.container}>
        {this._renderHeader()}
        {!this.state.selected ?
          <View>
            {this._renderAbsensi()}
            {this._renderAbsensiTerakhir()}
          </View > :
          <View>
            {this._renderUlanganHarian()}
          </View>

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