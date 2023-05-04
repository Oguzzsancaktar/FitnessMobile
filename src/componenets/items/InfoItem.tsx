import React from 'react';
import {Text, View} from 'react-native';
import {selectSvg} from '../../utils';
import {ISvgNames} from '../../utils/selectSvg';
import {Colors} from 'react-native/Libraries/NewAppScreen';

interface IProps {
  icon: ISvgNames;
  text: string;
  color?: string;
  bottomText?: string;
}
const InfoItem: React.FC<IProps> = ({color, text, icon, bottomText}) => {
  return (
    <View
      style={{
        backgroundColor: color,
        borderRadius: 20,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      {selectSvg(icon, {style: {color: Colors.white}})}

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
      {bottomText && (
        <Text
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            fontSize: 12,
            color: Colors.white,
            fontWeight: '400',
            lineHeight: 13,
            marginTop: 10,
            maxWidth: 80,
          }}>
          {bottomText}
        </Text>
      )}
    </View>
  );
};

export default InfoItem;
