import React from 'react';
import {Colors} from '../constants';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import {WelcomeUserCard} from '../componenets';
import {TrainingSessionItem} from '../componenets/items';

const TrainingHistoryScreen = ({navigation}: any) => {
  return (
    <View
      style={{
        paddingTop: 20,
        paddingHorizontal: 25,
        backgroundColor: Colors.alabaster,
        height: '100%',
      }}>
      <WelcomeUserCard
        firstLineText="Your Training"
        secondLineText={'Sessions'}
      />
      <ScrollView style={{marginBottom: 80}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('TrainingDetail')}
          style={{marginVertical: 10}}>
          <TrainingSessionItem />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('TrainingDetail')}
          style={{marginVertical: 10}}>
          <TrainingSessionItem />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('TrainingDetail')}
          style={{marginVertical: 10}}>
          <TrainingSessionItem />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('TrainingDetail')}
          style={{marginVertical: 10}}>
          <TrainingSessionItem />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('TrainingDetail')}
          style={{marginVertical: 10}}>
          <TrainingSessionItem />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('TrainingDetail')}
          style={{marginVertical: 10}}>
          <TrainingSessionItem />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('TrainingDetail')}
          style={{marginVertical: 10}}>
          <TrainingSessionItem />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('TrainingDetail')}
          style={{marginVertical: 10}}>
          <TrainingSessionItem />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('TrainingDetail')}
          style={{marginVertical: 10}}>
          <TrainingSessionItem />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default TrainingHistoryScreen;
