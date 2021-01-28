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

import CardPelajaran from '../../components/CardPelajaran';

class Home extends Component {
  componentDidMount() {
    this._fetchPostData();
  }
  _fetchPostData = () => {
    const { getHomeSample } = this.props;
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
      <View style={{ paddingVertical: 20, flexDirection: 'column' }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
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
      <View style={{ height: 300 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
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
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}
          nestedScrollEnabled>
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingBottom: 20
          }}>
            <View style={{
              backgroundColor: '#FFC34E',
              paddingHorizontal: 10,
              paddingVertical: 10,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              borderBottomLeftRadius: 5,
              borderTopLeftRadius: 5
            }}>
              <Image style={styles.image} source={require('../../../assets/clip-bio-technologies.png')} />
              <Text style={{ fontWeight: "bold", color: "#404040", fontSize: 12 }}>Kimia</Text>
            </View>
            <View style={{
              backgroundColor: '#D8F1FF',
              width: '80%',
              height: 86,
              justifyContent: "center",
              borderBottomRightRadius: 5,
              borderTopRightRadius: 5
            }}>
              <View style={{ marginLeft: 16 }}>
                <Text style={{ flexWrap: 'wrap', marginBottom: 10, fontSize: 12 }}>Kerjakan soal di buku halaman 122-126</Text>
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ fontWeight: "bold", color: "#404040", fontSize: 10 }}>Status :</Text>
                  <Text style={{ fontWeight: "bold", color: "#41D2CA", fontSize: 10 }}> Dikumpulkan</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 20
          }}>
            <View style={{
              backgroundColor: '#41D2CA',
              paddingHorizontal: 10,
              paddingVertical: 10,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              borderBottomLeftRadius: 5,
              borderTopLeftRadius: 5
            }}>
              <Image style={styles.image} source={require('../../../assets/clip-bio-technologies.png')} />
              <Text style={{ fontWeight: "bold", color: "#404040", fontSize: 12 }}>Kimia</Text>
            </View>
            <View style={{
              backgroundColor: '#D8F1FF',
              width: '80%',
              height: 86,
              justifyContent: "center",
              borderBottomRightRadius: 5,
              borderTopRightRadius: 5
            }}>
              <View style={{ marginLeft: 16 }}>
                <Text style={{ flexWrap: 'wrap', marginBottom: 10, fontSize: 12 }}>Kerjakan soal di buku halaman 122-126</Text>
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ fontWeight: "bold", color: "#404040", fontSize: 10 }}>Status :</Text>
                  <Text style={{ fontWeight: "bold", color: "#41D2CA", fontSize: 10 }}> Dikumpulkan</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 20
          }}>
            <View style={{
              backgroundColor: '#F66795',
              paddingHorizontal: 10,
              paddingVertical: 10,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              borderBottomLeftRadius: 5,
              borderTopLeftRadius: 5
            }}>
              <Image style={styles.image} source={require('../../../assets/clip-bio-technologies.png')} />
              <Text style={{ fontWeight: "bold", color: "#404040", fontSize: 12 }}>Kimia</Text>
            </View>
            <View style={{
              backgroundColor: '#D8F1FF',
              width: '80%',
              height: 86,
              justifyContent: "center",
              borderBottomRightRadius: 5,
              borderTopRightRadius: 5
            }}>
              <View style={{ marginLeft: 16 }}>
                <Text style={{ flexWrap: 'wrap', marginBottom: 10, fontSize: 12 }}>Kerjakan soal di buku halaman 122-126</Text>
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ fontWeight: "bold", color: "#404040", fontSize: 10 }}>Status :</Text>
                  <Text style={{ fontWeight: "bold", color: "#41D2CA", fontSize: 10 }}> Dikumpulkan</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 20
          }}>
            <View style={{
              backgroundColor: '#F66795',
              paddingHorizontal: 10,
              paddingVertical: 10,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              borderBottomLeftRadius: 5,
              borderTopLeftRadius: 5
            }}>
              <Image style={styles.image} source={require('../../../assets/clip-bio-technologies.png')} />
              <Text style={{ fontWeight: "bold", color: "#404040", fontSize: 12 }}>Kimia</Text>
            </View>
            <View style={{
              backgroundColor: '#D8F1FF',
              width: '80%',
              height: 86,
              justifyContent: "center",
              borderBottomRightRadius: 5,
              borderTopRightRadius: 5
            }}>
              <View style={{ marginLeft: 16 }}>
                <Text style={{ flexWrap: 'wrap', marginBottom: 10, fontSize: 12 }}>Kerjakan soal di buku halaman 122-126</Text>
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ fontWeight: "bold", color: "#404040", fontSize: 10 }}>Status :</Text>
                  <Text style={{ fontWeight: "bold", color: "#41D2CA", fontSize: 10 }}> Dikumpulkan</Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }

  _renderCardAgenda = () => {
    const todaySchedull = [
      {
        subjectName: 'Kimia',
        tanggal: '22',
        bulan: 'Januari 2021',
        keterangan: 'Ulangan harian Matematika',
        color: '#F66795',
        url: require("../../../assets/Paper.png")

      },
      {
        subjectName: 'Kimia',
        tanggal: '22',
        bulan: 'Januari 2021',
        keterangan: 'Diskusi kelompok PPKN',
        color: '#F66795',
        url: require("../../../assets/group.png")

      },
      {
        subjectName: 'Kimia',
        tanggal: '22',
        bulan: 'Januari 2021',
        keterangan: 'Ulangan harian Agama',
        color: '#F66795',
        url: require("../../../assets/Paper.png")
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
          }}>Agenda Yang Akan Datang</Text>
        </View>
        <ScrollView horizontal={true}>
          {
            todaySchedull.map((item, index) => (
              <View style={{
                width: 150,
                paddingVertical: 16,
                paddingHorizontal: 16,
                borderRadius: 10,
                position: 'relative',
                overflow: 'hidden',
                marginRight: 10,
                backgroundColor: item.color
              }}>
                <Image style={{ width: 30, position: 'absolute', right: 25, top: 20 }} source={item.url} />
                <View style={styles.circleContainer}>
                  <View style={styles.circleOne} />
                  <View style={styles.circleTwo} />
                </View>
                <View>
                  <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 24, marginTop: 35 }}>{item.tanggal}</Text>
                  <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 12, marginTop: 10 }}>{item.bulan}</Text>
                  <Text style={{ color: 'white', fontSize: 10, marginTop: 10 }}>{item.keterangan}</Text>
                </View>

              </View>
            ))
          }
        </ScrollView>
      </View>
    );
  }

  _renderMading = () => {
    const todaySchedull = [
      {
        datePosting: '2 hari yang lalu',
        keterangan: 'Pengumuman libur semester akhir tahun',
        color: '#F66795',
        url: require("../../../assets/page-under-construction-5.png")

      },
      {
        datePosting: '2 hari yang lalu',
        keterangan: 'Pengumuman libur semester akhir tahun',
        color: '#FFC34E',
        url: require("../../../assets/clip-security.png")

      },
    ];
    return (
      <View style={{ flexDirection: 'column' }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={{
            color: FONT_BLACK,
            fontSize: 14,
            fontWeight: '700',
            marginBottom: 16
          }}>Mading Sekolah</Text>
        </View>
        <ScrollView horizontal={true}>
          {
            todaySchedull.map((item, index) => (
              <View style={{
                width: 262,
                paddingVertical: 16,
                paddingHorizontal: 16,
                borderRadius: 10,
                position: 'relative',
                overflow: 'hidden',
                marginRight: 10,
                backgroundColor: item.color
              }}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                  <Image source={item.url} />
                </View>
                <View>
                  <Text style={{ color: '#404040', fontWeight: 'bold', fontSize: 14, marginTop: 35 }}>{item.keterangan}</Text>
                  <Text style={{ color: '#BBBBBB', fontSize: 12, marginTop: 10 }}>{item.datePosting}</Text>
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
        {
          isLoading ? (
            <Text>Loading...</Text>
          ) : (
              <View style={{ flex: 1 }}>
                <Text style={{
                  fontSize: 24,
                  fontWeight: '700',
                  color: FONT_BLACK
                }}>Halo, {userData.name.first}</Text>
                <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }} nestedScrollEnabled={true}>
                  <View style={{ flex: 1 }}>
                    {this._renderCardPelajaran()}
                  </View>
                  {this._renderCardTugas()}
                  {this._renderCardAgenda()}
                  {this._renderMading()}
                </ScrollView>
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
  },
  circleContainer: {
    position: 'absolute',
    top: -20,
    right: -45,
    zIndex: -1
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