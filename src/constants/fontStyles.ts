import {StyleSheet} from 'react-native';
import {Colors} from './colors';

export const fontStyles = StyleSheet.create({
  textBold16: {
    color: Colors.tundora,
    fontSize: 16,
    lineHeight: 20,
    fontWeight: 'bold',
  },

  textLight13: {
    color: Colors.xanadu,
    fontSize: 13,
    lineHeight: 16,
    fontWeight: '300',
  },

  textLight12: {
    color: Colors.xanadu,
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '400',
  },
});
