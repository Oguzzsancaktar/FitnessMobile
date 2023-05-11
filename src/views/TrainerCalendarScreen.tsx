import React from 'react';
import {ScrollView, View} from 'react-native';
import {
  WelcomeUserCard,
  TrainingSessionItem,
  CalendarFilter,
} from '../componenets';
import {Colors, ESports} from '../constants';

import {createStackNavigator} from '@react-navigation/stack';
import TrainingHistoryScreen from './TrainingHistoryScreen';
import TrainingDetailScreen from './TrainingDetailScreen';
import {map} from 'lodash';

const Stack = createStackNavigator();

const MainStack = ({navigation}: any) => (
  <View
    style={{
      paddingTop: 60,
      paddingBottom: 80,
      paddingHorizontal: 25,
      backgroundColor: Colors.alabaster,
      height: '100%',
    }}>
    <WelcomeUserCard
      firstLineText="Trainer Sessions"
      secondLineText={'Calendar'}
    />
    <View style={{paddingVertical: 20}}>
      <CalendarFilter />
    </View>

    <ScrollView
      style={{
        paddingBottom: 80,
        backgroundColor: Colors.alabaster,
        height: '100%',
      }}>
      {map(ESports, (sport, index) => (
        <View style={{marginBottom: 10}}>
          <TrainingSessionItem highlightInfo icon={sport.toLowerCase()} />
        </View>
      ))}
    </ScrollView>
  </View>
);

const TrainerCalendarScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.alabaster,
          borderBottomColor: Colors.alabaster,
          shadowColor: 'transparent',
        },
      }}>
      <Stack.Screen
        options={{headerShown: false, headerTitle: ''}}
        name="Home"
        component={MainStack}
      />
      <Stack.Screen
        options={{
          headerTitle: '',
        }}
        name="TrainingHistory"
        component={TrainingHistoryScreen}
      />

      <Stack.Screen
        options={{
          headerTitle: '',
        }}
        name="TrainingDetail"
        component={TrainingDetailScreen}
      />
    </Stack.Navigator>
  );
};

export default TrainerCalendarScreen;
