import React from 'react';
import {Text, View, Image} from 'react-native';
import {Colors, SportColors} from '../../constants';
import {selectSvg} from '../../utils';
import {ISvgNames} from '../../utils/selectSvg';

const trainerImage = require('../../assets/trainer-profile.png');

interface IProps {
  bordered?: boolean;
  highlightInfo?: boolean;
  date?: string;
  icon?: ISvgNames;
  showRightArrow?: boolean;
}

const TrainingSessionItem: React.FC<IProps> = ({
  bordered = false,
  highlightInfo = false,
  date = 'Tuesday, 02/05/2023',
  icon = 'running',
  showRightArrow = true,
}) => {
  return (
    <View
      style={{
        borderColor: Colors.priwinkleBlue,
        borderWidth: bordered ? 1 : 0,
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
            fontWeight: highlightInfo ? '800' : '400',
            lineHeight: 16,
            color: highlightInfo ? Colors.tenn : Colors.xanadu,
          }}>
          {date}
        </Text>
      </View>

      <View style={{width: 40}}>
        {selectSvg(icon, {style: {color: SportColors[icon]}})}
      </View>

      {showRightArrow && (
        <View style={{width: 10}}>
          {selectSvg('chevron-right', {style: {color: Colors.blueZodiac}})}
        </View>
      )}
    </View>
  );
};

export default TrainingSessionItem;
