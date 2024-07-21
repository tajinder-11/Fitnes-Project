import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import colors from '../../../../../utilities/constants/globalColors';
import fonts from '../../../../../utilities/constants/fonts';

export const styles = StyleSheet.create({
  upperView: {
    flex: 1,
  },
  bottomView: {
    flex: 2.5,
  },
  curve: {
    width: '100%',
    position: 'absolute',
    bottom: scale(-1),
  },
  image: {
    position: 'absolute',
    top: scale(55),
    alignSelf: 'center',
  },
  heading: {
    fontSize: scale(24),
    fontFamily: fonts.extraBold,
    color: colors.black2,
    marginTop: scale(220),
    marginLeft: scale(30),
  },
  description: {
    fontSize: scale(14),
    fontFamily: fonts.medium,
    color: colors.greyLight,
    marginLeft: scale(30),
    marginTop: scale(15),
  },
  descriptionView: {
    width: scale(320),
  },
});
