import React from 'react';
import {Button, View} from 'react-native';
import {selectSvg} from '../../utils';
import {Colors} from '../../constants';

const TrainerFilter = () => {
  return (
    <View style={{height: 35}}>
      <View
        style={{
          width: 35,
          height: 35,
          backgroundColor: Colors.priwinkleBlue,
          borderRadius: 10,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {selectSvg('profile', {
          style: {position: 'absolute', color: Colors.white},
          height: 15,
          width: 15,
        })}
        <Button title="" />
      </View>
    </View>
  );
};

export default TrainerFilter;
