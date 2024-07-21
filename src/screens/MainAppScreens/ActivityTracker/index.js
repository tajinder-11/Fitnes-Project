import React from 'react';
import {Text, View} from 'react-native';

import BackButton from '../../../assets/icons/icBackButton.svg';
import ArrowLeft from '../../../assets/icons/icArrowLeft.svg';
import RectangleRight from '../../../assets/icons/icRectangleRight.svg';
import RightButton from '../../../assets/icons/icRightButton.svg';
import RoundEllipse from '../../../assets/icons/icRoundEllipse.svg';
import LowerBody from '../../../assets/icons/icLowerBody.svg';
import ViewButton from '../../../commonComponents/ViewButton';
import {styles} from './styles';
import {SCREEN_NAMES} from '../../../utilities/constants/navigationConstants';

function ActivityTracker({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <BackButton
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        />
        <ArrowLeft style={styles.leftArrrow} />
        <Text style={styles.headingText}>Activity Tracker</Text>
        <RectangleRight />
        <RightButton style={styles.rightButton} />
      </View>

      <View style={styles.bottomCard}>
        <View style={styles.cardAndImage}>
          <View style={styles.bottomTextContent}>
            <Text style={styles.bottomCardHeading}>Workout Tracker</Text>
            <Text style={styles.exercisesText}>12 Excercises | 40 mins</Text>
          </View>

          <RoundEllipse style={styles.roundEllipse} />
          <LowerBody height={80} width={80} style={styles.bottomImage} />
          <ViewButton
            buttonStyle={styles.buttonStyle}
            title="View More"
            textStyle={styles.textStyle}
            onPress={() => navigation.navigate(SCREEN_NAMES.workoutTracker)}>
            View More
          </ViewButton>
        </View>
      </View>

      <View style={styles.bottomCard}>
        <View style={styles.cardAndImage}>
          <View style={styles.bottomTextContent}>
            <Text style={styles.bottomCardHeading}>Sleep Tracker</Text>
            <Text style={styles.exercisesText}>14 Excercises | 20 mins</Text>
          </View>

          <RoundEllipse style={styles.roundEllipse} />
          <LowerBody height={80} width={80} style={styles.bottomImage} />

          <ViewButton
            title="View More"
            buttonStyle={styles.buttonStyle}
            textStyle={styles.textStyle}
            onPress={() => navigation.navigate(SCREEN_NAMES.sleepTracker)}>
            View More
          </ViewButton>
        </View>
      </View>
    </View>
  );
}

export default ActivityTracker;
