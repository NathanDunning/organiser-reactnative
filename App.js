import React from 'react';
import {View, Text} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './screens/Home/Home';
import Login from './screens/Login/Login';
import Register from './screens/Register/Register';
import Calendar from './screens/Calendar/Calendar';
import AddEvent from './screens/Calendar/AddEvent';
import Todo from './screens/Todo/Todo';
import News from './screens/News/News';

const AppNavigator = createStackNavigator(
  {
    Home: Home,
    Login: Login,
    Register: Register,
    Calendar: Calendar,
    AddEvent: AddEvent,
    Todo: Todo,
    News: News,
  },
  {
    initialRouteName: 'Home',
  },
);

export default createAppContainer(AppNavigator);
