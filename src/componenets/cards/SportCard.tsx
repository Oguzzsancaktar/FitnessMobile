import React from 'react';
import {Image, Text, View} from 'react-native';

import icon from '../../assets/icons/bottle.png';

interface IProps {
  color?: string;
}
const SportCard: React.FC<IProps> = ({color}) => {
  return (
    <View
      style={{
        backgroundColor: color,
        borderRadius: 10,
        width: '32%',
        height: 120,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image source={icon} />
      <Text
        style={{
          width: '100%',
          textAlign: 'center',
          fontSize: 20,
          color: 'white',
          fontWeight: '700',
          backgroundColor: 'rgba(0,0,0,0.2)',
          paddingVertical: 10,
          marginTop: 10,
        }}>
        Runnind
      </Text>
    </View>
  );
};

export default SportCard;
