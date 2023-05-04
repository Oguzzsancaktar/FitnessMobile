import React from 'react';
import {Text, View} from 'react-native';
import {selectSvg} from '../../utils';
import {ISvgNames} from '../../utils/selectSvg';
import {Colors} from 'react-native/Libraries/NewAppScreen';

interface IProps {
  icon: ISvgNames;
  text: string;
  color?: string;
}
const SportCard: React.FC<IProps> = ({color, text, icon}) => {
  return (
    <View
      style={{
        backgroundColor: color,
        borderRadius: 20,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      {React.createElement(selectSvg(icon))}

      <Text
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          fontSize: 18,
          color: Colors.white,
          fontWeight: '800',
          lineHeight: 35,
          backgroundColor: 'rgba(0,0,0,0.2)',
          marginTop: 10,
          height: 35,
        }}>
        {text}
      </Text>
    </View>
  );
};

export default SportCard;
