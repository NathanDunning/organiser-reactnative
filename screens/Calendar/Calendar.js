import React, {Component} from 'react';
import {View, Button, StyleSheet, Text} from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {Card} from 'react-native-shadow-cards';
import {getNextTwo} from '../../services/calendar/calendar_service';
import dateFormat from 'dateformat';
import SideMenu from '../../components/SideMenu';

/**
 * Calendar class, this is a visual layer class
 */
class CalendarItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      event: [],
      selectedDate: new Date(),
      isDateTimePickerVisible: false,
    };
  }

  componentDidMount() {
    getNextTwo().then(arr => {
      arr.forEach(arridx => {
        this.setState({event: [...this.state.event, arridx]});
      });
    });
  }

  // Toggle picker on
  showDateTimePicker = () => {
    this.setState({isDateTimePickerVisible: true});
  };

  // Toggle picker off
  hideDateTimePicker = () => {
    this.setState({isDateTimePickerVisible: false});
  };

  // Handle selected date
  handleDatePicked = date => {
    this.hideDateTimePicker();
  };

  render() {
    return (
      <View style={styles.container}>
        <SideMenu navigation={this.props.navigation} />
        <Calendar
          minDate={new Date()}
          // Handler which gets executed on day press. Default = undefined
          onDayPress={day => {
            this.setState({selectedDate: new Date(day.timestamp)});
          }}
          // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
          monthFormat={'MMM yyyy'}
          // Handler which gets executed when visible month changes in calendar. Default = undefined
          onMonthChange={month => {
            console.log('month changed', month);
          }}
          // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
          firstDay={1}
          // Handler which gets executed when press arrow icon left. It receive a callback can go back month
          onPressArrowLeft={substractMonth => substractMonth()}
          // Handler which gets executed when press arrow icon left. It receive a callback can go next month
          onPressArrowRight={addMonth => addMonth()}
          // Marked dates
          markedDates={{}}
        />
        <Button
          style={styles.button}
          title="Add Event"
          onPress={() =>
            this.props.navigation.navigate('AddEvent', {
              selectedDate: this.state.selectedDate,
            })
          }
        />
        <Text style={styles.text}>Upcoming events</Text>

        {this.state.event.map((ev, idx) => {
          return (
            <Card style={{padding: 10, margin: 10}} key={idx}>
              <Text>{ev.attributes.title}</Text>
              <Text>
                {dateFormat(ev.attributes.startTime, 'ddd mmm d yyyy HH:MM')}
              </Text>
            </Card>
          );
        })}
      </View>
    );
  }
}

// Styling for home page
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 0,
  },
  button: {
    backgroundColor: '#4da6ff',
    color: '#fff',
    padding: 50,
    margin: 20,
  },
  text: {
    color: '#000',
    padding: 20,
    paddingTop: 50,
  },
});

export default CalendarItem;
