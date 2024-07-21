import React from 'react';
import {Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import RunningBoy from '../../../../../assets/icons/icRunningBoy.svg';
import colors from '../../../../../utilities/constants/globalColors';
import {styles} from './styles';

function Confirm_3() {
  return (
    <>
      <View style={styles.leftView} />
      <LinearGradient
        colors={[
          colors.gradientPurpleOne,
          colors.gradientPurpleTwo,
          colors.gradientPurpleThree,
        ]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={styles.gradientView}>
        <RunningBoy height={290.19} width={183.35} style={styles.image} />
        <Text style={styles.text}>Improve Shape</Text>
        <Text style={styles.description}>
          I have a low amount of body fat and need / want to build more muscle
        </Text>
      </LinearGradient>
      <View style={styles.rightView} />
    </>
  );
}

export default Confirm_3;
