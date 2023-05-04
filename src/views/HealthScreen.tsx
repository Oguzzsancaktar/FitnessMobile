import React from 'react';
import {Button, ScrollView, View} from 'react-native';
import {
  WelcomeUserCard,
  PersonalInformationsCard,
  MetricsCard,
  LastTrainingCard,
  TrainingResultCard,
} from '../componenets';
import {Colors} from '../constants';

const HealthScreen = () => {
  return (
    <ScrollView
      style={{
        paddingTop: 60,
        paddingBottom: 80,
        paddingHorizontal: 25,
        backgroundColor: Colors.alabaster,
        height: '100%',
      }}>
      <WelcomeUserCard
        firstLineText="Your Health"
        secondLineText={'& Statistics'}
      />
      <View style={{paddingVertical: 20}}>
        <PersonalInformationsCard />
      </View>
      <View style={{paddingVertical: 20}}>
        <MetricsCard />
      </View>
      <LastTrainingCard />
      <View style={{marginTop: 30}}>
        <TrainingResultCard />
      </View>
      <View
        style={{
          backgroundColor: Colors.tenn,
          borderRadius: 30,
          height: 55,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 200,
        }}>
        <Button
          title="See all training sessions"
          color={Colors.white}
          // onPress={onClick}
        />
      </View>
    </ScrollView>
  );
};

export default HealthScreen;
