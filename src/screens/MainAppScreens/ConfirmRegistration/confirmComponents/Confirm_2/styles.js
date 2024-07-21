import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import colors from '../../../../../utilities/constants/globalColors';
import fonts from '../../../../../utilities/constants/fonts';

export const styles = StyleSheet.create({
  gradientView: {
    marginTop: scale(30),
    height: scale(450),
    width: scale(250),
    borderRadius: scale(22),
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: colors.white1,
    marginTop: scale(20),
    textAlign: 'center',
    fontFamily: fonts.bold,
  },
  description: {
    color: colors.white1,
    position: 'relative',
    fontFamily: fonts.medium,
    fontSize: scale(12),
    width: scale(180),
    marginHorizontal: scale(50),
  },
  leftView: {
    backgroundColor: colors.purple2,
    opacity: scale(0.2),
    height: scale(320),
    width: scale(24),
    position: 'absolute',
    top: scale(100),
    borderTopRightRadius: scale(22),
    borderBottomRightRadius: scale(22),
  },
  rightView: {
    backgroundColor: colors.purple2,
    opacity: scale(0.2),
    height: scale(320),
    width: scale(24),
    position: 'absolute',
    alignSelf: 'flex-end',
    top: scale(100),
    borderTopLeftRadius: scale(22),
    borderBottomLeftRadius: scale(22),
  },
});
