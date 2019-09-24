/**
 * This class is a visual layer
 * It's main functionality is to display visual components to the user.
 * The user interacts with this layer.
 */

import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Calendar from '../Calendar/Calendar';

// The main class for rendering the home page
const Home = props => {
  // AsyncStorage.clear();
  AsyncStorage.getAllKeys()
    .then(keys => {
      if (!keys.includes('userData')) {
        props.navigation.replace('Login');
      }
    })
    .catch(err => {
      console.log(err);
    });

  // Menu
  return (
    <View style={styles.container}>
      <Calendar />
    </View>
  );
};

// Styling for home page
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 80,
  },
});

export default Home;
