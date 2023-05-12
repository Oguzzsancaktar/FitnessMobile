import React from 'react';
import {Text, View} from 'react-native';
import {Colors, ESports} from '../constants';
import {ScrollView} from 'react-native-gesture-handler';
import {NotificationItem} from '../componenets';
import {map} from 'lodash';

const NotificationsScreen = () => {
  return (
    <View style={{padding: 30}}>
      <View
        style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        <View
          style={{
            borderRadius: 50,
            height: 20,
            width: 20,
            backgroundColor: Colors.tenn,
            marginRight: 10,
          }}
        />
        <Text
          style={{fontSize: 30, fontWeight: '700', color: Colors.blueZodiac}}>
          Notifications
        </Text>
      </View>

      <ScrollView
        style={{marginVertical: 50, borderRadius: 10, overflow: 'hidden'}}>
        {map(ESports, (sport, index) => (
          <NotificationItem key={index} sport={sport.toLowerCase()} />
        ))}
      </ScrollView>
    </View>
  );
};

export default NotificationsScreen;
