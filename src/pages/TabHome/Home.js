import React, { Component } from "react";
import { 
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  ScrollView
} from "react-native";
import * as homeAction from '../../actions/home';
import { connect } from 'react-redux';
import { FONT_BLACK } from '../../../constant/color';

import CardPelajaran from '../../components/CardPelajaran';

class Home extends Component {
  componentDidMount() {
    this._fetchPostData();
  }
  _fetchPostData = () => {
    const {getHomeSample} = this.props;
    getHomeSample();
  }

  _renderCardPelajaran = () => {
    const todaySchedull = [
      {
        subjectName: 'Kimia',
        time: '07.45-10.00 WIB',
        teacherAva: 'FM',
        teacherName: 'Floyd Miles',
        color: '#FFC34E'
      },
      {
        subjectName: 'Matematika',
        time: '07.45-10.00 WIB',
        teacherAva: 'JD',
        teacherName: 'John Doe',
        color: '#41D2CA'
      },
      {
        subjectName: 'Biologi',
        time: '07.45-10.00 WIB',
        teacherAva: 'JD',
        teacherName: 'John Doe',
        color: '#F66795'
      }
    ];
    return (
      <View style={{paddingVertical: 24, flexDirection: 'column'}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
          <Text style={{
            color: FONT_BLACK,
            fontSize: 14,
            fontWeight: '700',
            marginBottom: 16
          }}>Jadwal Hari Ini</Text>
          <Text style={{
            color: FONT_BLACK,
            fontSize: 11,
            fontWeight: '700',
            marginBottom: 16,
            textDecorationLine: 'underline'
          }}>Lihat Semua</Text>
        </View>
        <ScrollView horizontal={true}>
          {
            todaySchedull.map((item, index) => (
              <CardPelajaran
                key={index}
                subjectName={item.subjectName}
                time={item.time}
                color={item.color}
                teacherAva={item.teacherAva}
                teacherName={item.teacherName}
              />
            ))
          }
        </ScrollView>
      </View>
    );
  }

  _renderCardTugas = () => {
    return (
      <View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
          <Text style={{
            color: FONT_BLACK,
            fontSize: 14,
            fontWeight: '700',
            marginBottom: 16
          }}>Histori Tugas</Text>
          <Text style={{
            color: FONT_BLACK,
            fontSize: 11,
            fontWeight: '700',
            marginBottom: 16,
            textDecorationLine: 'underline'
          }}>Lihat Semua</Text>
        </View>
        <ScrollView>
          <View style={{
            flexDirection: 'row',
            alignItems: 'center'
          }}>
            <View style={{
              backgroundColor: '#FFC34E',
              paddingHorizontal: 10,
              paddingVertical: 10,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <Image style={styles.image} source={require('../../../assets/clip-bio-technologies.png')} />
              <Text>Kimia</Text>
            </View>
            <View style={{marginLeft: 16}}>
              <Text style={{flexWrap: 'wrap'}}>Kerjakan soal di buku halaman 122-126</Text>
              <Text>Status : Dikumpulkan</Text>
            </View>
          </View>
        </ScrollView>
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
          ):(
            <View>
              <Text style={{
                fontSize: 24,
                fontWeight: '700',
                color: FONT_BLACK
              }}>Halo, {userData.name.first}</Text>
              { this._renderCardPelajaran() }
              { this._renderCardTugas() }
            </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);

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
  }
});