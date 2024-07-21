import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import colors from '../../../utilities/constants/globalColors';
import fonts from '../../../utilities/constants/fonts';
export const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    backgroundColor: colors.white1,
  },
  userName: {
    fontFamily: fonts.bold,
    fontSize: scale(24),
    color: colors.Black,
  },
  cardView: {
    flex: 1,
    marginHorizontal: scale(13),
    paddingHorizontal: scale(15),
    paddingTop: scale(26),
  },
  headerView: {
    marginTop: scale(40),
    marginLeft: scale(30),
  },

  image: {
    width: '100%',
    borderRadius: scale(18),
  },
  activityTextsView: {
    marginTop: scale(30),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: scale(30),
  },
  activityText: {
    fontFamily: fonts.extraBold,
    color: colors.Black,
    fontSize: scale(18),
  },

  cardProgress: {
    backgroundColor: colors.white1,
    marginLeft: scale(68),
    marginTop: scale(9),
  },

  fullbodyText: {
    fontFamily: fonts.medium,
    marginLeft: scale(75),
    marginTop: scale(15),
    fontSize: scale(12),
    color: colors.greyMedium,
  },
  caloriesBurnText: {
    fontFamily: fonts.small,
    marginLeft: scale(75),
    marginTop: scale(3),
    fontSize: scale(10),
    color: colors.greyMedium,
  },
  fullbodyWorkout: {
    height: scale(80),
    backgroundColor: colors.white2,
    marginHorizontal: scale(22),
    borderRadius: scale(16),
    marginTop: scale(30),
    flex: 1,
  },
  fullBody: {
    position: 'absolute',
    bottom: scale(1),
    left: scale(10),
  },
  radioButton: {
    height: scale(24),
    width: scale(24),
    borderColor: colors.purple2,
    borderRadius: scale(12),
    borderWidth: scale(1),
    position: 'absolute',
    right: scale(15),
    top: scale(28),
    alignItems: 'center',
    justifyContent: 'center',
  },

  timeText: {
    color: colors.greyLight,
  },
  scroll: {
    marginBottom: scale(75),
  },
  bmiText: {
    position: 'absolute',
    right: scale(68),
    top: scale(74),
    fontFamily: fonts.regular,
    fontSize: scale(18),
    color: colors.purple2,
  },
  welcomeText: {
    color: colors.greyMedium,
  },
});
