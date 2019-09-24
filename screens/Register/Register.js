/**
 * This class can be considered as the business layer
 * It executes and manages logic of the application
 */

import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import RegisterForm from './RegisterForm';
import register from '../../services/register/register_service';

/**
 * This is the function to render the login page.
 * This page is for displaying
 */
class Register extends Component {
  constructor(props) {
    super(props);
  }

  // Call the register service
  onRegister = (username, email, password, confPassword) => {
    register(username, email, password, confPassword)
      .then(res => {
        console.log('successful register, navigate to home');
        console.log(res);
        this.props.navigation.navigate('Home');
      })
      .catch(err => {
        console.log(err);
      });
  };

  // Render
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textBox}>
          <Text style={styles.title}>Organise</Text>
        </View>
        <RegisterForm click={this.onRegister} />
        <Button
          title="Already have an account?"
          onPress={() => this.props.navigation.navigate('Login')}
        />
      </View>
    );
  }
}

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
