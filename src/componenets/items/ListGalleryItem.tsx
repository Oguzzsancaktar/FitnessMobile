import React from 'react';
import {Image, Text, View} from 'react-native';
import {Colors} from '../../constants';

const trainerImage = require('../../assets/trainer-profile.png');
import dummyTrainerImage1 from '../../assets/dummy/trainer-post-1.png';

const ListGalleryItem = () => {
  return (
    <View style={{paddingBottom: 20}}>
      <View
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View
          style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={{
              width: 40,
              height: 40,
              borderRadius: 50,
              overflow: 'hidden',
              borderStyle: 'solid',
            }}>
            <Image source={trainerImage} style={{width: 70, height: 70}} />
          </View>
          <Text style={{maxWidth: 100, marginLeft: 10}}>SIMMON ADAMS</Text>
        </View>

        <View style={{display: 'flex', flexDirection: 'row'}}>
          <Text>Posted on</Text>
          <Text style={{fontWeight: '700'}}>Wed, 01.03.23</Text>
        </View>
      </View>
      <View
        style={{
          marginVertical: 20,
          height: 340,
          borderRadius: 20,
          overflow: 'hidden',
        }}>
        <Image
          source={dummyTrainerImage1}
          style={{height: 380, borderRadius: 0}}
        />
      </View>
    </View>
  );
};

export default ListGalleryItem;
