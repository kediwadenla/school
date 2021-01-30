import React, { Component } from "react";
import {
  Image,
} from "react-native";

// pages
import Login from './src/pages/Landing/Login';
import Home from './src/pages/TabHome/Home';
import OtherPages from './src/pages/TabOther/Other';
import MapelPages from './src/pages/TabMapel/Mapel';

import Icon from 'react-native-vector-icons/AntDesign';

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { color } from "react-native-reanimated";



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const StackLogin = () => (
  <Stack.Navigator>
    <Stack.Screen name="Login" component={Login}
      options={{
        headerShown: false,
      }} />
  </Stack.Navigator>
);

const StackHome = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={Home}
      options={{
        headerShown: false,
      }} />
  </Stack.Navigator>
);

const StackOther = () => (
  <Stack.Navigator>
    <Stack.Screen name="Other" component={OtherPages}
      options={{
        headerShown: false,
      }} />
  </Stack.Navigator>
);

const StackMapel = () => (
  <Stack.Navigator>
    <Stack.Screen name="Mapel" component={MapelPages}
      options={{
        headerShown: false,
      }} />
  </Stack.Navigator>
);

function mainFlow() {
  return (
    <Tab.Navigator
      activeColor="#00aea2"
      inactiveColor="#95a5a6"
      tabBarOptions={{
        activeTintColor: '#004E89',
        inactiveTintColor: '#D8F1FF',
        activeBackgroundColor: '#41D2CA',
        inactiveBackgroundColor: '#41D2CA',
        style: { justifyContent: 'center', alignItems: 'center' }
      }}
    >
      <Tab.Screen
        name="Home"
        component={StackHome}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size, focused }) => {
            return (
              focused ?
                <Image
                  style={{ tintColor: "#004E89" }}
                  source={require('./assets/icontab/home.png')}
                /> :
                <Image
                  source={require('./assets/icontab/home.png')}
                />
            );
          },
        }}
      />
      <Tab.Screen
        name="Mapel"
        component={StackMapel}
        options={{
          tabBarLabel: 'Mapel',
          tabBarIcon: ({ color, size, focused }) => {
            return (
              focused ?
                <Image
                  style={{ tintColor: "#004E89" }}
                  source={require('./assets/icontab/mapel.png')}
                /> :
                <Image
                  source={require('./assets/icontab/mapel.png')}
                />
            );
          },
        }}
      />
      <Tab.Screen
        name="Statistik"
        component={StackOther}
        options={{
          tabBarLabel: 'Statistik',
          tabBarIcon: ({ color, size, focused }) => {
            return (
              focused ?
                <Image
                  style={{ tintColor: "#004E89" }}
                  source={require('./assets/icontab/statistik.png')}
                /> :
                <Image
                  source={require('./assets/icontab/statistik.png')}
                />
            );
          },
        }}
      />
      <Tab.Screen
        name="Diskusi"
        component={StackOther}
        options={{
          tabBarLabel: 'Diskusi',
          tabBarIcon: ({ color, size, focused }) => {
            return (
              focused ?
                <Image
                  style={{ tintColor: "#004E89" }}
                  source={require('./assets/icontab/diskusi.png')}
                /> :
                <Image
                  source={require('./assets/icontab/diskusi.png')}
                />
            );
          },
        }}
      />
      <Tab.Screen
        name="Keuangan"
        component={StackOther}
        options={{
          tabBarLabel: 'Keuangan',
          tabBarIcon: ({ color, size, focused }) => {
            return (
              focused ?
                <Image
                  style={{ tintColor: "#004E89" }}
                  source={require('./assets/icontab/keuangan.png')}
                /> :
                <Image
                  source={require('./assets/icontab/keuangan.png')}
                />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={StackOther}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size, focused }) => {
            return (
              focused ?
                <Image
                  style={{ tintColor: "#004E89" }}
                  source={require('./assets/icontab/profil.png')}
                /> :
                <Image
                  source={require('./assets/icontab/profil.png')}
                />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

export const createRootNavigator = (signedIn = false) => {
  return (
    <Stack.Navigator>
      {signedIn ? (
        <>
          <Stack.Screen
            name="mainFlow"
            component={mainFlow}
            options={{ headerShown: false }}
          />
        </>
      ) : (
          <Stack.Screen
            name="Login"
            component={StackLogin}
            options={{ headerShown: false }}
          />
        )}
    </Stack.Navigator>
  )
};