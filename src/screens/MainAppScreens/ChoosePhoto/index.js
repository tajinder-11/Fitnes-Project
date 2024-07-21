import React, {useEffect, useState} from 'react';
import {Text, View, ScrollView, Image, Pressable} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {firebase} from '@react-native-firebase/auth';

import BackNavs from '../../../assets/icons/icBackNavs.svg';
import {styles} from './styles';
import {SCREEN_NAMES} from '../../../utilities/constants/navigationConstants';

function ChoosePhoto({navigation, route}) {
  const [users, setUsers] = useState([]);

  const selectedMonth = route.params.selectedMonth;

  const userId = firebase.auth().currentUser;
  const id = userId.uid;

  useEffect(() => {
    const subscriber = firestore()
      .collection('userPhotos')
      .where('userId', '==', id)
      .onSnapshot(querySnapshot => {
        const userPhotos = {};
        querySnapshot.forEach(documentSnapshot => {
          const {userImages, date} = documentSnapshot.data();
          const month = date.toDate().toLocaleString('en-US', {month: 'long'});
          if (month === selectedMonth) {
            if (!userPhotos[month]) {
              userPhotos[month] = [];
            }
            userPhotos[month].push(userImages);
          }
        });
        setUsers(userPhotos);
      });

    return () => subscriber();
  }, [id, selectedMonth]);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <BackNavs style={styles.backButton} />
        <Text style={styles.mainHeading}>Choose a Photo</Text>
      </View>

      {Object.entries(users).map(([month, images]) => (
        <View key={month}>
          <Text style={styles.monthTitle}>{month}</Text>
          <View style={styles.imagesView}>
            <ScrollView horizontal={true}>
              {images.map((image, index) => (
                <View key={index} style={styles.imageContainer}>
                  <Pressable
                    key={index}
                    style={styles.imageContainer}
                    onPress={() => {
                      navigation.navigate(SCREEN_NAMES.comparePhoto, {
                        selectedPhoto: image,
                        selectedMonth: month,
                      });
                    }}>
                    <Image source={{uri: image}} style={styles.image} />
                  </Pressable>
                </View>
              ))}
            </ScrollView>
          </View>
        </View>
      ))}
    </View>
  );
}

export default ChoosePhoto;
