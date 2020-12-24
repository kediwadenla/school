import React, { Component } from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Platform} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';

// pages
import Login from './src/pages/Landing/Login';
import Home from './src/pages/TabHome/Home';
import OtherPages from './src/pages/TabOther/Other';

const Stack = createStackNavigator();
function LoginStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}

export const SignedOut = LoginStack;

const Tab = createBottomTabNavigator();

function SiswaTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Siswa"
      tabBarOptions={{
        activeTintColor: '#e91e63',
      }}
    >
      <Tab.Screen name="Home" component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen name="Order" component={OtherPages}
        options={{
          tabBarLabel: 'Order',
          tabBarIcon: ({ color, size }) => (
            <Icon name="carryout" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export const SignedIn = SiswaTabs;

export const createRootNavigator = (signedIn = false) => {
  return NavigationContainer(createSwitchNavigator(
    {
      SignedIn: {
        screen: SignedIn
      },
      SignedOut: {
        screen: SignedOut
      }
    },
    {
      initialRouteName: signedIn ? "SignedIn" : "SignedOut"
    }
  ));
};