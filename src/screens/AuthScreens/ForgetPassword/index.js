import React, {useState} from 'react';
import {View, Text, TextInput, Alert} from 'react-native';
import auth from '@react-native-firebase/auth';

import BackNavs from '../../../assets/icons/icBackNavs.svg';
import Email from '../../../assets/icons/icEmail.svg';
import {styles} from './styles';
import {SCREEN_NAMES} from '../../../utilities/constants/navigationConstants';
import CustomButton from '../../../commonComponents/CustomButton';
import colors from '../../../utilities/constants/globalColors';

function ForgetPassword({navigation}) {
  const [email, setEmail] = useState();

  const passwordReset = async () => {
    try {
      await auth().sendPasswordResetEmail(email);
      Alert.alert(
        'Password Reset Email Sent',
        'Please check your email to reset your password.',
      );
      navigation.navigate(SCREEN_NAMES.login);
    } catch (error) {
      console.error('Error sending password reset email:', error);
      Alert.alert(
        'Error',
        'Failed to send password reset email. Please try again later.',
      );
    }
  };

  return (
    <View style={styles.container}>
      <BackNavs style={styles.backButton} onPress={() => navigation.goBack()} />

      <Text style={styles.heading}>Forget Password</Text>
      <View style={styles.textFieldsView}>
        <Email />
        <TextInput
          style={styles.textInputs}
          placeholder="Email"
          placeholderTextColor={colors.grey}
          onChangeText={text => setEmail(text)}
          value={email}
        />
      </View>

      <CustomButton
        title="Send Email"
        buttonStyle={styles.buttonStyle}
        textStyle={styles.textStyle}
        onPress={passwordReset}
      />
    </View>
  );
}

export default ForgetPassword;
