import React from 'react';
import {Pressable, Image, StyleSheet, Text, View} from 'react-native';
import {fontStyles} from '../../constants/fontStyles';
import {Colors} from '../../constants';
import {selectSvg} from '../../utils';

const trainerImage = require('../../assets/trainer-profile.png');

const TrainerCard = () => {
  return (
    <View style={styles.container}>
      <View
        style={[
          {
            flexDirection: 'row',
            alignContent: 'space-between',
            alignItems: 'center',
            marginBottom: 15,
          },
        ]}>
        <Image source={trainerImage} />

        <View style={{marginLeft: 20}}>
          <Text style={fontStyles.textBold16}>Simmon Adams</Text>
          <View
            style={[
              {
                flexDirection: 'row',
                alignContent: 'space-between',
                alignItems: 'center',
                marginTop: 5,
              },
            ]}>
            {selectSvg('pin', {
              width: 9,
              height: 13,
              marginRight: 5,
            })}

            <Text style={fontStyles.textLight13}>
              2,3 km from your location
            </Text>
          </View>
        </View>
      </View>

      <View
        style={[
          {
            flexDirection: 'row',
            alignContent: 'space-between',
            position: 'absolute',
            top: 0,
            right: 10,
          },
        ]}>
        {selectSvg('star', {
          width: 30,
          height: 30,
          marginRight: 5,
        })}

        {selectSvg('verified', {
          width: 30,
          height: 30,
        })}
      </View>

      <View style={styles.infoButtonDiv}>
        <Text style={styles.info}>
          Hi I am Simmon and I am a personal Trainer. I trained a lots of
          footballers.
        </Text>

        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Contacts</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default TrainerCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 3,
    marginBottom: 15,
    position: 'relative',
    height: 130,
    shadowColor: '#757575',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  infoButtonDiv: {
    flexDirection: 'row',
    alignContent: 'space-between',
  },
  info: {
    ...fontStyles.textLight12,
    width: 260,
    marginRight: 10,
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 65,
    height: 35,
    borderRadius: 10,
    backgroundColor: Colors.blueZodiac,
  },
  buttonText: {
    padding: 5,
    textAlign: 'center',
    color: Colors.white,
    fontSize: 12,
    fontWeight: 'bold',
  },
});
