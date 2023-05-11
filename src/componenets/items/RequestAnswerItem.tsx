import React from 'react';
import {Text, View} from 'react-native';
import TrainingSessionItem from './TrainingSessionItem';
import {Colors} from '../../constants';

const RequestAnswerItem = ({sport}: any) => {
  console.log('sport', sport);
  return (
    <View style={{backgroundColor: Colors.white, borderRadius: 10}}>
      <TrainingSessionItem icon={sport?.toLowerCase()} />
      <View
        style={{
          padding: 10,
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
            flex: 2,
            marginRight: 10,
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 2,
              backgroundColor: Colors.blueZodiac,
              borderRadius: 10,
              width: '100%',
              height: 40,
            }}>
            <Text
              style={{fontSize: 18, fontWeight: '700', color: Colors.white}}>
              Chat
            </Text>
          </View>
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
              borderColor: Colors.tenn,
              backgroundColor: Colors.tenn,
              borderRadius: 10,

              width: '100%',
              height: 40,
            }}>
            <Text
              style={{fontSize: 18, fontWeight: '700', color: Colors.white}}>
              Decline
            </Text>
          </View>
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
              borderColor: Colors.olivine,
              backgroundColor: Colors.olivine,
              borderRadius: 10,
              width: '100%',
              height: 40,
            }}>
            <Text
              style={{fontSize: 18, fontWeight: '700', color: Colors.white}}>
              Accept
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default RequestAnswerItem;
