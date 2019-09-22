/**
 * This class can be considered as the business layer
 * It executes and manages logic of the application
 */

import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import RegisterForm from './RegisterForm';
import register from '../../services/register/register_service';

/**
 * This is the function to render the login page.
 * This page is for displaying
 */
const Register = ({history}) => {
  return (
    <View style={styles.container}>
      <View style={styles.textBox}>
        <Text style={styles.title}>Organise</Text>
      </View>
      <RegisterForm click={onRegister} />
      <Button
        title="Already have an account?"
        onPress={() => history.push('/login')}
      />
    </View>
  );
};

// Call the register service
const onRegister = (username, email, password, confPassword) => {
  register(username, email, password, confPassword)
    .then(res => {
      //navToHome();
      console.log('successful register, navigate to home');
    })
    .catch(err => {
      console.log(err);
    });
};

// Navigate to home page
export const navToHome = ({history}) => {
  history.push('/home');
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

export default Register;
