import React from 'react';
import {
  WelcomeUserCard,
  TrainerCard,
  TrainerFilter,
  TrainerSearchbar,
} from '../componenets';
import {ScrollView, View} from 'react-native';

const SearchScreen = () => {
  return (
    <View
      style={{paddingTop: 60, paddingHorizontal: 25, backgroundColor: 'white'}}>
      <WelcomeUserCard />
      <TrainerSearchbar />
      <TrainerFilter />
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
