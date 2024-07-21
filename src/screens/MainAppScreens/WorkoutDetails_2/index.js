import React, {useEffect, useRef, useState} from 'react';
import {Text, View, FlatList, ScrollView, Animated, Easing} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import LottieView from 'lottie-react-native';

import {styles} from './styles';
import CustomButton from '../../../commonComponents/CustomButton';

const AnimatedLottieView = Animated.createAnimatedComponent(LottieView);

function WorkoutDetails_2({route, navigation}) {
  const animationProgress = useRef(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(animationProgress.current, {
      toValue: 2,
      duration: 5000,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  }, []);

  const [users, setUsers] = useState([]);
  const collectionName = route.params.collectionName;

  useEffect(() => {
    const subscriber = firestore()
      .collection(collectionName)
      .onSnapshot(querySnapshot => {
        const user = [];

        querySnapshot.forEach(documentSnapshot => {
          user.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });
        setUsers(user);
      });
    return () => subscriber();
  }, [collectionName]);

  const id = route?.params.workoutId;
  const selectedWorkout = users.filter(workout => workout.id === id);

  if (selectedWorkout.length > 0) {
    const workoutData = selectedWorkout[0];
    console.log(workoutData);

    function renderList() {
      return (
        <ScrollView>
          <View style={styles.listContainer}>
            <AnimatedLottieView
              style={styles.lottieView}
              progress={animationProgress.current}
              source={{uri: workoutData.animation}}
              autoPlay={true}
              loop={true}
            />
            <View>
              <Text style={styles.exerciseName}>
                {workoutData.ExercisesName}
              </Text>
              <Text>{workoutData.difficulty}</Text>
              <Text style={styles.descriptionHeading}>Descriptions</Text>
              <Text>{workoutData.descriptions}</Text>
              <View style={styles.howTodo}>
                <Text style={styles.howToName}>How to do it</Text>
                <Text>{workoutData.steps.length} steps</Text>
              </View>

              {workoutData.steps.map((step, index) => (
                <View key={index} style={styles.stepsView}>
                  <View style={styles.indicatorsView}>
                    <View style={styles.insideView} />
                  </View>
                  <View style={styles.nameDescriptionView}>
                    <Text style={styles.stepCount}>{step.stepCount}</Text>
                    <Text style={styles.stepName}>{step.stepName}</Text>
                    <Text>{step.stepDescription}</Text>
                  </View>
                </View>
              ))}
            </View>
          </View>
        </ScrollView>
      );
    }

    return (
      <View style={styles.parentContainer}>
        <FlatList
          data={selectedWorkout}
          renderItem={renderList}
          style={styles.flatList}
        />
        <CustomButton
          title="Save"
          buttonStyle={styles.buttonStyle}
          textStyle={styles.textStyle}
          onPress={() => navigation.goBack()}
        />
      </View>
    );
  }
}
export default WorkoutDetails_2;
