import { StyleSheet } from 'react-native';

import { COLORS } from '../../../themes';


export const styles = StyleSheet.create({
  container: {
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 10,
    width: '45%',
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center'

  },
  contentContainer: {
    width: '45%',
    height: 150,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center'
  },
  imageBackgroundTablet: {
    width: '45%',
    height: 250,
    justifyContent: 'flex-end',
  },
  icon: {
    alignSelf: 'center',
  },
  categoryName: {
    fontSize: 10,
    fontFamily: 'Inter-Bold',
    color: COLORS.white,
    // padding: 20,
    textShadowColor: 'rgba(0,0,0,0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 6,
  },
  categoryNameTablet: {
    fontSize: 35,
    fontFamily: 'Inter-Bold',
    color: COLORS.white,
    padding: 20,
    textShadowColor: 'rgba(0,0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 6,
  },
});
