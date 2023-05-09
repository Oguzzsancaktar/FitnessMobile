import React, {Component, useState} from 'react';
import {Text, View} from 'react-native';
import {Colors} from '../../constants';
import {selectSvg} from '../../utils';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {GridGallery, ListGallery} from '../galleries';

const Components = {
  grid: GridGallery,
  list: ListGallery,
};

const TrainerPostsCard = () => {
  const [tab, setTab] = useState<'grid' | 'list'>('grid');
  return (
    <View
      style={{
        backgroundColor: Colors.white,
        borderRadius: 7,
        paddingHorizontal: 15,
        width: '100%',
      }}>
      <View
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          onPress={() => setTab('grid')}
          style={{
            height: 40,
            width: 150,
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderBottomWidth: tab === 'grid' ? 2 : 0,
            borderBottomColor: Colors.blueZodiac,
          }}>
          {selectSvg('grid-view', {
            style: {color: Colors.tundora, width: 20, height: 14},
          })}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setTab('list')}
          style={{
            height: 40,
            flex: 1,
            width: 150,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderBottomWidth: tab === 'list' ? 2 : 0,
            borderBottomColor: Colors.blueZodiac,
          }}>
          {selectSvg('list-view', {
            style: {color: Colors.tundora, width: 20, height: 14},
          })}
        </TouchableOpacity>
      </View>
      <View style={{paddingTop: 20}}>
        {React.createElement(Components[tab])}
      </View>
    </View>
  );
};

export default TrainerPostsCard;
