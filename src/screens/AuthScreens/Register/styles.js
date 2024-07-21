import {scale} from 'react-native-size-matters';
import {StyleSheet} from 'react-native';
import colors from '../../../utilities/constants/globalColors';
import fonts from '../../../utilities/constants/fonts';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white1,
    flex: 1,
  },
  text: {
    fontFamily: fonts.regular,
    fontSize: scale(16),
    color: colors.black2,
    marginTop: scale(40),
    textAlign: 'center',
  },
  text2: {
    fontFamily: fonts.bold,
    fontSize: scale(20),
    color: colors.black2,
    marginTop: scale(5),
    textAlign: 'center',
  },
  textFieldsView: {
    borderWidth: 1,
    borderColor: colors.grey1,
    backgroundColor: colors.grey1,
    borderRadius: scale(14),
    marginHorizontal: scale(30),
    paddingHorizontal: scale(15),
    marginTop: scale(15),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  privacyPolicyView: {
    marginLeft: scale(40),
    borderWidth: scale(2),
    borderColor: colors.white1,
    marginTop: scale(10),
    marginRight: scale(50),
    flexDirection: 'row',
  },
  buttonView: {
    height: scale(16),
    width: scale(16),
    borderWidth: scale(0.8),
    borderRadius: scale(3),
    marginRight: scale(10),
    marginTop: scale(4),
  },
  textInput: {
    flex: 1,
    color: colors.Black,
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
    color: colors.Black,
  },
  rightLine: {
    flex: 1,
    height: scale(1),
    backgroundColor: colors.grey2,
  },
  googleFacebookView: {
    flexDirection: 'row',
    marginTop: scale(16),
    justifyContent: 'space-between',
    marginHorizontal: scale(110),
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
    fontSize: scale(14),
    marginLeft: scale(2),
  },
  fieldsView: {
    flex: 1,
  },

  privacyPolicyText: {
    color: colors.greyMedium,
    fontSize: scale(14),
  },
  pressedButton: {
    backgroundColor: colors.grey,
  },
  clickedButton: {
    backgroundColor: colors.purple2,
  },
  buttonStyle: {
    fontSize: scale(20),
    marginHorizontal: scale(30),
    paddingVertical: scale(16),
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
