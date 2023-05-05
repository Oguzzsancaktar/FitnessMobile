import 'react-native-gesture-handler';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {HealthScreen, MainScreen, SearchScreen} from './src';
import {View} from 'react-native';
import {Colors} from './src/constants';

import {selectSvg} from './src/utils';
import {ISvgNames} from './src/utils/selectSvg';
import React from 'react';
const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarActiveTintColor: Colors.blueZodiac,
          tabBarInactiveTintColor: Colors.priwinkleBlue,
          tabBarActiveBackgroundColor: 'transparent',
          // tabBarInactiveBackgroundColor: 'green',
          tabBarShowLabel: false,
          tabBarLabelPosition: 'beside-icon',
          tabBarAllowFontScaling: true,
          tabBarIconStyle: {
            width: 30,
            height: 30,
          },
          tabBarStyle: {
            shadowColor: '#000000',
            shadowOffset: {
              width: 0,
              height: 0,
            },
            shadowOpacity: 0.4,
            shadowRadius: 10,
            position: 'absolute',
            bottom: 0,
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            backgroundColor: Colors.white,
            // borderTopWidth: StyleSheet.hairlineWidth,
            // borderLeftWidth: StyleSheet.hairlineWidth,
            // borderRightWidth: StyleSheet.hairlineWidth,
            borderTopColor: 'gray',
            height: 75,
            marginHorizontal: 36,
            alignSelf: 'center',
          },
          tabBarLabelStyle: {
            display: 'none',
            fontSize: 14,
            fontWeight: 'bold',
            marginBottom: 5,
          },
          tabBarIcon: ({focused, color}) => {
            let iconName: ISvgNames = 'health';

            switch (route.name) {
              case 'Search':
                iconName = 'search-list';
                break;
              case 'Chat':
                iconName = 'chat';
                break;
              case 'Home':
                iconName = 'home';
                break;
              case 'Health':
                iconName = 'health';
                break;
              case 'Profile':
                iconName = 'profile';
                break;
              default:
                break;
            }

            return (
              <View
                style={{
                  borderBottomColor: focused ? Colors.blueZodiac : Colors.white,
                  borderBottomWidth: 2,
                  paddingBottom: 0,
                  height: 40,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: -28,
                }}>
                {selectSvg(iconName, {
                  style: {color},
                  height: 75,
                })}
              </View>
            );
          },
        })}>
        <Tab.Screen
          options={{
            headerShown: false,
          }}
          name="Search"
          component={SearchScreen}
        />
        <Tab.Screen
          options={{headerShown: false}}
          name="Home"
          component={MainScreen}
        />
        <Tab.Screen
          options={{headerShown: false}}
          name="Health"
          component={HealthScreen}
        />

        <Tab.Screen
          options={{headerShown: false}}
          name="Chat"
          component={SearchScreen}
        />

        <Tab.Screen
          options={{headerShown: false}}
          name="Profile"
          component={SearchScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
