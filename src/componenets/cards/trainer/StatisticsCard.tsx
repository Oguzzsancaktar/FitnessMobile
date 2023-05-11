import React from 'react';
import {View, Text} from 'react-native';
import InfoItem from '../../items/InfoItem';
import {Colors} from '../../../constants';

const StatisticsCard = () => {
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
          Statistics
        </Text>
        <Text
          style={{
            fontSize: 12,
            lineHeight: 25,
            fontWeight: '300',
            marginLeft: 4,
            marginTop: 5,
          }}>
          last month
        </Text>
      </View>

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View style={{width: 120, height: 145, marginRight: 10}}>
          <InfoItem
            icon="burn"
            text="+4"
            bottomText="New Clients"
            color={Colors.tenn}
          />
        </View>
        <View style={{width: 120, height: 145, marginRight: 10}}>
          <InfoItem
            icon="running"
            text="80"
            bottomText="Completed Trainings"
            color={Colors.blueZodiac}
          />
        </View>
        <View style={{width: 120, height: 145, marginRight: 10}}>
          <InfoItem
            icon="profile"
            text="+37"
            bottomText="Gained Followers"
            color={Colors.priwinkleBlue}
          />
        </View>
      </View>
    </View>
  );
};

export default StatisticsCard;
