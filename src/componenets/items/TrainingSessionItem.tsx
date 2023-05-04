import React from 'react';
import {Text, View, Image} from 'react-native';
import {Colors} from '../../constants';
import {selectSvg} from '../../utils';

const trainerImage = require('../../assets/trainer-profile.png');

const TrainingSessionItem = () => {
  return (
    <View
      style={{
        backgroundColor: Colors.white,
        padding: 10,
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <Image source={trainerImage} style={{width: 70, height: 70}} />
      <View style={{width: 220}}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            lineHeight: 20,
            color: Colors.blueZodiac,
          }}>
          Simmon Adams
        </Text>
        <Text
          style={{
            fontSize: 13,
            fontWeight: '400',
            lineHeight: 16,
            color: Colors.xanadu,
          }}>
          Running Session
        </Text>
        <Text
          style={{
            fontSize: 13,
            fontWeight: '400',
            lineHeight: 16,
            color: Colors.xanadu,
          }}>
          Tuesday, 02/05/2023
        </Text>
      </View>

      <View style={{width: 40}}>
        {selectSvg('running', {style: {color: Colors.tenn}})}
      </View>
    </View>
  );
};

export default TrainingSessionItem;
