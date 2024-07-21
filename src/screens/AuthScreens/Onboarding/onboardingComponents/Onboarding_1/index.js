import React from 'react';
import {View, Text, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import colors from '../../../../../utilities/constants/globalColors';
import {styles} from './styles';

function Onboarding_1() {
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
          style={styles.image}
          source={require('../../../../../assets/images/standingGirl.png')}
        />
        <Image
          resizeMode="stretch"
          style={styles.curve}
          source={require('../../../../../assets/images/curve1.png')}
        />
      </LinearGradient>

      <View style={styles.bottomView}>
        <Text style={styles.heading}>Track Your Goal</Text>

        <View style={styles.descriptionView}>
          <Text style={styles.description}>
            Dont Worry if you are having trouble Determining your goals we can
            help you determine your goals nd track your goals
          </Text>
        </View>
      </View>
    </>
  );
}

export default Onboarding_1;
