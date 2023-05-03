import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {MainScreen} from './src';
import SearchScreen from './src/views/SearchScreen';
import {Image, StyleSheet} from 'react-native';
import {Colors} from './src/constants';

import icon from './src/assets/icons/search-icon.png';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarActiveTintColor: Colors.blueZodiac,
          tabBarInactiveTintColor: Colors.priwinkleBlue,
          // tabBarActiveBackgroundColor: 'yellow',
          // tabBarInactiveBackgroundColor: 'green',
          tabBarShowLabel: true,
          tabBarLabelPosition: 'beside-icon',
          tabBarAllowFontScaling: true,

          tabBarIconStyle: {
            width: 30,
            height: 30,
          },
          tabBarStyle: {
            position: 'absolute',
            bottom: 0,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            backgroundColor: 'white',
            borderTopWidth: StyleSheet.hairlineWidth,
            borderLeftWidth: StyleSheet.hairlineWidth,
            borderRightWidth: StyleSheet.hairlineWidth,

            borderTopColor: 'gray',
            height: 75,
            marginHorizontal: 10,
            alignSelf: 'center',
          },
          tabBarLabelStyle: {
            fontSize: 14,
            fontWeight: 'bold',
            marginBottom: 5,
          },
          tabBarIcon: ({focused, color, size}) => {
            // You can return any component that you like here!
            return <Image source={icon} />;
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
          name="Chat"
          component={SearchScreen}
        />
        <Tab.Screen
          options={{headerShown: false}}
          name="Home"
          component={MainScreen}
        />
        {/* <Tab.Screen
          options={{headerShown: false}}
          name="Health"
          component={SearchScreen}
        />
        <Tab.Screen
          options={{headerShown: false}}
          name="Profile"
          component={SearchScreen}
        /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
