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
  textInputsView: {
    marginTop: scale(30),
  },
  nameField: {
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
    top: scale(-35),
    left: scale(35),
  },
  text: {
    fontFamily: fonts.regular,
    fontSize: scale(16),
    color: colors.black2,
    marginTop: scale(40),
    textAlign: 'center',
  },
  dropdown: {
    borderWidth: scale(1),
    borderColor: colors.grey1,
    backgroundColor: colors.grey1,
    borderRadius: scale(14),
    marginTop: scale(15),
    height: scale(50),
    marginLeft: scale(30),
    marginRight: scale(30),
    paddingLeft: scale(30),
    paddingRight: scale(12),
    fontSize: scale(12),
  },
  imagesView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: scale(30),
  },
  firstImageView: {
    height: scale(350),
    width: scale(140),
    borderRadius: scale(20),
    borderWidth: scale(2),
  },
  secondImageView: {
    height: scale(350),
    width: scale(140),
    borderRadius: scale(20),
    borderWidth: scale(2),
  },
  buttonsView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: scale(28),
    marginHorizontal: scale(31),
  },
  placeholderColor: {
    color: colors.Black,
  },
  image: {
    height: scale(346),
    width: scale(136),
    borderRadius: scale(18),
  },
  imageText: {
    alignSelf: 'center',
    marginTop: scale(175),
    fontSize: scale(14),
    fontFamily: fonts.regular,
    color: colors.Black,
  },
});
