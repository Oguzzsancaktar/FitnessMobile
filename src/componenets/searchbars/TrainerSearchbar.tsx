import React from 'react';
import {Image, SafeAreaView, Text, TextInput, View} from 'react-native';
import {Colors} from '../../constants';
import icon from '../../assets/icons/search-icon.png';

const TrainerSearchbar = () => {
  return (
    <View style={{paddingVertical: 30}}>
      <Text
        style={{
          marginBottom: 20,
          fontSize: 20,
          fontWeight: '600',
          letterSpacing: 1,
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
          <Image
            source={icon}
            style={{position: 'absolute', right: 20, top: 15}}
          />
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
