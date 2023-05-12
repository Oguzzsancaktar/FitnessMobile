import React from 'react';
import {View} from 'react-native';
import {
  StatisticsCard,
  TopSportCard,
  UpcomingTrainingTrainerCard,
  WelcomeUserCard,
} from '../componenets';
import {Colors} from '../constants';
import {createStackNavigator} from '@react-navigation/stack';
import {IScreenProps} from '../models';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {selectSvg} from '../utils';
import NotificationsScreen from './NotificationsScreen';

interface IProps {
  navigation: any;
}

const Stack = createStackNavigator();

interface IStackProps {
  navigation: any;
  sport?: string;
}
const MainStack: React.FC<IStackProps> = ({navigation, sport}) => {
  return (
    <View
      style={{
        paddingTop: 60,
        paddingHorizontal: 25,
        backgroundColor: Colors.white,
        height: '100%',
      }}>
      <WelcomeUserCard
        onPhotoPress={() => navigation.navigate('TrainerNotifications')}
        firstLineText="Welcome"
        secondLineText={'Back,' + 'SAM' + '!'}
      />
      <View style={{paddingVertical: 40}}>
        <UpcomingTrainingTrainerCard />
      </View>

      <View>
        <StatisticsCard />
      </View>

      <View style={{paddingVertical: 30}}>
        <TopSportCard />
      </View>
    </View>
  );
};

interface IProps extends IScreenProps {}

const TrainerMainScreen: React.FC<IProps> = ({navigation, route}) => {
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
        options={{
          headerShown: false,
        }}
        name="TrainerHome"
        component={MainStack}
      />
      <Stack.Screen
        options={{
          headerTitle: '',
          headerTintColor: Colors.blueZodiac,
          headerBackTitleVisible: false,
          headerBackTitle: '',
          headerStyle: {
            borderBottomColor: 'transparent',
            shadowColor: 'transparent',
            backgroundColor: Colors.alabaster,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{marginLeft: 40}}>
              {selectSvg('chevron-left', {
                style: {color: Colors.blueZodiac},
              })}
            </TouchableOpacity>
          ),
        }}
        name="TrainerNotifications"
        component={NotificationsScreen}
      />
    </Stack.Navigator>
  );
};

export default TrainerMainScreen;
