import React from 'react';
import {View, StyleSheet} from 'react-native';
import {NativeRouter, Switch, Route} from 'react-router-native';
import Login from './screens/Login/Login';
import Register from './screens/Register/Register';

const App = () => {
  return (
    <NativeRouter>
      <View style={styles.main}>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </View>
    </NativeRouter>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});

export default App;
