import React from 'react';
import {Text, View} from 'react-native';
import {Colors} from '../../constants';

const PersonalInformationsCard = () => {
  return (
    <View>
      <Text
        style={{
          fontSize: 20,
          fontWeight: '600',
          letterSpacing: 1,
          marginBottom: 10,
        }}>
        Personal Information
      </Text>

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
            marginRight: 10,
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 2,
              borderColor: Colors.tundora,
              borderRadius: 20,
              width: '100%',
              height: 40,
            }}>
            <Text
              style={{fontSize: 18, fontWeight: '700', color: Colors.tundora}}>
              1.80m
            </Text>
          </View>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '400',
              color: Colors.tundora,
              marginTop: 5,
            }}>
            Height
          </Text>
        </View>

        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
            marginRight: 10,
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 2,
              borderColor: Colors.tundora,
              borderRadius: 20,
              width: '100%',
              height: 40,
            }}>
            <Text
              style={{fontSize: 18, fontWeight: '700', color: Colors.tundora}}>
              76kg
            </Text>
          </View>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '400',
              color: Colors.tundora,
              marginTop: 5,
            }}>
            Weight
          </Text>
        </View>

        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 2,
              borderColor: Colors.tundora,
              borderRadius: 20,
              width: '100%',
              height: 40,
            }}>
            <Text
              style={{fontSize: 18, fontWeight: '700', color: Colors.tundora}}>
              33
            </Text>
          </View>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '400',
              color: Colors.tundora,
              marginTop: 5,
            }}>
            Age
          </Text>
        </View>
      </View>
    </View>
  );
};

export default PersonalInformationsCard;
