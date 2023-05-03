import React from 'react';
import {Button, Text, View} from 'react-native';
import {Colors} from '../../constants';

const FindTrainerCard = () => {
  return (
    <View>
      <Text
        style={{
          marginBottom: 20,
          fontSize: 20,
          fontWeight: '600',
          letterSpacing: 1,
        }}>
        Trainer Search
      </Text>
      <View
        style={{
          backgroundColor: Colors.tenn,
          borderRadius: 30,
          height: 55,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Button title="Find Personal Trainer" color={'#fff'} />
      </View>
    </View>
  );
};

export default FindTrainerCard;
