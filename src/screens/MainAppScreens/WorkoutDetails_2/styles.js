import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

import colors from '../../../utilities/constants/globalColors';
import fonts from '../../../utilities/constants/fonts';

export const styles = StyleSheet.create({
  parentContainer: {
    backgroundColor: colors.white1,
    flex: 1,
  },
  listContainer: {
    marginHorizontal: scale(30),
    marginTop: scale(40),
    borderRadius: scale(16),
  },
  exerciseName: {
    fontFamily: fonts.bold,
    fontSize: scale(16),
    marginTop: scale(30),
    color: colors.Black,
  },
  descriptionHeading: {
    fontFamily: fonts.bold,
    fontSize: scale(16),
    color: colors.Black,
    marginTop: scale(30),
  },
  howTodo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: scale(30),
  },
  howToName: {
    fontFamily: fonts.bold,
    fontSize: scale(16),
    color: colors.Black,
  },
  stepsView: {
    marginTop: scale(14),
  },
  stepName: {
    fontFamily: fonts.medium,
    color: colors.Black,
  },
  nameDescriptionView: {
    marginLeft: scale(60),
  },
  indicatorsView: {
    position: 'absolute',
    left: scale(22),
    height: scale(20),
    width: scale(20),
    borderRadius: scale(10),
    borderWidth: scale(2),
    borderColor: colors.purple1,
  },
  insideView: {
    height: scale(10),
    width: scale(10),
    borderRadius: scale(7),
    marginLeft: scale(3.5),
    marginTop: scale(3),
    backgroundColor: colors.purple1,
  },
  indicator1: {
    height: scale(15),
    width: scale(15),
    borderRadius: scale(10),
    position: 'absolute',
  },
  indicator2: {
    height: scale(15),
    width: scale(15),
    borderRadius: scale(10),
    borderWidth: scale(1),
  },
  indicator3: {
    height: scale(15),
    width: scale(15),
    borderRadius: scale(10),
    borderWidth: scale(1),
  },
  stepCount: {
    position: 'absolute',
    left: scale(-60),
    top: scale(2),
    fontSize: scale(18),
    color: colors.purple1,
  },
  buttonView: {
    position: 'absolute',
    bottom: scale(24),
  },
  lottieView: {
    height: scale(200),
    width: scale(200),
    background: 'transparent',
    alignSelf: 'center',
  },
  flatList: {
    marginBottom: scale(10),
  },
  buttonStyle: {
    paddingVertical: scale(14),
    marginHorizontal: scale(30),
    borderRadius: scale(40),
    marginBottom: scale(12),
  },
  textStyle: {
    fontFamily: fonts.bold,
    fontSize: scale(16),
  },
});
