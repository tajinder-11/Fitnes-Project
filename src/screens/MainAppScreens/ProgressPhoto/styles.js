import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

import fonts from '../../../utilities/constants/fonts';
import colors from '../../../utilities/constants/globalColors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white1,
    flex: 1,
  },
  cardImage: {
    width: '85%',
    borderRadius: scale(18),
    marginTop: scale(30),
    marginHorizontal: scale(30),
  },
  mainHeading: {
    fontFamily: fonts.extraBold,
    fontSize: scale(16),
    color: colors.Black,
    textAlign: 'center',
    marginTop: scale(40),
  },
  backButton: {
    position: 'absolute',
    top: scale(40),
    left: scale(30),
  },
  frame: {
    position: 'absolute',
    top: scale(110),
    right: scale(44),
  },
  cardText: {
    width: scale(165),
    fontFamily: fonts.medium,
    color: colors.Black,
    position: 'absolute',
    top: scale(128),
    left: scale(50),
  },
  gradient: {
    width: scale(95),
    height: scale(35),
    borderRadius: scale(50),
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: scale(184),
    left: scale(50),
  },
  text: {
    fontFamily: fonts.semiBold,
    color: colors.white1,
  },
  photoText: {
    color: colors.purple1,
    position: 'absolute',
    bottom: 1,
  },
  highlightedWord: {
    color: colors.purple1,
  },
  image: {
    height: scale(100),
    width: scale(100),
    borderRadius: scale(14),
    marginLeft: scale(30),
  },
  comparePhotoView: {
    backgroundColor: colors.purple3,
  },
  rectangle: {
    width: '10',
    marginTop: scale(30),
    borderRadius: scale(16),
    marginHorizontal: scale(30),
  },
  compareText: {
    fontFamily: fonts.medium,
    fontSize: scale(16),
    color: colors.Black,
    position: 'absolute',
    top: scale(255),
    left: scale(50),
  },
  buttonCheck: {
    position: 'absolute',
    top: scale(250),
    right: scale(50),
  },
  gallery: {
    fontFamily: fonts.bold,
    color: colors.Black,
    fontSize: scale(14),
    marginHorizontal: scale(30),
    marginTop: scale(30),
  },
  imagesContainer: {
    marginTop: scale(30),
  },
  monthTitle: {
    color: 'black',
    marginLeft: scale(30),
  },
  buttonStyle: {
    paddingVertical: scale(8),
    width: scale(100),
    borderRadius: scale(50),
    position: 'absolute',
    bottom: scale(90),
    left: scale(40),
  },
});
