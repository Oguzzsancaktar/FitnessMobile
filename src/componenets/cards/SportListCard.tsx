import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {ESports, SportColors} from '../../constants';
import InfoItem from '../items/InfoItem';

import map from 'lodash/map';
import {ISvgNames} from '../../utils/selectSvg';
import {slice} from 'lodash';

interface IProps {
  navigation: any;
}
const SportListCard: React.FC<IProps> = ({navigation}) => {
  const handleItemClick = (sport: string) => {
    navigation.navigate('Search', {sport});
  };

  return (
    <View>
      <Text
        style={{
          marginBottom: 20,
          fontSize: 20,
          fontWeight: '600',
          letterSpacing: 1,
        }}>
        Start Training Session
      </Text>

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 130,
          gap: 10,
        }}>
        {map(slice(Object.keys(ESports), 0, 3), sport => {
          return (
            <TouchableOpacity
              onPress={() => handleItemClick('Running')}
              style={{flex: 1}}>
              <InfoItem
                color={SportColors[sport]}
                text={sport}
                icon={sport.toLowerCase() as ISvgNames}
              />
            </TouchableOpacity>
          );
        })}
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: 10,
          height: 130,
          gap: 10,
        }}>
        {map(slice(Object.keys(ESports), 3, 6), sport => {
          return (
            <TouchableOpacity
              onPress={() => handleItemClick('Running')}
              style={{flex: 1}}>
              <InfoItem
                color={SportColors[sport]}
                text={sport}
                icon={sport.toLowerCase() as ISvgNames}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default SportListCard;
