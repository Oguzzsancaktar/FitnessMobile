import React from 'react';
import {Text, View} from 'react-native';
import {Colors} from '../../constants';
import {selectSvg} from '../../utils';

const TrainingResultCard = () => {
  return (
    <View>
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
              marginBottom: 10,
            }}>
            {selectSvg('running', {
              style: {color: Colors.blueZodiac},
              height: 23,
            })}
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 20,
              backgroundColor: Colors.turbo,
              width: '100%',
              height: 40,
            }}>
            <Text
              style={{fontSize: 18, fontWeight: '700', color: Colors.tundora}}>
              10km/h
            </Text>
          </View>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '400',
              color: Colors.tundora,
              marginTop: 5,
            }}>
            Highest Speed
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
              marginBottom: 10,
            }}>
            {selectSvg('burn', {style: {color: Colors.blueZodiac}, height: 23})}
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: Colors.turbo,
              borderRadius: 20,
              width: '100%',
              height: 40,
            }}>
            <Text
              style={{fontSize: 18, fontWeight: '700', color: Colors.tundora}}>
              355kCal
            </Text>
          </View>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '400',
              color: Colors.tundora,
              marginTop: 5,
            }}>
            Calories Burned
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
              marginBottom: 10,
            }}>
            {selectSvg('timer', {
              style: {color: Colors.blueZodiac},
              height: 23,
            })}
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: Colors.turbo,
              borderRadius: 20,
              width: '100%',
              height: 40,
            }}>
            <Text
              style={{fontSize: 18, fontWeight: '700', color: Colors.tundora}}>
              01:45:40
            </Text>
          </View>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '400',
              color: Colors.tundora,
              marginTop: 5,
            }}>
            Duration
          </Text>
        </View>
      </View>

      <View style={{paddingVertical: 40}}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View>
            {selectSvg('arrow-up', {
              style: {color: Colors.priwinkleBlue},
              height: 50,
              width: 50,
            })}
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'flex-end',
              marginLeft: 10,
            }}>
            <Text
              style={{
                fontSize: 60,
                color: Colors.blueZodiac,
                fontWeight: '800',
              }}>
              13.8
            </Text>
            <Text
              style={{
                fontSize: 30,
                color: Colors.blueZodiac,
                fontWeight: '800',
                marginBottom: 10,
              }}>
              km
            </Text>
          </View>
        </View>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 20,
            color: Colors.priwinkleBlue,
            fontWeight: '400',
            marginTop: 20,
          }}>
          Distance
        </Text>
      </View>
    </View>
  );
};

export default TrainingResultCard;
