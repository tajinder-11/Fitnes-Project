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
  bottomCard: {
    height: scale(120),
    marginHorizontal: scale(25),
    marginTop: scale(15),
    borderRadius: scale(16),
    backgroundColor: colors.white2,
  },
  bottomTextContent: {
    marginTop: scale(21),
    marginLeft: scale(10),
  },
  roundEllipse: {
    position: 'absolute',
    right: scale(20),
    top: scale(20),
  },
  bottomImage: {
    position: 'absolute',
    right: scale(25),
    top: scale(25),
  },
  bottomCardHeading: {
    fontFamily: fonts.medium,
    fontSize: scale(16),
    color: colors.Black,
  },
  exercisesText: {
    color: colors.greyMedium,
  },
  buttonStyle: {
    paddingVertical: scale(8),
    width: scale(100),
    borderRadius: scale(40),
    marginTop: scale(12),
    marginLeft: scale(12),
  },
  textStyle: {
    color: colors.purple2,
    fontSize: scale(14),
  },
});
