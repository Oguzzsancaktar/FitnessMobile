import React from 'react';
import {View} from 'react-native';
import {
  DailyTipCard,
  FindTrainerCard,
  SportListCard,
  WelcomeUserCard,
} from '../componenets';

const MainScreen = () => {
  return (
    <View
      style={{paddingTop: 60, paddingHorizontal: 25, backgroundColor: 'white'}}>
      <WelcomeUserCard />
      <View style={{paddingVertical: 40}}>
        <FindTrainerCard />
      </View>

      <DailyTipCard />
      <View style={{paddingVertical: 40}}>
        <SportListCard />
      </View>
    </View>
  );
};

export default MainScreen;
