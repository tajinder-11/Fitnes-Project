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
  backCard: {
    width: '80%',
    alignSelf: 'center',
    marginTop: scale(30),
  },
  textView: {
    position: 'absolute',
    left: scale(70),
    top: scale(53),
  },
  cardImage: {
    position: 'absolute',
    right: scale(70),
    top: scale(50),
  },
  gradient: {
    width: scale(95),
    height: scale(35),
    borderRadius: scale(50),
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: scale(160),
    left: scale(60),
  },

  text: {
    fontFamily: fonts.semiBold,
    color: colors.white1,
  },
  addButton: {
    position: 'absolute',
    bottom: scale(0),
    right: scale(10),
  },
  scheduleText: {
    fontFamily: fonts.extraBold,
    fontSize: scale(16),
    color: colors.Black,
    marginTop: scale(30),
    marginLeft: scale(50),
  },
  calendarView: {
    marginHorizontal: scale(30),
    marginTop: scale(10),
  },
  itemContainer: {
    backgroundColor: colors.white1,
    marginTop: scale(33),
    height: scale(70),
    marginHorizontal: scale(50),
    borderRadius: scale(20),
    paddingHorizontal: scale(10),
    elevation: scale(10),
    shadowColor: 'black',
    shadowOpacity: scale(45),
    shadowOffset: {width: 2, height: 20},
    shadowRadius: scale(8),
  },
  data: {
    flexDirection: 'row',
  },
  datas: {
    flexDirection: 'row',
  },
  titleTimeView: {
    flexDirection: 'row',
    marginLeft: scale(15),
    marginTop: scale(20),
    alignItems: 'center',
  },
  textHeading: {
    fontFamily: fonts.medium,
    fontSize: scale(14),
    color: colors.Black,
  },
  text1: {
    fontFamily: fonts.regular,
    fontSize: scale(12),
    marginLeft: scale(4),
    marginTop: scale(2),
  },
  image: {
    marginLeft: scale(15),
    marginTop: scale(30),
  },
  buttonStyle: {
    paddingVertical: scale(8),
    width: scale(100),
    borderRadius: scale(20),
    position: 'absolute',
    bottom: scale(24),
    left: scale(60),
  },
});
