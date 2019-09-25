import React, {Component} from 'react';
import {View, Button, StyleSheet, Text, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Card} from 'react-native-shadow-cards';
import SideMenu from '../../components/SideMenu';

/**
 * This is the todo class
 * It is a visual layer
 */
class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
      input: '',
    };
  }

  // Handler for adding task
  onAddHandler = () => {
    this.setState({tasks: [...this.state.tasks, this.state.input]});
    this.setState({input: ''});
  };

  // Handler for removing task
  onRemoveItem = idx => {
    this.setState({tasks: this.state.tasks.splice(idx, 1)});
  };

  render() {
    return (
      <View style={styles.container}>
        <SideMenu navigation={this.props.navigation} />
        <Text style={styles.text}>To-Do</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            onChangeText={text => this.setState({input: text})}
            value={this.state.input}
            autoCorrect={false}
            placeholder="Add new task"
            placeholderTextColor="rgba(0,0,0,0.7)"
          />
          <Icon
            style={styles.icon}
            name="ios-add"
            color="#000000"
            size={40}
            onPress={() => this.onAddHandler()}
          />
        </View>
        <View style={styles.taskListContainer}>
          {this.state.tasks.map((task, idx) => {
            return (
              <Card
                style={styles.card}
                key={idx}
                onPress={() => this.onRemoveItem(idx)}>
                <Text style={styles.cardText}>{task}</Text>
              </Card>
            );
          })}
        </View>
      </View>
    );
  }
}

// Styling for home page
const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingTop: 0,
  },
  button: {
    padding: 50,
    margin: 20,
  },
  taskListContainer: {
    paddingTop: 15,
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#000',
    paddingBottom: 20,
  },
  cardText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#000',
    padding: 10,
  },
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    margin: 5,
  },
  inputContainer: {
    marginLeft: 25,
    flexDirection: 'row',
    width: '75%',
  },
  icon: {
    paddingLeft: 20,
  },
  textInput: {
    textAlign: 'center',
    height: 40,
    width: '100%',
    backgroundColor: 'rgba(225,225,225,0.4)',
    padding: 10,
    color: '#2980b6',
  },
});

export default Todo;
