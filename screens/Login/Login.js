/**
 * This class can be considered as the business layer
 * It executes and manages logic of the application
 */

import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import LoginForm from './LoginForm';
import {login} from '../../services/login/login_service';
/**
 * This is the function to render the login page.
 * This page is for displaying
 */

class Login extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // AsyncStorage.clear();
    AsyncStorage.getAllKeys()
      .then(keys => {
        if (keys.includes('userData')) {
          this.props.navigation.replace('Home');
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  /**
   * Function that sends the request to the server
   */
  onLogin = (username, password) => {
    login(username, password).then(res => {
      console.log(res);
      this.props.navigation.replace('Home');
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textBox}>
          <Text style={styles.title}>Organise</Text>
        </View>
        <LoginForm click={this.onLogin} />
        <Button
          title="Don't have an account?"
          onPress={() => this.props.navigation.navigate('Register')}
        />
        {/* <Button
          title="Clear Storage"
          onPress={() =>
            AsyncStorage.clear()
              .then(res => console.log('storage clear'))
              .catch(err => console.log('storage empty'))
          }
        /> */}
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

export default Login;
