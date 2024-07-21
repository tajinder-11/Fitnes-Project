import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import colors from '../../../utilities/constants/globalColors';
import fonts from '../../../utilities/constants/fonts';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white1,
    flex: 1,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: colors.white1,
    height: scale(220),
    borderRadius: scale(10),
    padding: scale(20),
    marginTop: scale(250),
    marginHorizontal: scale(50),
    alignItems: 'center',
    elevation: scale(4),
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
  calendarView: {
    marginTop: scale(15),
    marginHorizontal: scale(30),
    elevation: scale(2),
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.purple1,
    marginTop: scale(15),
    marginLeft: scale(30),
    height: scale(35),
    width: scale(160),
    borderRadius: scale(50),
    alignItems: 'center',
    paddingHorizontal: scale(15),
  },
  text: {
    color: colors.white1,
  },
  timeText: {
    color: colors.white1,
    flex: 1,
    marginLeft: scale(4),
  },
  addButton: {
    position: 'absolute',
    right: scale(18),
    bottom: scale(0),
  },
  modalHeaderView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalHeadingText: {
    color: colors.Black,
    fontFamily: fonts.bold,
    fontSize: scale(16),
  },
  selectedItemTextHeading: {
    fontFamily: fonts.regular,
    fontSize: scale(16),
    color: colors.Black,
    marginRight: scale(145),
    marginTop: scale(30),
  },
  cross: {
    marginRight: scale(30),
  },
  delete: {
    marginLeft: scale(30),
  },
});
