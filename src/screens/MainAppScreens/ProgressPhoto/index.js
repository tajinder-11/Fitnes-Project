import React, {useState, useEffect} from 'react';
import {View, Image, Text, PermissionsAndroid, ScrollView} from 'react-native';
import {firebase} from '@react-native-firebase/auth';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import ImagePicker from 'react-native-image-crop-picker';

import BackNavs from '../../../assets/icons/icBackNavs.svg';
import Frame from '../../../assets/icons/icFrame.svg';
import ButtonCheck from '../../../assets/icons/icButtonCheck.svg';
import {styles} from './styles';
import {SCREEN_NAMES} from '../../../utilities/constants/navigationConstants';
import CustomButton from '../../../commonComponents/CustomButton';

function ProgressPhoto({navigation}) {
  const [profilePhoto, setProfilePhoto] = useState();
  const [users, setUsers] = useState([]);

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
          const month = date.toDate().toLocaleString('en-US', {month: 'short'});
          if (!userPhotos[month]) {
            userPhotos[month] = [];
          }
          userPhotos[month].push(userImages);
        });
        setUsers(userPhotos);
      });

    return () => subscriber();
  }, [id]);

  async function requestCameraPermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Camera Permission',
          message: 'App needs access to your camera.',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Camera permission granted');
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  }

  function addInDatabase(imagePath) {
    firestore()
      .collection('userPhotos')
      .add({
        userImages: imagePath,
        userId: id,
        date: new Date(),
      })
      .then(() => {
        console.log('Photo Added');
      });
  }

  async function uploadImage(imagePath) {
    try {
      const reference = storage().ref('workoutImages/' + imagePath);
      console.log('refrence =', reference);
      await reference.putFile(imagePath);
      const url = await storage()
        .ref('workoutImages/' + imagePath)
        .getDownloadURL();
      setProfilePhoto(url);
      console.log('Image uploaded to Firebase storage');
      addInDatabase(url);
    } catch (error) {
      console.error('Error uploading image to Firebase storage:', error);
    }
  }

  function takePhotoFromCamera() {
    requestCameraPermission();
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      uploadImage(image.path);
    });
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <BackNavs style={styles.backButton} />
        <Text style={styles.mainHeading}>Progress Photo</Text>
        <Image
          source={require('../../../assets/images/background.png')}
          style={styles.cardImage}
        />

        <Image
          source={require('../../../assets/images/rectangle.png')}
          style={styles.rectangle}
        />
        <Text style={styles.compareText}>Compare my Photo</Text>
        <ButtonCheck
          style={styles.buttonCheck}
          onPress={() => navigation.navigate(SCREEN_NAMES.comparePhoto)}
        />
        <Text style={styles.cardText}>
          Track your progress each month with{' '}
          <Text style={styles.highlightedWord}>Photo</Text>
        </Text>

        <Frame style={styles.frame} />

        <CustomButton
          title="Take Photo"
          buttonStyle={styles.buttonStyle}
          onPress={takePhotoFromCamera}
        />

        <Text style={styles.gallery}>Gallery</Text>

        {Object.entries(users).map(([month, images]) => (
          <View key={month}>
            <Text style={styles.monthTitle}>{month}</Text>
            <View style={styles.imagesView}>
              <ScrollView horizontal={true}>
                {images.map((image, index) => (
                  <View key={index} style={styles.imageContainer}>
                    <Image source={{uri: image}} style={styles.image} />
                  </View>
                ))}
              </ScrollView>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

export default ProgressPhoto;
