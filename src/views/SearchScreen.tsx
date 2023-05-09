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

const Stack = createStackNavigator();

const MainStack = ({navigation}: any) => (
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
      <TrainerFilter />
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

const SearchScreen = () => {
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
        name="TrainerProfile"
        component={TrainerProfile}
      />
    </Stack.Navigator>
  );
};

export default SearchScreen;
