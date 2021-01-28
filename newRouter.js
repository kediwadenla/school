import React, { Component } from "react";

// pages
import Login from './src/pages/Landing/Login';
import Home from './src/pages/TabHome/Home';
import OtherPages from './src/pages/TabOther/Other';
import MapelPages from './src/pages/TabOther/Mapel';

import Icon from 'react-native-vector-icons/AntDesign';

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



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
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={StackHome}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Mapel"
        component={StackMapel}
        options={{
          tabBarLabel: 'Mapel',
          tabBarIcon: ({ color, size }) => (
            <Icon name="book" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Statistik"
        component={StackOther}
        options={{
          tabBarLabel: 'Statistik',
          tabBarIcon: ({ color, size }) => (
            <Icon name="piechart" color={color} size={23} />
          ),
        }}
      />
      <Tab.Screen
        name="Diskusi"
        component={StackOther}
        options={{
          tabBarLabel: 'Diskusi',
          tabBarIcon: ({ color, size }) => (
            <Icon name="wechat" color={color} size={27} />
          ),
        }}
      />
      <Tab.Screen
        name="Keuangan"
        component={StackOther}
        options={{
          tabBarLabel: 'Keuangan',
          tabBarIcon: ({ color, size }) => (
            <Icon name="creditcard" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={StackOther}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
          ),
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