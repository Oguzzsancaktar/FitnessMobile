import React from 'react';
import {Image, SafeAreaView, ScrollView, Text, View} from 'react-native';
import {Colors} from '../constants';
import {selectSvg} from '../utils';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';

const trainerImage = require('../assets/trainer-profile.png');

const ChatDetailScreen = () => {
  return (
    <View
      style={{
        zIndex: 9999999,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',

          backgroundColor: Colors.white,
          paddingVertical: 10,
          paddingHorizontal: 40,
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: Colors.white,
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
          <Text
            style={{
              marginLeft: 15,
              fontSize: 20,
              lineHeight: 19,
              fontWeight: '600',
              color: Colors.blueZodiac,
            }}>
            Sedat Uslu
          </Text>
        </View>
        <View>
          {selectSvg('three-dot', {
            style: {
              color: Colors.priwinkleBlue,
            },
            width: 20,
            height: 20,
          })}
        </View>
      </View>

      <ScrollView />

      <View
        style={{
          height: 110,
          paddingHorizontal: 40,
          paddingTop: 10,
          backgroundColor: Colors.gallery,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
            backgroundColor: Colors.white,
            width: 45,
            height: 40,
            marginRight: 10,
          }}>
          {selectSvg('attach', {
            style: {
              color: Colors.tundora,
            },
          })}
        </TouchableOpacity>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            width: '90%',
            backgroundColor: Colors.white,
            borderRadius: 10,
          }}>
          <SafeAreaView style={{width: '100%'}}>
            {selectSvg('send', {
              style: {
                color: Colors.blueZodiac,
                position: 'absolute',
                right: 20,
                top: 10,
              },
            })}
            <TextInput
              style={{
                height: 40,
                paddingHorizontal: 20,
                color: Colors.blueZodiac,
              }}
              placeholderTextColor={Colors.blueZodiac}
            />
          </SafeAreaView>
        </View>
      </View>
    </View>
  );
};

export default ChatDetailScreen;
