import React from 'react';
import {
  WelcomeUserCard,
  TrainerCard,
  TrainerFilter,
  TrainerSearchbar,
} from '../componenets';
import {ScrollView, View} from 'react-native';
import {Colors} from '../constants';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import TrainerProfile from './TrainerProfile';
import {selectSvg} from '../utils';
import {IScreenProps} from '../models';

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
        paddingHorizontal: 20,
        backgroundColor: Colors.white,
      }}>
      <WelcomeUserCard firstLineText="Trainer" secondLineText={'Search'} />
      <View style={{marginTop: 30}}>
        <TrainerSearchbar />
      </View>

      <View style={{marginVertical: 30, zIndex: 2}}>
        <TrainerFilter sport={sport} />
      </View>
      <ScrollView
        style={{marginBottom: 100, paddingBottom: 100}}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          position: 'relative',
          zIndex: 1,
          flexGrow: 1,
          justifyContent: 'center',
          width: '100%',
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('TrainerProfile')}>
          <TrainerCard />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('TrainerProfile')}>
          <TrainerCard />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('TrainerProfile')}>
          <TrainerCard />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('TrainerProfile')}>
          <TrainerCard />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('TrainerProfile')}>
          <TrainerCard />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('TrainerProfile')}>
          <TrainerCard />
        </TouchableOpacity>
        <View style={{marginBottom: 250, paddingBottom: 100}}>
          <TrainerCard />
        </View>
      </ScrollView>
    </View>
  );
};

interface IProps extends IScreenProps {}

const SearchScreen: React.FC<IProps> = ({route, navigation}) => {
  const sport = route?.params?.sport;

  const CreateMain = () => {
    return <MainStack navigation={navigation} sport={sport} />;
  };
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
        name="Home"
        component={CreateMain}
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
        name="TrainerProfile"
        component={TrainerProfile}
      />
    </Stack.Navigator>
  );
};

export default SearchScreen;
