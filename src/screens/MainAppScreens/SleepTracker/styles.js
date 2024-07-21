import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

import colors from '../../../utilities/constants/globalColors';
import fonts from '../../../utilities/constants/fonts';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white1,
    flex: 1,
  },
  mainHeading: {
    fontFamily: fonts.extraBold,
    fontSize: scale(16),
    color: colors.Black,
    textAlign: 'center',
    marginTop: scale(44),
  },
  backButton: {
    position: 'absolute',
    top: scale(40),
    left: scale(30),
  },
  rectangle: {
    alignSelf: 'center',
    marginTop: scale(30),
  },
  sleepGraph: {
    position: 'absolute',
    width: '87.2%',
    left: scale(22),
    top: scale(400),
  },
  graph: {
    marginTop: scale(30),
    marginLeft: scale(25),
  },
  targetView: {
    height: scale(50),
    backgroundColor: colors.white2,
    marginHorizontal: scale(30),
    borderRadius: scale(16),
    paddingHorizontal: scale(20),
    marginTop: scale(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  targetText: {
    fontFamily: fonts.medium,
    color: colors.Black,
    fontSize: scale(14),
  },
  todaySchedule: {
    marginTop: scale(30),
    marginLeft: scale(50),
    fontFamily: fonts.extraBold,
    fontSize: scale(16),
    color: colors.Black,
  },
  itemContainer: {
    backgroundColor: colors.white1,
    marginTop: scale(33),
    borderRadius: scale(20),
    marginHorizontal: scale(50),
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    elevation: scale(0.9),
    shadowColor: 'black',
    shadowOpacity: scale(45),
    shadowOffset: {width: scale(2), height: scale(20)},
    shadowRadius: scale(8),
  },
  titleTimeView: {
    flexDirection: 'row',
  },
  titleTimeDate: {
    marginLeft: scale(20),
    flex: 1,
  },
  textHeading: {
    fontFamily: fonts.medium,
    fontSize: scale(14),
    color: colors.Black,
  },
  text: {
    fontFamily: fonts.regular,
    fontSize: scale(12),
    marginLeft: scale(4),
    marginTop: scale(2),
  },
  image: {
    marginLeft: scale(15),
    marginTop: scale(30),
  },
  sleepText: {
    alignSelf: 'center',
    marginTop: scale(30),
  },
  styleBezier: {
    marginTop: scale(30),
    borderRadius: scale(16),
    alignSelf: 'center',
  },
  cardImage: {
    width: '100%',
    borderRadius: scale(18),
    marginTop: scale(30),
  },
  headingView: {
    position: 'absolute',
    top: scale(350),
    left: scale(50),
  },
  headingText: {
    color: colors.white1,
    fontFamily: fonts.bold,
    fontSize: scale(16),
  },
  add: {
    alignSelf: 'center',
    marginTop: scale(41),
  },
  buttonStyle: {
    paddingVertical: scale(6),
    width: scale(100),
    borderRadius: scale(40),
  },
});
