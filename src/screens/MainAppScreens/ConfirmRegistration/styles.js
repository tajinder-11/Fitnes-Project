import {StyleSheet, Dimensions} from 'react-native';
import {scale} from 'react-native-size-matters';
import colors from '../../../utilities/constants/globalColors';
import fonts from '../../../utilities/constants/fonts';

const screenWidth = Dimensions.get('window').width;
export const styles = StyleSheet.create({
  heading: {
    fontSize: scale(20),
    fontFamily: fonts.extraBold,
    marginTop: scale(40),
    textAlign: 'center',
    color: colors.black2,
  },
  description: {
    fontSize: scale(12),
    color: colors.grey3,
    textAlign: 'center',
    marginTop: scale(5),
  },
  componentsView: {
    width: screenWidth,
  },
  leftView: {
    height: scale(358),
    width: scale(24),
    marginTop: scale(120),
  },
  buttonStyle: {
    paddingVertical: scale(16),
    marginHorizontal: scale(30),
    borderRadius: scale(99),
    marginBottom: scale(30),
  },
  textStyle: {
    fontFamily: fonts.bold,
    fontSize: scale(16),
  },
});
