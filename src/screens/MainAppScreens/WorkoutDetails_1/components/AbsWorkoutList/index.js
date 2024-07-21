import React, {useEffect, useState} from 'react';
import {Text, View, Image, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';

import IconNext from '../../../../../assets/icons/icIconNext.svg';
import {styles} from './styles';
import {SCREEN_NAMES} from '../../../../../utilities/constants/navigationConstants';

function AbsWorkoutList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const subscriber = firestore()
      .collection('absWorkout')
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
  }, []);

  const navigation = useNavigation();

  return (
    <>
      {users.map(item => (
        <Pressable
          key={item.id}
          onPress={() =>
            navigation.navigate(SCREEN_NAMES.workoutDetailsTwo, {
              workoutId: item.id,
              collectionName: 'absWorkout',
            })
          }>
          <View style={styles.listContainer}>
            <View style={styles.content}>
              <Image source={{uri: item.image}} style={styles.image} />
              <View style={styles.taskandSets}>
                <Text style={styles.task}>{item.exerciseName}</Text>

                <Text>{item.sets}</Text>
              </View>
              <IconNext style={styles.icon} />
            </View>
          </View>
        </Pressable>
      ))}
    </>
  );
}

export default AbsWorkoutList;
