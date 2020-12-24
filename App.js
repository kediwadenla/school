import React from 'react';
import 'react-native-gesture-handler';
import { View, Platform, AsyncStorage, Text, StatusBar } from 'react-native';
import { isSignedIn } from "./auth";
import { AppLoading, Notifications } from "expo";
import store from './store';
import {Provider} from 'react-redux';
import { createRootNavigator } from './newRouter';
import { NavigationContainer } from '@react-navigation/native';
export default class App extends React.Component {
  constructor(props) {
    super (props);

    this.state = {
      signedIn: false,
      checkedSignIn: false,
      loading: true
    };
  }

  componentDidMount () {
    isSignedIn()
      .then(res => this.setState({ signedIn: res, checkedSignIn: true }))
      .catch(err => alert(err));
    if (Platform.OS === 'android') {
      Notifications.createChannelAndroidAsync('reminders', {
        name: 'Reminders',
        priority: 'max',
        sound: true,
        vibrate: [0, 250, 250, 250],
      });
    }
  }

  async UNSAFE_componentWillMount() {
    this.setState({ loading: false });
  }

  render() {
    const { checkedSignIn, signedIn } = this.state;
    if (this.state.loading) {
      return (
        <View>
          <AppLoading />
        </View>
      );
    }

    if (!checkedSignIn) {
      return null;
    }
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Provider store={store}>
            {createRootNavigator(!signedIn)}
          </Provider>
        </NavigationContainer>
      </Provider>
    );
  }
}

