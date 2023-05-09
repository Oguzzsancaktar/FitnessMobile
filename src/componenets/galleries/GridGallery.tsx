import React from 'react';
import {Image, View} from 'react-native';

import dummyTrainerImage1 from '../../assets/dummy/trainer-post-1.png';
import dummyTrainerImage2 from '../../assets/dummy/trainer-post-2.png';
import dummyTrainerImage3 from '../../assets/dummy/trainer-post-3.png';
import dummyTrainerImage4 from '../../assets/dummy/trainer-post-4.png';
import dummyTrainerImage5 from '../../assets/dummy/trainer-post-5.png';
import dummyTrainerImage6 from '../../assets/dummy/trainer-post-6.png';
import dummyTrainerImage7 from '../../assets/dummy/trainer-post-7.png';
import dummyTrainerImage8 from '../../assets/dummy/trainer-post-8.png';

const GridGallery = () => {
  return (
    <View style={{width: '100%'}}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          height: 130,
          marginBottom: 10,
        }}>
        <View
          style={{
            flex: 2,
            marginRight: 10,
            borderRadius: 7,
            overflow: 'hidden',
          }}>
          <Image
            source={dummyTrainerImage1}
            style={{width: '100%', height: '100%'}}
          />
        </View>
        <View style={{flex: 4, borderRadius: 7, overflow: 'hidden'}}>
          <Image
            source={dummyTrainerImage2}
            style={{width: '100%', height: '100%'}}
          />
        </View>
      </View>

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          height: 130,
          marginBottom: 10,
        }}>
        <View
          style={{
            flex: 3,
            marginRight: 10,
            borderRadius: 7,
            overflow: 'hidden',
          }}>
          <Image
            source={dummyTrainerImage3}
            style={{width: '100%', height: '100%'}}
          />
        </View>
        <View style={{flex: 3, borderRadius: 7, overflow: 'hidden'}}>
          <Image
            source={dummyTrainerImage4}
            style={{width: '100%', height: '100%'}}
          />
        </View>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row-reverse',
          height: 130,
          marginBottom: 10,
        }}>
        <View
          style={{
            flex: 2,
            borderRadius: 7,
            overflow: 'hidden',
          }}>
          <Image
            source={dummyTrainerImage1}
            style={{width: '100%', height: '100%'}}
          />
        </View>
        <View
          style={{
            flex: 4,
            borderRadius: 7,
            overflow: 'hidden',
            marginRight: 10,
          }}>
          <Image
            source={dummyTrainerImage2}
            style={{width: '100%', height: '100%'}}
          />
        </View>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          height: 130,
        }}>
        <View
          style={{
            flex: 3,
            marginRight: 10,
            borderRadius: 7,
            overflow: 'hidden',
          }}>
          <Image
            source={dummyTrainerImage3}
            style={{width: '100%', height: '100%'}}
          />
        </View>
        <View style={{flex: 3, borderRadius: 7, overflow: 'hidden'}}>
          <Image
            source={dummyTrainerImage4}
            style={{width: '100%', height: '100%'}}
          />
        </View>
      </View>
    </View>
  );
};

export default GridGallery;
