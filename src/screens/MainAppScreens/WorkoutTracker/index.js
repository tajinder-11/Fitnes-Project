import React from 'react';
import {Text, View, ScrollView, Pressable} from 'react-native';

import BackButton from '../../../assets/icons/icBackButton.svg';
import ArrowLeft from '../../../assets/icons/icArrowLeft.svg';
import RectangleRight from '../../../assets/icons/icRectangleRight.svg';
import RightButton from '../../../assets/icons/icRightButton.svg';
import FullBodyWorkout from '../../../assets/icons/icFullBodyWorkout.svg';
import Skiping from '../../../assets/icons/icSkiping.svg';
import Uplift from '../../../assets/icons/icUplift.svg';
import RoundEllipse from '../../../assets/icons/icRoundEllipse.svg';
import LowerBody from '../../../assets/icons/icLowerBody.svg';
import AbsWorkout from '../../../assets/icons/icAbsWorkout.svg';
import ViewButton from '../../../commonComponents/ViewButton';
import {styles} from './styles';
import {SCREEN_NAMES} from '../../../utilities/constants/navigationConstants';
import CustomButton from '../../../commonComponents/CustomButton';

function WorkoutTracker({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <BackButton
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        />
        <ArrowLeft style={styles.leftArrrow} />
        <Text style={styles.headingText}>Workout Tracker</Text>
        <RectangleRight />
        <RightButton style={styles.rightButton} />
      </View>
      <ScrollView style={styles.scroll}>
        <View style={styles.targetView}>
          <Text style={styles.targetText}>Daily Workout Schedule</Text>
          <CustomButton
            buttonStyle={styles.checkStyle}
            title="Check"
            onPress={() => navigation.navigate(SCREEN_NAMES.workoutSchedule)}
          />
        </View>

        <View style={styles.middleView}>
          <View style={styles.middleTextsView}>
            <Text style={styles.upcomingWorkout}>Upcoming Workout</Text>
            <Text>See more</Text>
          </View>
        </View>

        <Pressable
          onPress={() =>
            navigation.navigate(SCREEN_NAMES.workoutDetilsOne, {
              showScheduleWorkout: true,
              fullBodyWorkout: true,
            })
          }>
          <View style={styles.upcomingCard}>
            <View style={styles.cardAndImage}>
              <Skiping style={styles.image} />
              <View style={styles.textContent}>
                <Text style={styles.cardHeading}>Full Body Workout</Text>
                <Text style={styles.cardTime}>Today, 3:00pm</Text>
              </View>
            </View>
          </View>
        </Pressable>

        <Pressable
          onPress={() =>
            navigation.navigate(SCREEN_NAMES.workoutDetilsOne, {
              showScheduleWorkout: true,
              lowerBodyWorkout: true,
            })
          }>
          <View style={styles.upcomingCard}>
            <View style={styles.cardAndImage}>
              <Uplift style={styles.image} />
              <View style={styles.textContent}>
                <Text style={styles.cardHeading}>LowerBody Workout</Text>
                <Text style={styles.cardTime}>june 05, 2:00pm</Text>
              </View>
            </View>
          </View>
        </Pressable>

        <View style={styles.middleView}>
          <View style={styles.middleTextsView}>
            <Text style={styles.upcomingWorkout}>
              What do you want to train
            </Text>
            <Text>See more</Text>
          </View>
          <View>
            <View style={styles.bottomCard}>
              <View style={styles.cardAndImage}>
                <View style={styles.bottomTextContent}>
                  <Text style={styles.bottomCardHeading}>Fullbody Workout</Text>
                  <Text style={styles.exercisesText}>
                    11 Excercises | 32 mins
                  </Text>
                </View>

                <RoundEllipse style={styles.roundEllipse} />
                <FullBodyWorkout
                  height={80}
                  width={80}
                  style={styles.bottomImage}
                />
              </View>
              <ViewButton
                buttonStyle={styles.buttonStyle}
                textStyle={styles.textStyle}
                title="View More"
                onPress={() =>
                  navigation.navigate(SCREEN_NAMES.workoutDetilsOne, {
                    showScheduleWorkout: false,
                    fullBodyWorkout: true,
                  })
                }
              />
            </View>

            <View style={styles.bottomCard}>
              <View style={styles.cardAndImage}>
                <View style={styles.bottomTextContent}>
                  <Text style={styles.bottomCardHeading}>
                    Lowerbody Workout
                  </Text>
                  <Text style={styles.exercisesText}>
                    12 Excercises | 40 mins
                  </Text>
                </View>

                <RoundEllipse style={styles.roundEllipse} />
                <LowerBody height={80} width={80} style={styles.bottomImage} />
              </View>
              <ViewButton
                buttonStyle={styles.buttonStyle}
                textStyle={styles.textStyle}
                title="View More"
                onPress={() =>
                  navigation.navigate(SCREEN_NAMES.workoutDetilsOne, {
                    showScheduleWorkout: false,
                    lowerBodyWorkout: true,
                  })
                }
              />
            </View>

            <View style={styles.bottomCard}>
              <View style={styles.cardAndImage}>
                <View style={styles.bottomTextContent}>
                  <Text style={styles.bottomCardHeading}>Abs Workout</Text>
                  <Text style={styles.exercisesText}>
                    14 Excercises | 32 mins
                  </Text>
                </View>

                <RoundEllipse style={styles.roundEllipse} />
                <AbsWorkout height={80} width={80} style={styles.bottomImage} />
              </View>
              <ViewButton
                buttonStyle={styles.buttonStyle}
                textStyle={styles.textStyle}
                title="View More"
                onPress={() =>
                  navigation.navigate(SCREEN_NAMES.workoutDetilsOne, {
                    showScheduleWorkout: false,
                    absWorkout: true,
                  })
                }
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default WorkoutTracker;
