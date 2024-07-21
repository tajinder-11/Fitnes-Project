import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

import colors from '../../../utilities/constants/globalColors';
import fonts from '../../../utilities/constants/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white1,
    justifyContent: 'center',
  },

  textFieldsView: {
    borderWidth: scale(1),
    borderColor: colors.white1,
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
  heading: {
    fontFamily: fonts.bold,
    color: colors.Black,
    fontSize: scale(20),
    alignSelf: 'center',
  },
  backButton: {
    position: 'absolute',
    top: scale(30),
    left: scale(30),
  },
  buttonStyle: {
    fontSize: scale(20),
    marginHorizontal: scale(30),
    paddingVertical: scale(10),
    borderRadius: scale(99),
    marginTop: scale(12),
  },
  textStyle: {
    color: colors.white1,
    fontFamily: fonts.bold,
    fontSize: scale(20),
  },
});
