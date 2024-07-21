import React, {useState, useRef} from 'react';
import {View, ScrollView, Dimensions} from 'react-native';

import Onboarding_1 from './onboardingComponents/Onboarding_1/index';
import Onboarding_2 from './onboardingComponents/Onboarding_2/index';
import Onboarding_3 from './onboardingComponents/Onboarding_3/index';
import Onboarding_4 from './onboardingComponents/Onboarding_4/index';
import ArrowRight from '../../../assets/icons/icArrowRight.svg';
import {styles} from './styles';
import {SCREEN_NAMES} from '../../../utilities/constants/navigationConstants';
import CustomButton from '../../../commonComponents/CustomButton';

function Onboarding({navigation}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollViewRef = useRef(null);
  const screenWidth = Dimensions.get('window').width;

  function nextButtonHandler() {
    if (currentIndex < 3) {
      setCurrentIndex(prevIndex => prevIndex + 1);
      scrollViewRef.current.scrollTo({
        x: (currentIndex + 1) * screenWidth,
        animated: true,
      });
    } else {
      navigation.navigate(SCREEN_NAMES.register);
    }
  }
  return (
    <>
      <View style={styles.container}>
        <ScrollView
          ref={scrollViewRef}
          horizontal={true}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}>
          <View style={styles.componentsView}>
            <Onboarding_1 />
          </View>

          <View style={styles.componentsView}>
            <Onboarding_2 />
          </View>

          <View style={styles.componentsView}>
            <Onboarding_3 />
          </View>

          <View style={styles.componentsView}>
            <Onboarding_4 />
          </View>
        </ScrollView>
        <CustomButton
          title={<ArrowRight />}
          onPress={nextButtonHandler}
          buttonStyle={styles.buttonStyle}
        />
      </View>
    </>
  );
}

export default Onboarding;
