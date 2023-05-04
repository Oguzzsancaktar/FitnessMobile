import React from 'react';
import {
  WelcomeUserCard,
  TrainerCard,
  TrainerFilter,
  TrainerSearchbar,
} from '../componenets';
import {ScrollView, View} from 'react-native';
import {Colors} from '../constants';

const SearchScreen = () => {
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

      <View style={{marginVertical: 30}}>
        <TrainerFilter />
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'center',
          width: '100%',
        }}>
        <TrainerCard />
        <TrainerCard />
        <TrainerCard />
        <TrainerCard />
        <TrainerCard />
        <TrainerCard />
        <TrainerCard />
      </ScrollView>
    </View>
  );
};

export default SearchScreen;
