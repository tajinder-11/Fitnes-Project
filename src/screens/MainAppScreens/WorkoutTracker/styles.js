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
  targetView: {
    height: scale(48),
    backgroundColor: colors.white2,
    marginHorizontal: scale(30),
    borderRadius: scale(16),
    paddingHorizontal: scale(20),
    marginTop: scale(60),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  targetText: {
    fontFamily: fonts.medium,
    color: colors.Black,
    fontSize: scale(14),
  },
  middleView: {
    marginTop: scale(39),
  },
  middleTextsView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: scale(30),
  },
  upcomingWorkout: {
    fontSize: scale(16),
    fontFamily: fonts.bold,
    color: colors.Black,
  },
  upcomingCard: {
    height: scale(70),
    marginHorizontal: scale(25),
    marginTop: scale(15),
    borderRadius: scale(16),
    backgroundColor: colors.white2,
  },
  cardAndImage: {
    flexDirection: 'row',
  },
  image: {
    marginTop: scale(15),
    marginLeft: scale(15),
  },
  textContent: {
    marginTop: scale(21),
    marginLeft: scale(10),
  },
  cardHeading: {
    fontFamily: fonts.medium,
    color: colors.Black,
    fontSize: scale(12),
  },
  cardTime: {
    fontFamily: fonts.small,
    fontSize: scale(10),
    color: colors.greyMedium,
  },
  bottomCard: {
    height: scale(110),
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
  scroll: {
    marginBottom: scale(8),
  },
  exercisesText: {
    color: colors.greyMedium,
  },
  buttonStyle: {
    backgroundColor: colors.white1,
    paddingVertical: scale(8),
    width: scale(100),
    borderRadius: scale(40),
    marginTop: scale(10),
    marginLeft: scale(10),
  },
  textStyle: {
    color: colors.purple2,
  },
  checkStyle: {
    paddingVertical: scale(8),
    width: scale(80),
    borderRadius: scale(40),
  },
});
