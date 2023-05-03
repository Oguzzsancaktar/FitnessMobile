import React from 'react';
import {Text, View, Image} from 'react-native';
import {Colors} from '../../constants';

const trainerImage = require('../../assets/trainer-profile.png');
const logo = require('../../assets/logo.png');

const WelcomeUserCard = () => {
  return (
    <View>
      <Image source={logo} style={{width: 60, height: 60}} />
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{width: 260}}>
          <Text style={{fontSize: 35, fontWeight: '700', letterSpacing: 3}}>
            Welcome{' '}
          </Text>
          <Text style={{fontSize: 35, fontWeight: '700', letterSpacing: 3}}>
            Back,Sam
          </Text>
        </View>
        <View
          style={{
            width: 80,
            borderRadius: 50,
            overflow: 'hidden',
            borderStyle: 'solid',
            borderWidth: 2,
            borderColor: Colors.blueZodiac,
          }}>
          <Image source={trainerImage} style={{width: 80, height: 80}} />
        </View>
      </View>
    </View>
  );
};

export default WelcomeUserCard;
