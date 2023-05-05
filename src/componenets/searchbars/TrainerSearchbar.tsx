import React from 'react';
import {SafeAreaView, Text, TextInput, View} from 'react-native';
import {Colors} from '../../constants';
import {selectSvg} from '../../utils';

const TrainerSearchbar = () => {
  return (
    <View>
      <Text
        style={{
          marginBottom: 20,
          fontSize: 20,
          lineHeight: 19,
          fontWeight: '600',
          letterSpacing: 1,
          maxWidth: 260,
        }}>
        Find the best trainers in your area
      </Text>

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <SafeAreaView style={{width: '100%'}}>
          {selectSvg('search', {
            style: {
              color: Colors.blueZodiac,
              position: 'absolute',
              right: 20,
              top: 15,
            },
          })}
          <TextInput
            style={{
              borderWidth: 2,
              borderColor: Colors.blueZodiac,
              borderRadius: 30,
              width: '100%',
              height: 50,
              paddingHorizontal: 20,
              color: Colors.blueZodiac,
            }}
            placeholderTextColor={Colors.blueZodiac}
            placeholder="Search name or sports field"
          />
        </SafeAreaView>
      </View>
    </View>
  );
};

export default TrainerSearchbar;
