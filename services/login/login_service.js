/**
 * This is a service in the data layer
 * It communicates and passes data to and from the database
 */

import AsyncStorage from '@react-native-community/async-storage';
const Parse = require('parse/react-native');

// Configuration for connecting to the parse server
Parse.setAsyncStorage(AsyncStorage);
Parse.serverURL = 'https://parseapi.back4app.com'; // This is your Server URL
Parse.initialize(
  'LafKswqptrHaS0iwXsV5yqTUCDtmyqf59LezOqAP', // This is your Application ID
  'tqM9hZGSeFrKo2qDlVSa8zpOhiOfZfaPhATxYqG7', // This is your Javascript key
);

/**
 * Logs the user into the app.
 * @param username User's username
 * @param password User's password
 */
export const login = (username, password) => {
  // Authenticate here
  // Pass the username and password to login function
  Parse.User.logIn(username, password)
    .then(user => {
      // Do after successful login
      // Set user
      _storeData(
        user.id,
        user.get('username'),
        user.get('email'),
        user.get('sessionToken'),
      );
    })
    .catch(error => {
      // Do after unsuccessfull login
      console.log('invalid login');
    });
};

// Store user data
export const _storeData = async (userId, username, email, token) => {
  try {
    // Convert to JSON
    const data = JSON.stringify({
      userId: userId,
      username: username,
      email: email,
      token: token,
    });
    console.log(data);
    await AsyncStorage.setItem('userData', data);
    console.log('saved to LS successfully');
  } catch (error) {
    // Error saving dat
    console.log('error saving data');
  }
};

export const _getUserData = async () => {
  try {
    await AsyncStorage.getItem('userData', () => {
      console.log('unable to find userData in LS');
    });
  } catch (error) {
    console.log('error in getUserData');
  }
};
