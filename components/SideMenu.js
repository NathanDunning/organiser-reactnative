import React from 'react';
import {View, Button, StyleSheet, Text} from 'react-native';

// Render the menu bar
const SideMenu = props => {
  return (
    <View style={styles.container}>
      <Text
        style={styles.text}
        onPress={() => props.navigation.replace('Todo')}>
        Todo
      </Text>
      <Text
        style={styles.text}
        onPress={() => props.navigation.replace('Calendar')}>
        Calendar
      </Text>
      <Text
        style={styles.text}
        onPress={() => props.navigation.replace('News')}>
        News
      </Text>
    </View>
  );
};

// Create the style sheet
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: '100%',
    paddingBottom: 15,
  },
  text: {
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#000',
    padding: 5,
  },
});

export default SideMenu;
