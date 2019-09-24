/**
 * This class is a visual layer
 * It's main functionality is to display visual components to the user.
 * The user interacts with this layer.
 */

import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

/**
 * This function is used to render the actual login form.
 * It passes values to the Login class to process
 */
const LoginForm = props => {
  const [username, onChangeUsername] = React.useState('');
  const [password, onChangePassword] = React.useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        onSubmitEditing={() => this.passwordInput.focus()}
        onChangeText={text => onChangeUsername(text)}
        value={username}
        autoCorrect={false}
        returnKeyType="next"
        placeholder="Username"
        placeholderTextColor="rgba(0,0,0,0.7)"
      />

      <TextInput
        style={styles.input}
        returnKeyType="go"
        onChangeText={input => onChangePassword(input)}
        value={password}
        placeholder="Password"
        placeholderTextColor="rgba(0,0,0,0.7)"
        secureTextEntry
      />

      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => props.click(username, password)}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
};

// Style sheet here
const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 30,
    width: '100%',
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(225,225,225,0.4)',
    marginBottom: 10,
    padding: 10,
    color: '#2980b6',
  },
  buttonContainer: {
    backgroundColor: '#2980b6',
    paddingVertical: 15,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
  },
});

export default LoginForm;
