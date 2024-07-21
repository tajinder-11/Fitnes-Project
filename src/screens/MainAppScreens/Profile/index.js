import React, {useState, useEffect} from 'react';
import {Text, View, Image} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {firebase} from '@react-native-firebase/auth';

import DetailNavs from '../../../assets/icons/icDetailNavs.svg';
import ProfilePic from '../../../assets/icons/icProfilePic.svg';
import IconArrowRight from '../../../assets/icons/icIconArrowRight.svg';
import IconMessage from '../../../assets/icons/icIconMessage.svg';
import IconPrivacy from '../../../assets/icons/icIconPrivacy.svg';
import {styles} from './styles';
import {SCREEN_NAMES} from '../../../utilities/constants/navigationConstants';

function Profile({navigation}) {
  const [profilePhoto, setProfilePhoto] = useState();
  const [name, setName] = useState();
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();

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
  });

  useEffect(() => {
    async function getData() {
      const userDocument = await firestore().collection('users').doc(id).get();
      const userName = userDocument._data.userName;
      const userHeight = userDocument._data.height;
      const userWeight = userDocument._data.weight;
      setWeight(userWeight);
      setHeight(userHeight);
      setName(userName);
    }
    getData();
  }, [id]);

  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <Text style={styles.headingText}>Profile</Text>
        <DetailNavs style={styles.DetailNavs} />
      </View>

      <View style={styles.imageAndHeading}>
        <Image
          source={
            profilePhoto
              ? {uri: profilePhoto}
              : require('../../../assets/images/blackProfile.png')
          }
          style={styles.image}
        />

        <View style={styles.textsView}>
          <Text style={styles.nameText}>{name}</Text>
          <Text>Lose a fat program</Text>
        </View>
      </View>

      <View style={styles.heightWeightAgeView}>
        <View style={[styles.height, styles.elevationStyle]}>
          <Text style={styles.numericValues}>{height}</Text>
          <Text>Height</Text>
        </View>
        <View style={[styles.height, styles.elevationStyle]}>
          <Text style={styles.numericValues}>{weight}</Text>
          <Text>weight</Text>
        </View>
        <View style={[styles.height, styles.elevationStyle]}>
          <Text style={styles.numericValues}>22yo</Text>
          <Text>Age</Text>
        </View>
      </View>

      <View style={[styles.cardView, styles.elevationStyle]}>
        <View style={styles.mainView}>
          <ProfilePic style={styles.icons} />
          <Text style={styles.texts}>Personal Data</Text>
          <IconArrowRight
            style={styles.rightIcons}
            onPress={() =>
              navigation.navigate(SCREEN_NAMES.editProfile, {
                profile: profilePhoto,
              })
            }
          />
        </View>
        <View style={styles.contactView}>
          <IconMessage style={styles.icons} />
          <Text style={styles.texts}>Contact Us</Text>
          <IconArrowRight style={styles.rightIcons} />
        </View>
        <View style={styles.contactView}>
          <IconPrivacy style={styles.icons} />
          <Text style={styles.texts}>Privacy Policy</Text>
          <IconArrowRight style={styles.rightIcons} />
        </View>
      </View>
    </View>
  );
}

export default Profile;
