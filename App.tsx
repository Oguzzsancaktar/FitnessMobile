import React, {useState} from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {CustomerApp, TrainerApp} from './src';

function App() {
  const [isTrainer, setIsTrainer] = useState<boolean>(true);

  return (
    <NavigationContainer>
      {isTrainer ? <TrainerApp /> : <CustomerApp />}
    </NavigationContainer>
  );
}

export default App;
