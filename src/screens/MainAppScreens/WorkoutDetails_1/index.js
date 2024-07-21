import React from 'react';
import {ScrollView, Text, View, Pressable} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import JumpingMan from '../../../assets/icons/icJumpingMan.svg';
import Calendar from '../../../assets/icons/icCalendar.svg';
import ArrowRight from '../../../assets/icons/icArrowRight.svg';
import IconDifficulity from '../../../assets/icons/icIconDifficulity.svg';
import Barbell from '../../../assets/icons/icBarbell.svg';
import SkippingRope from '../../../assets/icons/icSkippingRope.svg';
import RightNav from '../../../assets/icons/icRightNav.svg';
import BackButton from '../../../assets/icons/icBackButton.svg';
import ArrowLeft from '../../../assets/icons/icArrowLeft.svg';
import FullBodyWorkoutList from './components/FullBodyWorkoutList/index';
import LowerBodyWorkoutList from './components/LowerBodyWorkoutList/index';
import AbsWorkoutList from './components/AbsWorkoutList/index';
import colors from '../../../utilities/constants/globalColors';
import {styles} from './styles';
import {SCREEN_NAMES} from '../../../utilities/constants/navigationConstants';

function WorkoutDetails_1({navigation, route}) {
  const scheduleWorkout = route.params.showScheduleWorkout;
  const fullBody = route.params.fullBodyWorkout;
  const lowerBody = route.params.lowerBodyWorkout;
  const abs = route.params.absWorkout;

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
        <LinearGradient
          colors={[
            colors.gradientPurpleOne,
            colors.gradientPurpleTwo,
            colors.gradientPurpleThree,
          ]}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={styles.upperView}>
          <View style={styles.headerView}>
            <BackButton
              style={styles.backButton}
              onPress={() => navigation.goBack()}
            />
            <ArrowLeft style={styles.leftArrrow} />
            <RightNav style={styles.rightButton} />
          </View>
          <View>
            <View style={styles.roundView} />
          </View>
          <JumpingMan style={styles.image} />
        </LinearGradient>

        <View style={styles.downView}>
          <View style={styles.textView}>
            <Text style={styles.headingText}>Full Body Workout</Text>
            <Text>11 Excercises | 32 mins | 320 calories burn</Text>

            <View style={styles.cardsView}>
              {scheduleWorkout && (
                <View style={styles.scheduleWorkoutView}>
                  <Calendar style={styles.calendarImage} />
                  <Text style={styles.scheduleWorkout}>Schedule Workout</Text>
                  <Text style={styles.dateTime}>5/27, 09:00 AM</Text>
                  <Pressable
                    onPress={() =>
                      navigation.navigate(SCREEN_NAMES.workoutSchedule)
                    }>
                    <ArrowRight style={styles.arrowRight} />
                  </Pressable>
                </View>
              )}

              <View style={styles.difficultyView}>
                <IconDifficulity style={styles.calendarImage} />
                <Text style={styles.scheduleWorkout}>Schedule Workout</Text>
                <Text style={styles.difficulty}>Beginner</Text>
                <ArrowRight style={styles.arrowRight} />
              </View>
            </View>
          </View>

          <View style={styles.youllneed}>
            <Text style={styles.needText}>You'll Need</Text>
            <Text>5 Items</Text>
          </View>

          <View style={styles.item}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <View style={styles.dumbellView}>
                <View style={styles.innerView}>
                  <Barbell />
                </View>
                <Text style={styles.viewText}>Barbell</Text>
              </View>
              <View style={styles.dumbellView}>
                <View style={styles.innerView}>
                  <SkippingRope />
                </View>
                <Text style={styles.viewText}>Skipping Rope</Text>
              </View>
              <View style={styles.dumbellView}>
                <View style={styles.innerView}>
                  <SkippingRope />
                </View>
                <Text style={styles.viewText}>Bottle 1Liter</Text>
              </View>
              <View style={styles.dumbellView}>
                <View style={styles.innerView}>
                  <Barbell />
                </View>
                <Text style={styles.viewText}>Sports Shoes</Text>
              </View>
              <View style={styles.dumbellView}>
                <View style={styles.innerView}>
                  <Barbell />
                </View>
                <Text style={styles.viewText}>Yoga Mat</Text>
              </View>
            </ScrollView>
          </View>
          <View style={styles.youllneed}>
            <Text style={styles.needText}>Exercises</Text>
            <Text>3 Sets</Text>
          </View>

          {fullBody && (
            <View style={styles.exercisesListView}>
              <FullBodyWorkoutList />
            </View>
          )}

          {lowerBody && (
            <View style={styles.exercisesListView}>
              <LowerBodyWorkoutList />
            </View>
          )}
          {abs && (
            <View style={styles.exercisesListView}>
              <AbsWorkoutList />
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
}

export default WorkoutDetails_1;
