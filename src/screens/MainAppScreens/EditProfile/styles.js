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
  imageView: {
    height: scale(150),
    width: scale(150),
    borderWidth: scale(2),
    borderRadius: scale(75),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: scale(30),
  },
  image: {
    height: scale(150),
    width: scale(150),
    borderRadius: scale(75),
  },
  nameField: {
    borderWidth: scale(1),
    borderColor: colors.grey1,
    backgroundColor: colors.grey1,
    borderRadius: scale(14),
    marginTop: scale(30),
    color: colors.Black,
    marginHorizontal: scale(30),
    flexDirection: 'row',
    paddingHorizontal: scale(4),
    fontSize: scale(12),
  },
  otherFields: {
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
  icons: {
    position: 'relative',
    top: scale(14),
  },
  buttonStyle: {
    backgroundColor: colors.purple2,
    color: colors.white1,
    fontFamily: fonts.bold,
    marginHorizontal: scale(30),
    paddingVertical: scale(16),
    borderRadius: scale(99),
    marginBottom: scale(12),
  },
  textStyle: {
    fontFamily: fonts.bold,
    fontSize: scale(16),
  },
});
