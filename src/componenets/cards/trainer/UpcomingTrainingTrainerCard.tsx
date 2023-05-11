import React from 'react';
import {View, Text} from 'react-native';

import {TrainingSessionItem} from '../../items';

const UpcomingTrainingTrainerCard = () => {
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
          Upcoming training session
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

      <TrainingSessionItem bordered={true} highlightInfo />
    </View>
  );
};

export default UpcomingTrainingTrainerCard;
