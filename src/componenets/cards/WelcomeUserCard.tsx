import React from 'react';
import {Text, View, Image} from 'react-native';
import {Colors} from '../../constants';
import {selectSvg} from '../../utils';
import {TouchableOpacity} from 'react-native-gesture-handler';

const trainerImage = require('../../assets/trainer-profile.png');

interface IProps {
  firstLineText: string;
  secondLineText: string;
  onPhotoPress?: () => void;
}

const WelcomeUserCard: React.FC<IProps> = ({
  firstLineText,
  secondLineText,
  onPhotoPress,
}) => {
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
        <TouchableOpacity
          onPress={onPhotoPress}
          style={{
            width: 70,
            height: 70,
            overflow: 'visible',
            position: 'relative',
          }}>
          <View
            style={{
              position: 'absolute',
              zIndex: 1,
              width: 20,
              height: 20,
              backgroundColor: Colors.tenn,
              borderRadius: 50,
              bottom: 0,
              right: 0,
            }}
          />
          <Image
            source={trainerImage}
            style={{
              width: 70,
              height: 70,
              borderColor: Colors.priwinkleBlue,
              borderRadius: 50,
              borderWidth: 3,
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WelcomeUserCard;
