import React from 'react';
import {WelcomeUserCard, ConversationItem} from '../componenets';
import {ScrollView, View} from 'react-native';
import {Colors, ESports} from '../constants';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import TrainerProfile from './TrainerProfile';
import {selectSvg} from '../utils';
import {IScreenProps} from '../models';
import {map} from 'lodash';
import ChatDetailScreen from './ChatDetailScreen';

const Stack = createStackNavigator();

interface IStackProps {
  navigation: any;
}
const MainStack: React.FC<IStackProps> = ({navigation}) => {
  return (
    <View
      style={{
        paddingTop: 60,
        paddingHorizontal: 20,
        backgroundColor: Colors.alabaster,
      }}>
      <WelcomeUserCard firstLineText="Your" secondLineText={'Chats'} />

      <ScrollView
        style={{marginVertical: 30, borderRadius: 10}}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          position: 'relative',
          zIndex: 1,
          flexGrow: 1,
          justifyContent: 'center',
          width: '100%',
        }}>
        {map(ESports, sport => (
          <TouchableOpacity
            onPress={() => {
              navigation.setOptions({
                tabBarStyle: {
                  display: 'none',
                },
              });
              navigation.navigate('ChatDetail');
            }}>
            <ConversationItem sport={sport.toLocaleLowerCase()} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

interface IProps extends IScreenProps {}

const ChatScreen: React.FC<IProps> = ({navigation}) => {
  const CreateMain = () => {
    return <MainStack navigation={navigation} />;
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
        name="Conversations"
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
            backgroundColor: 'transparent',
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.setOptions({
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
                    borderTopColor: 'gray',
                    height: 75,
                    marginHorizontal: 36,
                    alignSelf: 'center',
                  },
                });
                navigation.navigate('Conversations');
              }}
              style={{marginLeft: 40}}>
              {selectSvg('chevron-left', {
                style: {color: Colors.blueZodiac},
              })}
            </TouchableOpacity>
          ),
        }}
        name="ChatDetail"
        component={ChatDetailScreen}
      />
    </Stack.Navigator>
  );
};

export default ChatScreen;
