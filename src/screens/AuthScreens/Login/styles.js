import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import colors from '../../../utilities/constants/globalColors';
import fonts from '../../../utilities/constants/fonts';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white1,
    flex: 1,
  },
  text: {
    fontFamily: fonts.bold,
    fontSize: scale(20),
    color: colors.black2,
    marginTop: scale(87),
    textAlign: 'center',
  },
  textFieldsView: {
    borderWidth: 1,
    borderColor: colors.grey1,
    backgroundColor: colors.grey1,
    borderRadius: scale(14),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: scale(30),
    paddingHorizontal: scale(15),
    marginTop: scale(15),
  },
  textInputs: {
    flex: 1,
    color: colors.Black,
  },
  upperView: {
    flex: 1,
  },

  linesView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: scale(24),
    marginHorizontal: scale(30),
  },
  leftLine: {
    flex: 1,
    height: scale(1),
    backgroundColor: colors.grey2,
  },
  middleText: {
    width: scale(20),
    fontSize: scale(16),
    position: 'relative',
    bottom: scale(2),
    textAlign: 'center',
    color: colors.black2,
  },
  rightLine: {
    flex: 1,
    height: scale(1),
    backgroundColor: colors.grey2,
  },
  googleFacebookView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: scale(24),
  },
  google: {
    height: scale(50),
    width: scale(50),
    borderWidth: scale(1),
    borderRadius: scale(14),
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.grey2,
  },
  facebook: {
    height: scale(50),
    width: scale(50),
    borderWidth: scale(1),
    borderRadius: scale(14),
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.grey2,
  },
  haveAccount: {
    color: colors.Black,
  },
  bottomText: {
    fontSize: scale(14),
  },
  bottomTextView: {
    flexDirection: 'row',
    marginTop: scale(30),
    alignSelf: 'center',
  },
  pressableText: {
    color: colors.purple2,
    fontFamily: fonts.bold,
    fontSize: 14,
    marginLeft: scale(2),
  },
  forgot: {
    textAlign: 'center',
    textDecorationLine: 'underline',
    marginTop: scale(10),
    color: colors.greyLight,
  },
  icon: {
    marginTop: scale(115),
    alignSelf: 'center',
  },
  buttonStyle: {
    fontSize: scale(20),
    marginHorizontal: scale(30),
    paddingVertical: scale(12),
    borderRadius: scale(99),
    marginTop: scale(8),
  },
  textStyle: {
    color: colors.white1,
    fontFamily: fonts.bold,
    fontSize: scale(20),
  },
});

export default styles;
