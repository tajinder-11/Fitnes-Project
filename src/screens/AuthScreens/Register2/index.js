import React, {useState} from 'react';
import {ScrollView, Text, TextInput, View, Alert} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {firebase} from '@react-native-firebase/auth';

import VectorSection from '../../../assets/icons/icVectorSection.svg';
import User from '../../../assets/icons/icUser.svg';
import Calendar from '../../../assets/icons/icCalendar.svg';
import WeightScale from '../../../assets/icons/icWeightScale.svg';
import Swap from '../../../assets/icons/icSwap.svg';
import colors from '../../../utilities/constants/globalColors';
import CustomButton from '../../../commonComponents/CustomButton/index';
import {styles} from './styles';
import {SCREEN_NAMES} from '../../../utilities/constants/navigationConstants';

function Register2({navigation}) {
  const [gender, setGender] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');

  const user = firebase.auth().currentUser;
  const id = user.uid;

  function addInDatabase() {
    if ((!gender, !birthDate, !weight, !height)) {
      Alert.alert('Error', 'Please fill the inputs ');
    } else {
      if (id) {
        firestore()
          .collection('users')
          .doc(id)
          .update({
            gender,
            birthDate,
            weight,
            height,
          })
          .then(() => {
            Alert.alert('User added!');
          });
        navigation.navigate(SCREEN_NAMES.confirmRegistration);
      }
    }
  }

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <VectorSection style={styles.image} />
        <Text style={styles.heading}>Let's Complete Your Profile</Text>
        <Text style={styles.description}>
          It will help us to know more about you!
        </Text>

        <View style={styles.textInputsView}>
          <View style={styles.textInputFields}>
            <User />
            <TextInput
              style={styles.textInput}
              placeholder="Choose Gender"
              placeholderTextColor={colors.grey}
              onChangeText={text => setGender(text)}
              value={gender}
            />
          </View>
          <View style={styles.textInputFields}>
            <Calendar />
            <TextInput
              style={styles.textInput}
              placeholder="Date of Birth"
              placeholderTextColor={colors.grey}
              onChangeText={text => setBirthDate(text)}
              value={birthDate}
            />
          </View>

          <View style={styles.parentWeightView}>
            <View style={styles.weightField}>
              <WeightScale />
              <TextInput
                style={styles.textInput}
                placeholder="Your Weight"
                placeholderTextColor={colors.grey}
                onChangeText={text => setWeight(text)}
                value={weight}
              />
            </View>
            <View style={styles.kgView}>
              <Text style={styles.kgText}>KG</Text>
            </View>
          </View>

          <View style={styles.parentWeightView}>
            <View style={styles.weightField}>
              <Swap />
              <TextInput
                style={styles.textInput}
                placeholder="Your Height"
                placeholderTextColor={colors.grey}
                onChangeText={text => setHeight(text)}
                value={height}
              />
            </View>
            <View style={styles.kgView}>
              <Text style={styles.kgText}>CM</Text>
            </View>
          </View>
        </View>
        <CustomButton
          onPress={addInDatabase}
          title="Custom Button"
          buttonStyle={styles.buttonStyle}
          textStyle={styles.textStyle}
        />
      </ScrollView>
    </View>
  );
}

export default Register2;
