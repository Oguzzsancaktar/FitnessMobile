import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import InfoItem from '../items/InfoItem';
import {Colors} from '../../constants';
import {TrainingSessionItem} from '../items';

const LastTrainingCard = () => {
  return (
    <View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          width: 'auto',
          alignSelf: 'baseline',
          marginBottom: 10,
        }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '600',
            letterSpacing: 1,
          }}>
          Last trainings session
        </Text>
        <Text
          style={{
            fontSize: 12,
            lineHeight: 25,
            fontWeight: '300',
            marginLeft: 4,
            marginTop: 5,
          }}>
          with
        </Text>
      </View>

      <TrainingSessionItem />
    </View>
  );
};

export default LastTrainingCard;
