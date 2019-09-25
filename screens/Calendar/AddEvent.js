import React, {Component} from 'react';
import {
  View,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import dateFormat from 'dateformat';
import {addEvent} from '../../services/calendar/calendar_service';

/**
 * THis is a business layer class for adding a new event to the calendar
 * Handles the application logic
 */
export default class CalendarItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      location: '',
      startDate: this.props.navigation.getParam('selectedDate', new Date()),
      endDate: this.props.navigation.getParam('selectedDate', new Date()),
      isStartPicker: false,
      isEndPicker: false,
    };
  }

  // Show picker
  showStartDateTimePicker = () => {
    this.setState({isStartPicker: true});
  };

  // Show picker
  showEndDateTimePicker = () => {
    this.setState({isEndPicker: true});
  };

  // HIde picker
  hideStartDateTimePicker = () => {
    this.setState({isStartPicker: false});
  };

  // HIde picker
  hideEndDateTimePicker = () => {
    this.setState({isEndPicker: false});
  };

  // Picker handler
  handleStartDatePicked = date => {
    this.setState({startDate: new Date(date)});
    this.hideStartDateTimePicker();
  };

  handleEndDatePicked = date => {
    this.setState({endDate: new Date(date)});
    this.hideEndDateTimePicker();
  };

  submitEvent = (title, location, start, end) => {
    addEvent(title, location, start, end)
      .then(info => {
        console.log(info);
        this.props.navigation.navigate('Calendar');
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={text => this.setState({title: text})}
            value={this.state.title}
            returnKeyType="next"
            placeholder="Title"
            placeholderTextColor="rgba(0,0,0,0.7)"
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={input => this.setState({location: input})}
            value={this.state.location}
            placeholder="Location"
            placeholderTextColor="rgba(0,0,0,0.7)"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.text}>Start Date:</Text>
          <View style={styles.buttonContainer}>
            <Button
              style={styles.buttonContainer}
              title={dateFormat(this.state.startDate, 'ddd mmm d yyyy HH:MM')}
              onPress={this.showStartDateTimePicker}
            />
          </View>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.text}>End Date:</Text>
          <View style={styles.buttonContainer}>
            <Button
              style={styles.buttonContainer}
              title={dateFormat(this.state.endDate, 'ddd mmm d yyyy HH:MM')}
              onPress={this.showEndDateTimePicker}
            />
          </View>
        </View>

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() =>
            this.submitEvent(
              this.state.title,
              this.state.location,
              this.state.startDate.toString(),
              this.state.endDate.toString(),
            )
          }>
          <Text style={styles.buttonText}>ADD</Text>
        </TouchableOpacity>

        <DateTimePicker
          mode="datetime"
          isVisible={this.state.isStartPicker}
          onConfirm={this.handleStartDatePicked}
          onCancel={this.hideStartDateTimePicker}
        />
        <DateTimePicker
          mode="datetime"
          isVisible={this.state.isEndPicker}
          onConfirm={this.handleEndDatePicked}
          onCancel={this.hideEndDateTimePicker}
        />
      </View>
    );
  }
}

// Style sheet here
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 30,
    width: '100%',
  },
  inputContainer: {
    backgroundColor: '#99ccff',
    padding: 20,
    margin: 5,
    width: '100%',
  },
  buttonContainer: {
    color: '#fff',
    backgroundColor: '#99ccff',
    paddingVertical: 15,
  },
  text: {
    color: '#000000',
    textAlign: 'center',
    fontWeight: '700',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
  },
});
