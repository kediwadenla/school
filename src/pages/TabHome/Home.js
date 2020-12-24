import React, { Component } from "react";
import { 
  View,
  Text,
  StyleSheet
} from "react-native";
import * as homeAction from '../../actions/home';
import { connect } from 'react-redux';

class Home extends Component {
  componentDidMount() {
    this._fetchPostData();
  }
  _fetchPostData = () => {
    const {getHomeSample} = this.props;
    getHomeSample();
  }

  render() {
    const { userData, isLoading } = this.props;
    return (
      <View style={styles.container}>
        {
          isLoading ? (
            <Text>Loading...</Text>
          ):(
            <Text>Halo, {userData.name.first}</Text>
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
    alignItems: 'center',
    justifyContent: 'center'
  }
});