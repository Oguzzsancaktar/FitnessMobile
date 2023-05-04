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

import {createStackNavigator} from '@react-navigation/stack';
import TrainingHistoryScreen from './TrainingHistoryScreen';
import TrainingDetailScreen from './TrainingDetailScreen';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Stack = createStackNavigator();

const MainStack = ({navigation}: any) => (
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
    <TouchableOpacity onPress={() => navigation.navigate('TrainingDetail')}>
      <LastTrainingCard />
    </TouchableOpacity>
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
        onPress={() => navigation.navigate('TrainingHistory')}
      />
    </View>
  </ScrollView>
);

const HealthScreen = () => {
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

export default HealthScreen;
