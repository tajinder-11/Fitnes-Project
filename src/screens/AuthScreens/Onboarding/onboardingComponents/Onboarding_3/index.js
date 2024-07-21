import React from 'react';
import {View, Text, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import colors from '../../../../../utilities/constants/globalColors';
import {styles} from './styles';

function Onboarding_3() {
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
          source={require('../../../../../assets/images/basketMan.png')}
        />
        <Image
          resizeMode="stretch"
          style={styles.curve}
          source={require('../../../../../assets/images/curve3.png')}
        />
      </LinearGradient>

      <View style={styles.bottomView}>
        <Text style={styles.heading}>Eat Well</Text>

        <View style={styles.descriptionView}>
          <Text style={styles.description}>
            Let's start a healthy lifestyle with us, we can determine your diet
            every day. healthy eating is fun
          </Text>
        </View>
      </View>
    </>
  );
}

export default Onboarding_3;
