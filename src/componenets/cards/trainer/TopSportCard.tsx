import React from 'react';
import {Text, View} from 'react-native';
import {selectSvg} from '../../../utils';
import {Colors} from '../../../constants';

const TopSportCard = () => {
  return (
    <View style={{width: '100%'}}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          width: 'auto',
          alignSelf: 'baseline',
          marginBottom: 10,
        }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '600',
            letterSpacing: 1,
          }}>
          Top Sport
        </Text>
        <Text
          style={{
            fontSize: 12,
            lineHeight: 25,
            fontWeight: '300',
            marginLeft: 4,
            marginTop: 5,
          }}>
          last month
        </Text>
      </View>

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderRadius: 20,
          width: '100%',
        }}>
        <View
          style={{
            height: 85,
            width: '100%',
            borderRadius: 20,
            overflow: 'hidden',
          }}>
          <View style={{display: 'flex', flexDirection: 'row', height: 50}}>
            <View
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flex: 1,
                backgroundColor: Colors.zombie,
              }}>
              {selectSvg('cycling', {
                style: {width: 30, height: 30, color: Colors.white},
              })}
            </View>
            <View
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flex: 1,
              }}>
              <Text
                style={{
                  color: Colors.blueZodiac,
                  fontSize: 14,
                  lineHeight: 15,
                  fontWeight: '400',
                  textAlign: 'center',
                }}>
                Completed Trainings
              </Text>
            </View>
            <View
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flex: 1,
              }}>
              <Text
                style={{
                  color: Colors.blueZodiac,
                  fontSize: 14,
                  lineHeight: 15,
                  fontWeight: '400',
                  textAlign: 'center',
                }}>
                Serviced Clients
              </Text>
            </View>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              height: 35,
              backgroundColor: Colors.zombieDark,
            }}>
            <View
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flex: 1,
              }}>
              <Text
                style={{
                  color: Colors.white,
                  fontSize: 18,
                  lineHeight: 19,
                  fontWeight: '700',
                  textAlign: 'center',
                }}>
                Cycling
              </Text>
            </View>
            <View
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flex: 1,
                backgroundColor: Colors.zombie,
              }}>
              <Text
                style={{
                  color: Colors.white,
                  fontSize: 18,
                  lineHeight: 19,
                  fontWeight: '700',
                  textAlign: 'center',
                }}>
                12
              </Text>
            </View>
            <View
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flex: 1,
              }}>
              <Text
                style={{
                  color: Colors.white,
                  fontSize: 18,
                  lineHeight: 19,
                  fontWeight: '700',
                  textAlign: 'center',
                }}>
                8
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TopSportCard;
