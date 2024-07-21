import React, {useEffect, useRef, useState} from 'react';
import {Text, View, Animated, Easing} from 'react-native';
import LottieView from 'lottie-react-native';
import firestore from '@react-native-firebase/firestore';
import {firebase} from '@react-native-firebase/auth';

import GirlBoy from '../../../assets/icons/icGirlBoy.svg';
import CustomButton from '../../../commonComponents/CustomButton';
import {styles} from './styles';
import {SCREEN_NAMES} from '../../../utilities/constants/navigationConstants';

const AnimatedLottieView = Animated.createAnimatedComponent(LottieView);

function SuccessRegistration({navigation}) {
  const [name, setName] = useState();
  const userId = firebase.auth().currentUser;
  const id = userId.uid;
  useEffect(() => {
    async function getData() {
      const userDocument = await firestore().collection('users').doc(id).get();
      const userName = userDocument._data.userName;
      setName(userName);
    }
    getData();
  }, [id]);

  function gotoHomeHandler() {
    navigation.navigate(SCREEN_NAMES.bottomTab);
  }

  const animationProgress = useRef(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(animationProgress.current, {
      toValue: 2,
      duration: 5000,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  }, []);
  return (
    <View>
      <View style={styles.mainView}>
        <GirlBoy height={304} width={277.56} style={styles.image} />
        <Text style={styles.heading}>Welcome, {name}</Text>
        <Text style={styles.description}>
          You are all set now, let's reach your goals together with us
        </Text>

        <AnimatedLottieView
          style={styles.lottieView}
          progress={animationProgress.current}
          source={require('../../../assets/animations/successAnimation.json')}
          loop={false}
        />
      </View>

      <CustomButton
        title="Go to Home"
        buttonStyle={styles.buttonStyle}
        textStyle={styles.textStyle}
        onPress={gotoHomeHandler}
      />
    </View>
  );
}

export default SuccessRegistration;
