import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import InfoItem from '../items/InfoItem';
import {Colors} from '../../constants';

const MetricsCard = () => {
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
          Metrics
        </Text>
        <Text
          style={{
            fontSize: 12,
            lineHeight: 25,
            fontWeight: '300',
            marginLeft: 4,
            marginTop: 5,
          }}>
          last 3 days
        </Text>
      </View>

      <ScrollView horizontal={true}>
        <View style={{width: 100, height: 145, marginRight: 10}}>
          <InfoItem
            icon="burn"
            text="500cal"
            bottomText="Calories Burned"
            color={Colors.tenn}
          />
        </View>
        <View style={{width: 100, height: 145, marginRight: 10}}>
          <InfoItem
            icon="health"
            text="90bpm"
            bottomText="Avg. Heart Rate"
            color={Colors.blueZodiac}
          />
        </View>
        <View style={{width: 100, height: 145, marginRight: 10}}>
          <InfoItem
            icon="watch"
            text="120/80"
            bottomText="Avg. Blood Pressure"
            color={Colors.priwinkleBlue}
          />
        </View>

        <View style={{width: 100, height: 145, marginRight: 10}}>
          <InfoItem
            icon="basketball"
            text="500cal"
            bottomText="Calories Burned"
            color={Colors.turbo}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default MetricsCard;
