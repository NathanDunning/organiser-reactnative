const {AsyncStorage} = require('react-native');
const Parse = require('parse/react-native');
import {_getUserData} from '../login/login_service';

Parse.setAsyncStorage(AsyncStorage);
Parse.serverURL = 'https://parseapi.back4app.com'; // This is your Server URL
Parse.initialize(
  'LafKswqptrHaS0iwXsV5yqTUCDtmyqf59LezOqAP', // This is your Application ID
  'tqM9hZGSeFrKo2qDlVSa8zpOhiOfZfaPhATxYqG7', // This is your Javascript key
);

let userId = AsyncStorage.getItem('userData').then(dat => {
  return (userId = JSON.parse(dat).userId);
});

export const addEvent = (title, location, start, end) => {
  return new Promise((res, rej) => {
    const Calendar = Parse.Object.extend('Calendar');
    const myNewObject = new Calendar();

    myNewObject.set('title', title);
    myNewObject.set('location', location);
    myNewObject.set('startTime', start);
    myNewObject.set('endTime', end);
    myNewObject.set('user', {
      __type: 'Pointer',
      className: '_User',
      objectId: String(userId),
    });

    myNewObject.save().then(
      result => {
        res(result);
      },
      error => {
        rej(error);
      },
    );
  });
};

export const getNextTwo = async () => {
  let data = [];
  const Calendar = Parse.Object.extend('Calendar');
  const query = new Parse.Query(Calendar);
  await query.find().then(results => {
    results
      .sort((a, b) => {
        new Date(a.attributes.startTime) - new Date(b.attributes.startTime);
      })
      .map(e => {
        data.push(e);
      });
  });

  return data.slice(0, 2);
};
