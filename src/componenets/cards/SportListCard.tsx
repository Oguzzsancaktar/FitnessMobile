import React from 'react';
import {Button, Image, Text, View} from 'react-native';
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
        }}>
        {/* <Image source={bottleIcon} style={{marginRight: 5}} /> */}
        <SportCard color={Colors.tenn} />
        <SportCard color={Colors.blueZodiac} />
        <SportCard color={Colors.priwinkleBlue} />
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: 10,
        }}>
        {/* <Image source={bottleIcon} style={{marginRight: 5}} /> */}
        <SportCard color={Colors.eastSide} />
        <SportCard color={Colors.zombie} />
        <SportCard color={Colors.olivine} />
      </View>
    </View>
  );
};

export default SportListCard;
