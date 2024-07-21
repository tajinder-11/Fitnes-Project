import React, {useEffect, useState} from 'react';
import {Text, View, Image, ScrollView, Pressable} from 'react-native';
import {firebase} from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import * as Progress from 'react-native-progress';

import HomeArrowRight from '../../../assets/icons/icHomeArrowRight.svg';
import FullBodyWorkout from '../../../assets/icons/icFullBodyWorkout.svg';
import LowerBody from '../../../assets/icons/icLowerBody.svg';
import AbsWorkout from '../../../assets/icons/icAbsWorkout.svg';
import colors from '../../../utilities/constants/globalColors';
import {styles} from './styles';

function Home({navigation}) {
  const [bodyMassIndex, setBodyMassIndex] = useState();
  const [name, setName] = useState();
  const userId = firebase.auth().currentUser;
  const id = userId.uid;

  useEffect(() => {
    async function getData() {
      const userDocument = await firestore().collection('users').doc(id).get();
      const weight = userDocument._data.weight;
      const height = userDocument._data.height / 100;
      const bmi = weight / (height * height);
      const calculatedBMI = bmi.toFixed(2);
      const userName = userDocument._data.userName;
      setName(userName);
      setBodyMassIndex(calculatedBMI);
    }
    getData();
  }, [id]);

  return (
    <View style={styles.parentContainer}>
      <View style={styles.headerView}>
        <Text style={styles.welcomeText}>Welcome Back</Text>
        <Text style={styles.userName}>{name}</Text>
      </View>
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        <View style={styles.mainView}>
          <View style={styles.cardView}>
            <Image
              source={require('../../../assets/images/banner.png')}
              style={styles.image}
            />
            <Text style={styles.bmiText}>{bodyMassIndex}</Text>
          </View>

          <View style={styles.activityTextsView}>
            <Text style={styles.activityText}>Activity Status</Text>
            <Text>See more</Text>
          </View>

          <Pressable>
            <View style={styles.fullbodyWorkout}>
              <FullBodyWorkout height={70} width={50} style={styles.fullBody} />
              <Text style={styles.fullbodyText}>Full body workout</Text>
              <Text style={styles.caloriesBurnText}>
                180 Calories Burn | 20 minutes
              </Text>
              <Progress.Bar
                progress={0.7}
                width={240}
                height={10}
                borderRadius={22}
                borderWidth={0}
                color={colors.purple1}
                style={styles.cardProgress}
              />
              <View style={styles.radioButton}>
                <HomeArrowRight />
              </View>
            </View>
          </Pressable>

          <Pressable>
            <View style={styles.fullbodyWorkout}>
              <LowerBody height={70} width={50} style={styles.fullBody} />
              <Text style={styles.fullbodyText}>Legs Workout</Text>
              <Text style={styles.caloriesBurnText}>
                180 Calories Burn | 20 minutes
              </Text>
              <Progress.Bar
                progress={0.7}
                width={240}
                height={10}
                borderRadius={22}
                borderWidth={0}
                color={colors.purple1}
                style={styles.cardProgress}
              />
              <View style={styles.radioButton}>
                <HomeArrowRight />
              </View>
            </View>
          </Pressable>

          <Pressable>
            <View style={styles.fullbodyWorkout}>
              <AbsWorkout height={70} width={50} style={styles.fullBody} />
              <Text style={styles.fullbodyText}>Abs Workout</Text>
              <Text style={styles.caloriesBurnText}>
                180 Calories Burn | 20 minutes
              </Text>
              <Progress.Bar
                progress={1}
                width={240}
                height={10}
                borderRadius={22}
                borderWidth={0}
                color={colors.purple1}
                style={styles.cardProgress}
              />
              <View style={styles.radioButton}>
                <HomeArrowRight />
              </View>
            </View>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}

export default Home;
