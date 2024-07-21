import {StyleSheet, Dimensions} from 'react-native';
import {scale} from 'react-native-size-matters';
import colors from '../../../utilities/constants/globalColors';
import fonts from '../../../utilities/constants/fonts';

const screenWidth = Dimensions.get('window').width;
export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white1,
    flex: 1,
  },
  image: {
    width: screenWidth,
  },
  heading: {
    marginTop: scale(30),
    color: colors.black2,
    fontFamily: fonts.extraBold,
    fontSize: scale(20),
    textAlign: 'center',
  },
  description: {
    textAlign: 'center',
    marginTop: scale(5),
    fontFamily: fonts.regular,
    fontSize: scale(12),
    color: colors.grey3,
  },
  textInput: {
    color: colors.Black,
  },
  textInputFields: {
    borderWidth: scale(1),
    borderColor: colors.grey1,
    backgroundColor: colors.grey1,
    borderRadius: scale(14),
    marginHorizontal: scale(30),
    paddingHorizontal: scale(15),
    marginTop: scale(15),
    flexDirection: 'row',
    alignItems: 'center',
  },
  weightField: {
    borderWidth: scale(1),
    borderColor: colors.grey1,
    backgroundColor: colors.grey1,
    borderRadius: scale(14),
    paddingHorizontal: scale(15),
    flexDirection: 'row',
    flex: 0.95,
    alignItems: 'center',
  },

  kgView: {
    height: scale(50),
    width: scale(50),
    backgroundColor: colors.purple1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(12),
  },
  kgText: {
    fontFamily: fonts.bold,
    color: colors.white1,
    fontSize: scale(16),
  },
  textInputsView: {
    flex: 1,
  },
  parentWeightView: {
    flexDirection: 'row',
    marginHorizontal: scale(30),
    justifyContent: 'space-between',
    marginTop: scale(15),
    alignItems: 'center',
    flex: 1,
  },
  buttonStyle: {
    fontFamily: fonts.bold,
    marginHorizontal: scale(30),
    paddingVertical: scale(16),
    borderRadius: scale(99),
    marginTop: scale(8),
  },
  textStyle: {
    fontFamily: fonts.bold,
    color: colors.white1,
    fontSize: scale(16),
  },
});
