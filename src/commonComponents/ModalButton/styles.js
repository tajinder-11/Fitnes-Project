import {StyleSheet} from 'react-native';
import colors from '../../utilities/constants/globalColors';
import fonts from '../../utilities/constants/fonts';

export const styles = StyleSheet.create({
  button: {
    height: 48,
    width: 255,
    marginTop: 15,
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 99,
    alignSelf: 'center',
  },
  pressed: {
    opacity: 0.7,
  },
  buttonText: {
    textAlign: 'center',
    color: colors.white1,
    fontSize: 16,
    fontFamily: fonts.extraBold,
  },
});
