/**
 * This is a service in the data layer
 * It communicates and passes data to and from the database
 */
import AsyncStorage from '@react-native-community/async-storage';
import Parse from 'parse/react-native';
import {_storeData} from '../login/login_service';

// Configuration for connecting to the parse server
Parse.setAsyncStorage(AsyncStorage);
Parse.serverURL = 'https://parseapi.back4app.com'; // This is your Server URL
Parse.initialize(
  'LafKswqptrHaS0iwXsV5yqTUCDtmyqf59LezOqAP', // This is your Application ID
  'tqM9hZGSeFrKo2qDlVSa8zpOhiOfZfaPhATxYqG7', // This is your Javascript key
);

/**
 * This function is used to register the user to the database.
 */
const register = (username, email, password, confPassword) => {
  return new Promise((resolve, reject) => {
    const user = new Parse.User();
    user.set('username', username);
    user.set('email', email);
    user.set('password', password);

    // Send request to server
    user
      .signUp()
      .then(user => {
        // Store user
        _storeData(
          user.id,
          user.get('username'),
          user.get('email'),
          user.get('sessionToken'),
        )
          .then(data => {
            resolve(data);
          })
          .catch(err => {
            reject(err);
          });
      })
      .catch(error => {
        reject(error);
      });
  });
};

export default register;
