import {StyleSheet} from 'react-native';
import colors from '../../../utilities/constants/globalColors';
import fonts from '../../../utilities/constants/fonts';
import {scale} from 'react-native-size-matters';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white1,
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
  nameField: {
    borderWidth: 1,
    borderColor: colors.grey1,
    backgroundColor: colors.grey1,
    borderRadius: scale(14),
    marginTop: scale(30),
    color: colors.Black,
    marginHorizontal: scale(30),
    flexDirection: 'row',
    paddingHorizontal: scale(4),
    fontSize: scale(12),
  },
  textInput: {
    borderWidth: scale(1),
    backgroundColor: colors.grey1,
    borderColor: colors.grey1,
    marginHorizontal: scale(30),
    marginTop: scale(30),
    borderRadius: scale(14),
    paddingHorizontal: scale(10),
  },
  icons: {
    position: 'absolute',
    top: scale(105),
    left: scale(36),
  },
  icons2: {
    position: 'absolute',
    top: scale(175),
    left: scale(36),
    right: scale(10),
  },
  arrowRight: {
    marginTop: scale(16),
    marginLeft: scale(240),
  },
  dropdownArea: {
    height: scale(300),
    width: scale(300),
    alignSelf: 'center',
    borderWidth: scale(3),
  },
  dropdown: {
    borderWidth: 1,
    borderColor: colors.grey1,
    backgroundColor: colors.grey1,
    borderRadius: scale(14),
    marginTop: scale(30),
    height: scale(40),
    color: colors.Black,
    marginLeft: scale(30),
    marginRight: scale(30),
    paddingLeft: scale(30),
    paddingRight: scale(12),
    fontSize: scale(12),
  },
  flatButtonView: {
    position: 'absolute',
    bottom: scale(40),
  },
  textInputsView: {
    flex: 1,
  },
  buttonStyle: {
    paddingVertical: scale(16),
    marginHorizontal: scale(30),
    borderRadius: scale(40),
    marginBottom: scale(12),
  },
});
