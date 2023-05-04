import React from 'react';
import {Text, View} from 'react-native';
import {Colors} from '../../constants';
import SportCard from './SportCard';

const SportListCard = () => {
  return (
    <View>
      <Text
        style={{
          marginBottom: 20,
          fontSize: 20,
          fontWeight: '600',
          letterSpacing: 1,
        }}>
        Start Training Session
      </Text>

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 130,
        }}>
        <View style={{flex: 1}}>
          <SportCard color={Colors.tenn} text="Running" icon="running" />
        </View>

        <View style={{flex: 1, marginHorizontal: 10}}>
          <SportCard
            color={Colors.blueZodiac}
            text="Football"
            icon="football"
          />
        </View>

        <View style={{flex: 1}}>
          <SportCard
            color={Colors.priwinkleBlue}
            text="Fitness"
            icon="fitness"
          />
        </View>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: 10,
          height: 130,
        }}>
        {/* <Image source={bottleIcon} style={{marginRight: 5}} /> */}
        <View style={{flex: 1}}>
          <SportCard
            color={Colors.eastSide}
            text="Basketball"
            icon="basketball"
          />
        </View>

        <View style={{flex: 1, marginHorizontal: 10}}>
          <SportCard color={Colors.zombie} text="Cycling" icon="cycling" />
        </View>

        <View style={{flex: 1}}>
          <SportCard color={Colors.olivine} text="Yoga" icon="yoga" />
        </View>
      </View>
    </View>
  );
};

export default SportListCard;
