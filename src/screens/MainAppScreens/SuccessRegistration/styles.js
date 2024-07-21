import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import colors from '../../../utilities/constants/globalColors';
import fonts from '../../../utilities/constants/fonts';

export const styles = StyleSheet.create({
  image: {
    marginTop: scale(90),
    alignSelf: 'center',
  },
  heading: {
    marginTop: scale(44),
    textAlign: 'center',
    color: colors.Black,
    fontFamily: fonts.extraBold,
    fontSize: scale(20),
  },
  description: {
    textAlign: 'center',
    fontSize: scale(14),
    fontFamily: fonts.small,
    color: colors.grey3,
    marginHorizontal: scale(80),
  },
  flatButton: {
    position: 'absolute',
    bottom: scale(40),
  },
  lottieView: {
    height: scale(400),
    width: scale(400),
    borderRadius: scale(12),
    background: 'transparent',
    position: 'absolute',
    bottom: scale(0),
    alignSelf: 'center',
  },
  buttonStyle: {
    paddingVertical: scale(16),
    marginHorizontal: scale(30),
    borderRadius: scale(99),
    position: 'relative',
    top: scale(160),
  },
  textStyle: {
    fontFamily: fonts.bold,
    fontSize: scale(16),
  },
});
