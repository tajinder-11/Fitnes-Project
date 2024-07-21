import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../../utilities/constants/globalColors';
import {scale} from 'react-native-size-matters';

const screenWidth = Dimensions.get('window').width;
export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white1,
    flex: 1,
  },
  componentsView: {
    width: screenWidth,
  },
  buttonStyle: {
    height: scale(50),
    width: scale(50),
    borderRadius: scale(30),
    position: 'absolute',
    right: scale(24),
    bottom: scale(24),
    justifyContent: 'center',
  },
  backgroundColor: colors.Black,
});
