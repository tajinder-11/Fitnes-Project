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
          source={require('../../../../../assets/images/curve4.png')}
        />
        <Image
          style={styles.image}
          source={require('../../../../../assets/images/meditatingGirl.png')}
        />
      </LinearGradient>

      <View style={styles.bottomView}>
        <Text style={styles.heading}>Improve Sleep Quality</Text>

        <View style={styles.descriptionView}>
          <Text style={styles.description}>
            Improve the quality of your sleep with us, good quality sleep can
            bring a good mood in the morning
          </Text>
        </View>
      </View>
    </>
  );
}

export default Onboarding_2;
