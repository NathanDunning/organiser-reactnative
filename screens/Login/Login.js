import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

import LoginForm from './LoginForm';

/**
 * This is the function to render the login page.
 * This page is for displaying
 */
const Login = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textBox}>
        <Text style={styles.title}>Organise</Text>
      </View>
      <LoginForm />
      <Text>Don't have an account?</Text>
    </View>
  );
};

/**
 * Style sheets for organising the page
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 50,
  },
  textBox: {
    width: '100%',
    alignItems: 'center',
    padding: 50,
    margin: 30,
  },
  title: {
    fontSize: 64,
    fontWeight: 'bold',
    paddingLeft: 0,
    paddingRight: 0,
  },
});

export default Login;
