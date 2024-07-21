import React, {useEffect, useRef, useState} from 'react';
import {
  Text,
  View,
  TextInput,
  ScrollView,
  Button,
  Pressable,
  PermissionsAndroid,
  Image,
} from 'react-native';
import ActionSheet from 'react-native-actions-sheet';
import ImagePicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import {firebase} from '@react-native-firebase/auth';

import BackNavs from '../../../assets/icons/icBackNavs.svg';
import Profile from '../../../assets/icons/icProfile.svg';
import Phone from '../../../assets/icons/icPhone.svg';
import Email from '../../../assets/icons/icEmail.svg';
import WeightScale from '../../../assets/icons/icWeightScale.svg';
import Swap from '../../../assets/icons/icSwap.svg';
import CustomButton from '../../../commonComponents/CustomButton/index';
import {styles} from './styles';

function EditProfile({navigation, route}) {
  const [profilePhoto, setProfilePhoto] = useState();
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const actionSheetRef = useRef();

  const userId = firebase.auth().currentUser;
  const id = userId.uid;

  useEffect(() => {
    async function getImage() {
      const userDocument = await firestore()
        .collection('profiles')
        .doc(id)
        .get();
      const userData = userDocument._data.profilePhotoUrl;
      setProfilePhoto(userData);
    }
    getImage();
  }, [id]);

  useEffect(() => {
    async function getData() {
      const userDocument = await firestore().collection('users').doc(id).get();
      const userData = userDocument.data();
      if (userData) {
        setFullName(userData.userName);
        setPhoneNumber(userData.phoneNumber);
        setEmail(userData.email);
        setHeight(userData.height);
        setWeight(userData.weight);
      }
    }
    getData();
  }, [id]);

  async function updateProfile() {
    try {
      await firestore().collection('users').doc(id).update({
        userName: fullName,
        phoneNumber,
        height,
        weight,
      });
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  }

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

  async function uploadImage(imagePath) {
    try {
      const reference = storage().ref(
        `profile_images/${email}/userProfile.png`,
      );
      await reference.putFile(imagePath);
      const url = await storage()
        .ref(`profile_images/${email}/userProfile.png`)
        .getDownloadURL();
      await firestore().collection('profiles').doc(id).set({
        profilePhotoUrl: url,
      });
      console.log('Image uploaded to Firebase storage');
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
    })
      .then(image => {
        uploadImage(image.path);
      })
      .catch(error => {
        console.log(error);
      });
  }

  function choosePhotoFromGallery() {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then(image => {
        uploadImage(image.path);
      })
      .catch(error => {
        console.log(error);
      });
  }

  function showActionSheet() {
    actionSheetRef.current?.show();
  }
  function cancelHandler() {
    return actionSheetRef.current?.hide();
  }

  return (
    <View style={styles.container}>
      <BackNavs style={styles.backButton} onPress={() => navigation.goBack()} />
      <Text style={styles.mainHeading}>Personal Data</Text>

      <Pressable onPress={showActionSheet}>
        <View style={styles.imageView}>
          <Image
            source={
              profilePhoto
                ? {uri: profilePhoto}
                : require('../../../assets/images/blackProfile.png')
            }
            style={styles.image}
          />
        </View>
      </Pressable>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.nameField}>
          <Profile style={styles.icons} width={20} height={20} />
          <TextInput
            style={styles.textInputName}
            placeholder="Full Name"
            value={fullName}
            onChangeText={text => setFullName(text)}
          />
        </View>

        <View style={styles.otherFields}>
          <Phone style={styles.icons} width={20} height={20} />
          <TextInput
            style={styles.textInputPhone}
            placeholder="Phone Number"
            value={phoneNumber}
            onChangeText={text => setPhoneNumber(text)}
          />
        </View>

        <View style={styles.otherFields}>
          <Email style={styles.icons} width={20} height={20} />
          <TextInput
            style={styles.textInputEmail}
            placeholder="Email"
            value={email}
            onChangeText={text => setEmail(text)}
            editable={false}
          />
        </View>

        <View style={styles.otherFields}>
          <Swap style={styles.icons} width={20} height={20} />
          <TextInput
            style={styles.textInputEmail}
            placeholder="height"
            value={height}
            onChangeText={text => setHeight(text)}
          />
        </View>

        <View style={styles.otherFields}>
          <WeightScale style={styles.icons} width={20} height={20} />
          <TextInput
            style={styles.textInputEmail}
            placeholder="weight"
            value={weight}
            onChangeText={text => setWeight(text)}
          />
        </View>
      </ScrollView>

      <ActionSheet ref={actionSheetRef}>
        <View style={styles.actionSheetTextView}>
          <Text style={styles.actionSheetText}>Upload a Photo</Text>
          <Text>Choose Your Profile Photo</Text>
        </View>

        <View style={styles.actionSheetbuttonContainer}>
          <Button
            title="Take Photo From Camera"
            onPress={takePhotoFromCamera}
          />
        </View>

        <View style={styles.actionSheetbuttonContainer}>
          <Button
            title="Pick Photo from gallery"
            onPress={choosePhotoFromGallery}
          />
        </View>

        <View style={styles.actionSheetbuttonContainer}>
          <Button title="Cancel" onPress={cancelHandler} />
        </View>
      </ActionSheet>
      <CustomButton
        title="Save"
        buttonStyle={styles.buttonStyle}
        textStyle={styles.textStyle}
        onPress={updateProfile}
      />
    </View>
  );
}

export default EditProfile;
