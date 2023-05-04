import React from 'react';
import {Colors} from '../constants';
import {Text, View} from 'react-native';
import {TrainingResultCard} from '../componenets';
import {TrainingSessionItem} from '../componenets/items';

const TrainingDetailScreen = () => {
  return (
    <View
      style={{
        paddingTop: 20,
        paddingHorizontal: 25,
        backgroundColor: Colors.alabaster,
        height: '100%',
      }}>
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

      <View style={{marginTop: 30}}>
        <TrainingResultCard />
      </View>
    </View>
  );
};

export default TrainingDetailScreen;
