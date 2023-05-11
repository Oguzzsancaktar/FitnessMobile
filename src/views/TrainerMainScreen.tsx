import React from 'react';
import {View} from 'react-native';
import {
  StatisticsCard,
  TopSportCard,
  UpcomingTrainingTrainerCard,
  WelcomeUserCard,
} from '../componenets';
import {Colors} from '../constants';

interface IProps {
  navigation: any;
}

const TrainerMainScreen: React.FC<IProps> = () => {
  return (
    <View
      style={{
        paddingTop: 60,
        paddingHorizontal: 25,
        backgroundColor: Colors.white,
        height: '100%',
      }}>
      <WelcomeUserCard
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

export default TrainerMainScreen;
