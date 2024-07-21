import React, {useState, useRef} from 'react';
import {Text, View, ScrollView, Dimensions} from 'react-native';

import Confirm_1 from './confirmComponents/Confirm_1/index';
import Confirm_2 from './confirmComponents/Confirm_2/index';
import Confirm_3 from './confirmComponents/Confirm_3/index';
import {styles} from './styles';
import {SCREEN_NAMES} from '../../../utilities/constants/navigationConstants';
import CustomButton from '../../../commonComponents/CustomButton';

function ConfirmRegistration({navigation}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollViewRef = useRef(null);
  const screenWidth = Dimensions.get('window').width;

  function confirmButtonHandler() {
    if (currentIndex < 3) {
      setCurrentIndex(prevIndex => prevIndex + 1);
      scrollViewRef.current.scrollTo({
        x: (currentIndex + 1) * screenWidth,
        animated: true,
      });
    } else {
      navigation.navigate(SCREEN_NAMES.successRegistration);
    }
  }

  return (
    <>
      <Text style={styles.heading}>What is your goal?</Text>
      <Text style={styles.description}>
        It will help us to choose a best program for you{' '}
      </Text>

      <ScrollView
        ref={scrollViewRef}
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}>
        <View style={styles.componentsView}>
          <Confirm_1 />
        </View>

        <View style={styles.componentsView}>
          <Confirm_2 />
        </View>

        <View style={styles.componentsView}>
          <Confirm_3 />
        </View>
      </ScrollView>
      <CustomButton
        title="Confirm"
        buttonStyle={styles.buttonStyle}
        textStyle={styles.textStyle}
        onPress={confirmButtonHandler}
      />
    </>
  );
}

export default ConfirmRegistration;
