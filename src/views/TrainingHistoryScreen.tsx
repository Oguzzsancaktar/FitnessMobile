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
          <TrainingSessionItem
            highlightInfo={true}
            date="Tuesday, 02/05/2023 | 15:30"
            icon="running"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('TrainingDetail')}
          style={{marginVertical: 10}}>
          <TrainingSessionItem
            highlightInfo={true}
            date="Tuesday, 02/05/2023 | 15:30"
            icon="cycling"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('TrainingDetail')}
          style={{marginVertical: 10}}>
          <TrainingSessionItem
            highlightInfo={true}
            date="Tuesday, 02/05/2023 | 15:30"
            icon="yoga"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('TrainingDetail')}
          style={{marginVertical: 10}}>
          <TrainingSessionItem
            highlightInfo={true}
            date="Tuesday, 02/05/2023 | 15:30"
            icon="basketball"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('TrainingDetail')}
          style={{marginVertical: 10}}>
          <TrainingSessionItem
            highlightInfo={true}
            date="Tuesday, 02/05/2023 | 15:30"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('TrainingDetail')}
          style={{marginVertical: 10}}>
          <TrainingSessionItem
            highlightInfo={true}
            date="Tuesday, 02/05/2023 | 15:30"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('TrainingDetail')}
          style={{marginVertical: 10}}>
          <TrainingSessionItem
            highlightInfo={true}
            date="Tuesday, 02/05/2023 | 15:30"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('TrainingDetail')}
          style={{marginVertical: 10}}>
          <TrainingSessionItem
            highlightInfo={true}
            date="Tuesday, 02/05/2023 | 15:30"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('TrainingDetail')}
          style={{marginVertical: 10}}>
          <TrainingSessionItem
            highlightInfo={true}
            date="Tuesday, 02/05/2023 | 15:30"
          />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default TrainingHistoryScreen;
