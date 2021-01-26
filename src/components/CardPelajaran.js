import React, { Component } from "react";
import { 
  View,
  Text,
  StyleSheet,
  Image
} from "react-native";
import { Avatar } from 'react-native-paper';

class CardPelajaran extends Component {
  render() {
    const { subjectName, time, subjectImage, teacherAva, teacherName, color } = this.props;
    return (
      <View style={{
        width: 150,
        paddingVertical: 16,
        paddingHorizontal: 16,
        backgroundColor: color,
        borderRadius: 10,
        position: 'relative',
        overflow: 'hidden',
        marginRight: 10
      }}>
        <Text style={styles.pelajaranTitle}>{subjectName}</Text>
        <Text style={styles.pelajaranTime}>{time}</Text>
        <Image style={styles.image} source={require('../../assets/clip-bio-technologies.png')} />
        <View style={styles.guruContainer}>
          <Avatar.Text size={20} label={teacherAva} />
          <Text style={styles.guruName}>{teacherName}</Text>
        </View>
        <View style={styles.circleContainer}>
          <View style={styles.circleOne} />
          <View style={styles.circleTwo} />
        </View>
      </View>
    );
  }
}
export default CardPelajaran;

const styles = StyleSheet.create({
  pelajaranTitle: {
    fontSize: 18,
    color: '#404040',
    fontWeight: 'bold'
  },
  pelajaranTime: {
    fontSize: 14,
    color: '#404040',
    fontWeight: 'bold',
    marginTop: 8
  },
  image: {
    width: '100%'
  },
  guruContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  guruName: {
    fontSize: 16,
    color: '#404040',
    fontWeight: 'bold',
    marginLeft: 5
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