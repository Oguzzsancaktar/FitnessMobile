import React from 'react';
import {View, Text} from 'react-native';
import {Colors} from '../../constants';

const CalendarDay = ({text, number, isActive = false}) => {
  return (
    <View
      style={{
        backgroundColor: isActive ? Colors.tenn : Colors.white,
        borderRadius: 5,
        paddingVertical: 10,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
        height: 70,
      }}>
      <Text
        style={{
          fontSize: 13,
          fontWeight: 'bold',
          color: isActive ? Colors.white : Colors.gray,
        }}>
        {text}
      </Text>
      <Text
        style={{
          fontSize: 13,
          fontWeight: 'bold',
          color: isActive ? Colors.white : Colors.gray,
        }}>
        {number}
      </Text>
    </View>
  );
};
const CalendarFilter = () => {
  return (
    <View
      style={{
        backgroundColor: Colors.white,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 100,
        paddingVertical: 20,
        borderRadius: 10,
        shadowColor: Colors.black,
        shadowRadius: 10,
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.1,
      }}>
      <CalendarDay text="Mon" number="07" />
      <CalendarDay text="Tue" number="08" />
      <CalendarDay text="Wed" number="09" />
      <CalendarDay text="Thu" number="10" isActive={true} />
      <CalendarDay text="Fri" number="11" />
      <CalendarDay text="Sat" number="12" />
      <CalendarDay text="Sun" number="13" />
    </View>
  );
};

export default CalendarFilter;
