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
      <View>
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
        <ScrollView nestedScrollEnabled={true}>
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
              alignItems: 'center'
            }}>
              <Image style={styles.image} source={require('../../../assets/clip-bio-technologies.png')} />
              <Text style={{ fontWeight: "bold", color: "#404040", fontSize: 12 }}>Kimia</Text>
            </View>
            <View style={{
              backgroundColor: '#D8F1FF',
              width: '80%',
              height: 85,
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
              alignItems: 'center'
            }}>
              <Image style={styles.image} source={require('../../../assets/clip-bio-technologies.png')} />
              <Text style={{ fontWeight: "bold", color: "#404040", fontSize: 12 }}>Kimia</Text>
            </View>
            <View style={{
              backgroundColor: '#D8F1FF',
              width: '80%',
              height: 85,
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
              alignItems: 'center'
            }}>
              <Image style={styles.image} source={require('../../../assets/clip-bio-technologies.png')} />
              <Text style={{ fontWeight: "bold", color: "#404040", fontSize: 12 }}>Kimia</Text>
            </View>
            <View style={{
              backgroundColor: '#D8F1FF',
              width: '80%',
              height: 85,
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
              alignItems: 'center'
            }}>
              <Image style={styles.image} source={require('../../../assets/clip-bio-technologies.png')} />
              <Text style={{ fontWeight: "bold", color: "#404040", fontSize: 12 }}>Kimia</Text>
            </View>
            <View style={{
              backgroundColor: '#D8F1FF',
              width: '80%',
              height: 85,
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
          }}>Agenda Yang Akan Datang</Text>
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
                <ScrollView>
                  <View style={{ flex: 1 }}>
                    {this._renderCardPelajaran()}
                  </View>
                  <ScrollView style={{ flex: 1 }}>
                    {this._renderCardTugas()}
                  </ScrollView>
                  {this._renderCardAgenda()}
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
  }
});