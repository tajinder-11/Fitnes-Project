import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import colors from '../../../utilities/constants/globalColors';
import fonts from '../../../utilities/constants/fonts';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white1,
    flex: 1,
  },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: scale(44),
    marginHorizontal: scale(12),
  },
  headingText: {
    textAlign: 'center',
    color: colors.Black,
    fontFamily: fonts.bold,
    fontSize: scale(16),
  },
  leftArrrow: {
    position: 'absolute',
    left: scale(8),
    top: scale(8),
  },
  rightButton: {
    position: 'absolute',
    right: scale(10),
    top: scale(12),
  },
  textInputsView: {
    marginTop: scale(30),
  },
  nameField: {
    borderWidth: scale(1),
    borderColor: colors.grey1,
    backgroundColor: colors.grey1,
    borderRadius: scale(14),
    marginTop: scale(15),
    color: colors.Black,
    marginHorizontal: scale(30),
    flexDirection: 'row',
    paddingHorizontal: scale(4),
    fontSize: scale(12),
  },
  textInput: {
    borderWidth: scale(2),
    borderRadius: scale(14),
    backgroundColor: colors.grey1,
    borderColor: colors.grey1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: scale(30),
  },
  textInputValue: {
    flex: 1,
  },
  icons: {
    position: 'relative',
    top: scale(-35),
    left: scale(35),
  },
  text: {
    fontFamily: fonts.regular,
    fontSize: scale(16),
    color: colors.black2,
    marginTop: scale(40),
    textAlign: 'center',
  },
  detailsWorkout: {
    fontFamily: fonts.bold,
    fontSize: scale(16),
    color: colors.Black,
    marginLeft: scale(30),
  },
  dropdown: {
    borderWidth: scale(1),
    borderColor: colors.grey1,
    backgroundColor: colors.grey1,
    borderRadius: scale(14),
    marginTop: scale(10),
    height: scale(50),
    color: colors.Black,
    marginLeft: scale(30),
    marginRight: scale(30),
    paddingLeft: scale(30),
    paddingRight: scale(12),
    fontSize: scale(12),
  },
  buttonStyle: {
    paddingVertical: scale(16),
    marginHorizontal: scale(30),
    borderRadius: scale(40),
    marginBottom: scale(12),
  },
  upperView: {
    flex: 1,
  },
  selectTime: {
    paddingVertical: scale(8),
    paddingHorizontal: scale(8),
    borderRadius: scale(12),
    marginRight: scale(6),
  },
});
