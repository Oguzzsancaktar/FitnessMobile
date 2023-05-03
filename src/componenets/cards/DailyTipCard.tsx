import React from 'react';
import {Button, Image, Text, View} from 'react-native';
import {Colors} from '../../constants';

import bottleIcon from '../../assets/icons/bottle.png';

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
        Daily Nutrition Tips
      </Text>

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image source={bottleIcon} style={{marginRight: 5}} />
        <Text>Did you start your day with 2 cups of water?</Text>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          marginTop: 20,
          justifyContent: 'center',
        }}>
        <View
          style={{
            borderWidth: 2,
            borderColor: Colors.tundora,
            borderRadius: 20,
            width: 100,
            marginRight: 10,
          }}>
          <Button title="Yes" color={Colors.tundora} />
        </View>

        <View
          style={{
            borderWidth: 2,
            borderColor: Colors.priwinkleBlue,
            borderRadius: 20,
            width: 100,
            marginRight: 10,
          }}>
          <Button title="No" color={Colors.priwinkleBlue} />
        </View>
      </View>
    </View>
  );
};

export default FindTrainerCard;
