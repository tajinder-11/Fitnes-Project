import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

import fonts from '../../../utilities/constants/fonts';
import colors from '../../../utilities/constants/globalColors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white1,
    flex: 1,
  },
  headingText: {
    fontFamily: fonts.extraBold,
    fontSize: scale(16),
    color: colors.Black,
    marginTop: scale(44),
  },
  headerView: {
    flexDirection: 'row',
    marginLeft: scale(150),
  },
  DetailNavs: {
    marginLeft: scale(100),
    marginTop: scale(40),
  },
  nameText: {
    fontFamily: fonts.medium,
    fontSize: scale(14),
    color: colors.Black,
  },
  textsView: {
    marginLeft: scale(10),
  },
  profilePhoto: {
    position: 'absolute',
    top: scale(107),
    left: scale(30),
  },
  heightWeightAgeView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: scale(23),
    marginHorizontal: scale(40),
  },
  height: {
    width: scale(80),
    height: scale(65),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: scale(16),
  },
  numericValues: {
    fontFamily: fonts.medium,
    color: colors.purple1,
  },
  elevationStyle: {
    elevation: scale(6),
    backgroundColor: colors.white1,
  },
  cardView: {
    height: scale(159),
    marginTop: scale(19),
    marginHorizontal: scale(40),
    borderRadius: scale(16),
  },
  mainView: {
    flexDirection: 'row',
    marginTop: scale(30),
  },
  contactView: {
    flexDirection: 'row',
    marginTop: scale(9),
  },
  icons: {
    marginLeft: scale(19),
  },
  texts: {
    marginLeft: scale(10),
  },
  rightIcons: {
    position: 'absolute',
    right: scale(15),
  },
  image: {
    height: scale(50),
    width: scale(50),
    borderRadius: scale(25),
  },
  imageAndHeading: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: scale(30),
  },
});
