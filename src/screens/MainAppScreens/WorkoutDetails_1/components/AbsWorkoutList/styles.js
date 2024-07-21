import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

import colors from '../../../../../utilities/constants/globalColors';
import fonts from '../../../../../utilities/constants/fonts';

export const styles = StyleSheet.create({
  listContainer: {
    height: scale(60),
    marginHorizontal: scale(30),
    marginTop: scale(15),
    borderRadius: scale(16),
    elevation: scale(2),
    backgroundColor: colors.white1,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: scale(10),
  },
  task: {
    fontSize: scale(12),
    color: colors.Black,
    fontFamily: fonts.medium,
  },

  image: {
    height: scale(60),
    width: scale(60),
    borderRadius: scale(12),
  },
  taskandSets: {
    flex: 1,
    marginLeft: scale(10),
  },
});
