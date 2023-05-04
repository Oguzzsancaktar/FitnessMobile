import React from 'react';
import {Text, View, Image} from 'react-native';
import {Colors} from '../../constants';
import {selectSvg} from '../../utils';

const trainerImage = require('../../assets/trainer-profile.png');

interface IProps {
  firstLineText: string;
  secondLineText: string;
}

const WelcomeUserCard: React.FC<IProps> = ({firstLineText, secondLineText}) => {
  return (
    <View>
      {selectSvg('logo', {
        width: 45,
        height: 45,
        marginBottom: 20,
      })}
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{width: 250}}>
          <Text
            style={{
              fontSize: 30,
              lineHeight: 29,
              fontWeight: '700',
              letterSpacing: 1,
              textTransform: 'uppercase',
            }}>
            {firstLineText}
          </Text>
          <Text
            style={{
              fontSize: 30,
              lineHeight: 29,
              fontWeight: '700',
              letterSpacing: 1,
              textTransform: 'uppercase',
            }}>
            {secondLineText}
          </Text>
        </View>
        <View
          style={{
            width: 70,
            height: 70,
            borderRadius: 50,
            overflow: 'hidden',
            borderStyle: 'solid',
            borderWidth: 3,
            borderColor: Colors.priwinkleBlue,
          }}>
          <Image source={trainerImage} style={{width: 70, height: 70}} />
        </View>
      </View>
    </View>
  );
};

export default WelcomeUserCard;
