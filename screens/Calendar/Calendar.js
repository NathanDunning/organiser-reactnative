import React from 'react';
import {View, Button, StyleSheet} from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

const CalendarItem = ({history}) => {
  const [selectedDay, changeSelectedDay] = React.useState('');
  const [selectedMonth, changeSelectedMonth] = React.useState('');
  const [selectedYear, changeSelectedYear] = React.useState('');
  return (
    <View>
      <Calendar
        minDate={new Date()}
        // Handler which gets executed on day press. Default = undefined
        onDayPress={day => {
          console.log('selected day', day);
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
        markedDates={{
          '2019-09-23': {selected: true, marked: true, selectedColor: 'blue'},
          '2019-09-25': {marked: true},
        }}
      />
      <Button
        style={styles.button}
        title="Add Event"
        onPress={() => history.push('/addEvent')}
      />
    </View>
  );
};

// Styling for home page
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 80,
  },
  button: {
    padding: 50,
    margin: 20,
  },
});

export default CalendarItem;
