import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

import colors from '../../../utilities/constants/globalColors';
import fonts from '../../../utilities/constants/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: colors.white1,
  },
  image: {
    height: scale(100),
    width: scale(100),
    borderRadius: scale(14),
    marginLeft: scale(30),
    marginTop: scale(10),
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
  monthTitle: {
    fontFamily: fonts.bold,
    color: colors.Black,
    marginHorizontal: scale(30),
    marginTop: scale(30),
  },
});
