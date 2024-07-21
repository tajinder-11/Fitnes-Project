import React from 'react';
import {View, Text, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import colors from '../../../../../utilities/constants/globalColors';
import {styles} from './styles';

function Onboarding_2() {
  return (
    <>
      <LinearGradient
        colors={[
          colors.gradientPurpleOne,
          colors.gradientPurpleTwo,
          colors.gradientPurpleThree,
        ]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={styles.upperView}>
        <Image
          resizeMode="stretch"
          style={styles.curve}
          source={require('../../../../../assets/images/curve2.png')}
        />
        <Image
          style={styles.image}
          source={require('../../../../../assets/images/runningBoy.png')}
        />
      </LinearGradient>

      <View style={styles.bottomView}>
        <Text style={styles.heading}>Get Burn</Text>

        <View style={styles.descriptionView}>
          <Text style={styles.description}>
            Let’s keep burning, to achive yours goals, it hurts only
            temporarily, if you give up now you will be in pain forever
          </Text>
        </View>
      </View>
    </>
  );
}

export default Onboarding_2;
