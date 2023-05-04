import React from 'react';
import {Button, Text, View} from 'react-native';
import {Colors} from '../../constants';

interface IProps {
  onClick: () => void;
}
const FindTrainerCard: React.FC<IProps> = ({onClick}) => {
  return (
    <View>
      <Text
        style={{
          marginBottom: 10,
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
        <Button
          title="Find Personal Trainer"
          color={Colors.white}
          onPress={onClick}
        />
      </View>
    </View>
  );
};

export default FindTrainerCard;
