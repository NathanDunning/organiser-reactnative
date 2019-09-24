import React from 'react';
import {View, Text} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './screens/Home/Home';
import Login from './screens/Login/Login';
import Register from './screens/Register/Register';
import Calendar from './screens/Calendar/Calendar';
import addEvent from './screens/Calendar/AddEvent';

const AppNavigator = createStackNavigator(
  {
    Home: Home,
    Login: Login,
    Register: Register,
    Calendar: Calendar,
    AddEvent: addEvent,
  },
  {
    initialRouteName: 'Login',
  },
);

export default createAppContainer(AppNavigator);
