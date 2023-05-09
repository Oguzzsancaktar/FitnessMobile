import React from 'react';
import {ScrollView, Text, View, Image} from 'react-native';
import {Colors} from '../constants';
import {selectSvg} from '../utils';
import {StoriesCard} from '../componenets';

const trainerImage = require('../assets/trainer-profile.png');

const TrainerProfile = () => {
  return (
    <ScrollView style={{paddingHorizontal: 35, backgroundColor: Colors.white}}>
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          paddingTop: 20,
          flexDirection: 'column',
        }}>
        <View
          style={{
            width: 70,
            height: 70,
            borderRadius: 50,
            overflow: 'hidden',
            borderStyle: 'solid',
            borderWidth: 3,
            borderColor: Colors.priwinkleBlue,
            marginBottom: 20,
          }}>
          <Image source={trainerImage} style={{width: 70, height: 70}} />
        </View>

        <View style={{marginBottom: 0}}>
          <Text style={{fontSize: 20, lineHeight: 29, fontWeight: '800'}}>
            SIMMON ADAMS
          </Text>
        </View>

        <View>
          <Text style={{fontSize: 12, lineHeight: 19, fontWeight: '300'}}>
            Football Coach
          </Text>
        </View>

        <View
          style={{display: 'flex', flexDirection: 'row', marginVertical: 30}}>
          <View
            style={{
              width: 110,
              marginRight: 10,
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 2,
                borderColor: Colors.tundora,
                borderRadius: 10,
                width: 110,
                height: 35,
              }}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '700',
                  color: Colors.tundora,
                }}>
                Contact
              </Text>
            </View>
          </View>
          <View
            style={{
              width: 110,
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 2,
                borderColor: Colors.tenn,
                backgroundColor: Colors.tenn,
                borderRadius: 10,
                width: 110,
                height: 35,
              }}>
              {selectSvg('heart', {
                style: {color: Colors.white, marginRight: 5},
                width: 20,
                height: 14,
              })}
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '700',
                  color: Colors.white,
                }}>
                Follow
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            backgroundColor: Colors.blueZodiac,
            borderRadius: 7,
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            padding: 15,
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: Colors.white,
                fontSize: 18,
                lineHeight: 19,
                fontWeight: '700',
              }}>
              8
            </Text>

            <Text style={{color: Colors.white, fontSize: 12, lineHeight: 19}}>
              Images
            </Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: Colors.white,
                fontSize: 18,
                lineHeight: 19,
                fontWeight: '700',
              }}>
              250
            </Text>

            <Text style={{color: Colors.white, fontSize: 12, lineHeight: 19}}>
              Followers
            </Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: Colors.white,
                fontSize: 18,
                lineHeight: 19,
                fontWeight: '700',
              }}>
              128
            </Text>

            <Text style={{color: Colors.white, fontSize: 12, lineHeight: 19}}>
              Happy Clients
            </Text>
          </View>
        </View>
      </View>
      <StoriesCard />
    </ScrollView>
  );
};

export default TrainerProfile;
