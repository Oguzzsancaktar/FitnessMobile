import React from 'react';
import {Image, Text, View} from 'react-native';
import {selectSvg} from '../../utils';
import {Colors, SportColors} from '../../constants';

const trainerImage = require('../../assets/trainer-profile.png');

interface IProps {
  sport: string;
}
const ConversationItem: React.FC<IProps> = ({sport}) => {
  return (
    <View
      style={{
        backgroundColor: Colors.white,
        borderBottomColor: Colors.priwinkleBlue,
        borderBottomWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <View style={{width: 40}}>
        <Image
          source={trainerImage}
          style={{
            width: 50,
            height: 50,
            borderColor: Colors.priwinkleBlue,
            borderRadius: 10,
            borderWidth: 3,
          }}
        />
      </View>
      <View style={{maxWidth: 200}}>
        <Text
          style={{
            fontSize: 14,
            lineHeight: 16,
            color: Colors.tundora,
            fontWeight: '800',
          }}>
          You received a new user request.
        </Text>
        <Text
          style={{
            fontSize: 12,
            lineHeight: 15,
            color: Colors.xanadu,
            fontWeight: '300',
          }}>
          From Sedat Uslu
        </Text>
      </View>

      <View style={{width: 25}}>
        {selectSvg(sport, {
          style: {color: SportColors[sport]},
          width: 25,
          height: 25,
        })}
      </View>

      <View
        style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        <Text
          style={{
            fontSize: 12,
            lineHeight: 15,
            color: Colors.priwinkleBlue,
            fontWeight: '300',
          }}>
          Now
        </Text>
        {selectSvg('chevron-right', {
          style: {color: Colors.priwinkleBlue, marginLeft: 5},
          width: 10,
          height: 10,
        })}
      </View>
    </View>
  );
};

export default ConversationItem;
