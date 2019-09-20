import React from 'react';
import {View, StyleSheet} from 'react-native';
import Login from './screens/Login/Login';

const App = () => {
  return (
    <View style={styles.main}>
      <Login />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});

export default App;
