import React from 'react';
import {View} from 'react-native';
import {Colors, ESports} from '../constants';
import {RequestAnswerItem, WelcomeUserCard} from '../componenets';
import {ScrollView} from 'react-native-gesture-handler';
import {map} from 'lodash';

const RequestsScreen = () => {
  return (
    <View
      style={{
        paddingTop: 60,
        paddingHorizontal: 25,
        backgroundColor: Colors.alabaster,
        height: '100%',
      }}>
      <WelcomeUserCard
        firstLineText="Incoming"
        secondLineText={'User Requests'}
      />
      <ScrollView style={{paddingVertical: 30}}>
        {map(ESports, (sport, index) => (
          <View key={index} style={{marginBottom: 10}}>
            <RequestAnswerItem sport={sport} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default RequestsScreen;
