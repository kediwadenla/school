import React, { Component } from "react";

// pages
import Login from './src/pages/Landing/Login';
import Home from './src/pages/TabHome/Home';
import OtherPages from './src/pages/TabOther/Other';

import Icon from 'react-native-vector-icons/AntDesign';

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Other from "./src/pages/TabOther/Other";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const StackLogin = () => (
  <Stack.Navigator>
    <Stack.Screen name="Login" component={Login}
      options={{
        headerShown: false,
      }}/>
  </Stack.Navigator>
);

const StackHome = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={Home}
      options={{
        headerShown: false,
      }}/>
  </Stack.Navigator>
);

const StackOther = () => (
  <Stack.Navigator>
    <Stack.Screen name="Other" component={OtherPages}
      options={{
        headerShown: false,
      }}/>
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
        name="OtherTab"
        component={StackOther}
        options={{
          tabBarLabel: 'Other',
          tabBarIcon: ({ color, size }) => (
            <Icon name="carryout" color={color} size={size} />
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