import React from 'react';
import {View} from 'react-native';
import {
  DailyTipCard,
  FindTrainerCard,
  SportListCard,
  WelcomeUserCard,
} from '../componenets';
import {Colors} from '../constants';

interface IProps {
  navigation: any;
}

const MainScreen: React.FC<IProps> = ({navigation}) => {
  const handleButtonClick = () => {
    navigation.navigate('Search');
  };
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
        <FindTrainerCard onClick={handleButtonClick} />
      </View>

      <DailyTipCard />
      <View style={{paddingVertical: 40}}>
        <SportListCard />
      </View>
    </View>
  );
};

export default MainScreen;
