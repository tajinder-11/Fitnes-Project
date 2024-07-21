import {StyleSheet} from 'react-native';
import colors from '../../../utilities/constants/globalColors';
import fonts from '../../../utilities/constants/fonts';
import {scale} from 'react-native-size-matters';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white1,
    flex: 1,
  },
  upperView: {
    backgroundColor: colors.blue,
    height: scale(250),
  },
  roundView: {
    height: scale(310),
    width: scale(310),
    borderRadius: scale(180),
    marginTop: scale(25),
    marginHorizontal: scale(25),
    backgroundColor: colors.purple4,
  },
  downView: {
    flex: 2,
    backgroundColor: colors.white1,
  },
  image: {
    position: 'absolute',
    left: scale(50),
  },
  textView: {
    marginLeft: scale(30),
    marginTop: scale(40),
  },
  headingText: {
    fontFamily: fonts.extraBold,
    fontSize: scale(16),
    color: colors.Black,
  },
  scheduleWorkoutView: {
    height: scale(50),
    marginTop: scale(20),
    marginRight: scale(30),
    borderRadius: scale(16),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.parrotGreen,
  },
  difficultyView: {
    height: scale(50),
    marginTop: scale(20),
    marginRight: scale(30),
    borderRadius: scale(16),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.purple5,
  },
  scheduleWorkout: {
    flex: 1,
    color: colors.greyLight,
  },
  calendarImage: {
    marginLeft: scale(15),
    marginTop: scale(2),
  },
  difficulty: {
    marginLeft: scale(120),
    marginTop: scale(2),
    color: colors.greyLight,
  },
  youllneed: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: scale(36),
    marginTop: scale(30),
  },
  needText: {
    fontFamily: fonts.medium,
    fontSize: scale(16),
    color: colors.Black,
  },
  item: {
    marginTop: scale(15),
  },
  innerView: {
    height: scale(130),
    width: scale(130),
    borderRadius: scale(12),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.grey1,
  },
  dumbellView: {
    height: scale(160),
    width: scale(130),
    marginLeft: scale(30),
    backgroundColor: colors.white1,
  },
  viewText: {
    position: 'absolute',
    bottom: scale(10),
    color: colors.Black,
  },

  headerView: {
    flexDirection: 'row',
    position: 'relative',
    top: scale(22),
    marginHorizontal: scale(12),
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
  scroll: {
    marginBottom: scale(10),
  },
});
