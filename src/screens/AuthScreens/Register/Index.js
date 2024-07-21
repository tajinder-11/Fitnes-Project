import React, {useState, useEffect} from 'react';
import {Text, TextInput, View, Pressable, Alert} from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {LoginManager, AccessToken} from 'react-native-fbsdk-next';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import Profile from '../../../assets/icons/icProfile.svg';
import Phone from '../../../assets/icons/icPhone.svg';
import Email from '../../../assets/icons/icEmail.svg';
import Lock from '../../../assets/icons/icLock.svg';
import GoogleLogo from '../../../assets/icons/icGoogleLogo.svg';
import FacebookLogo from '../../../assets/icons/icFacebookLogo.svg';
import HidePassword from '../../../assets/icons/icHidePassword.svg';
import styles from './styles';
import {SCREEN_NAMES} from '../../../utilities/constants/navigationConstants';
import CustomButton from '../../../commonComponents/CustomButton';
import colors from '../../../utilities/constants/globalColors';

function Register({navigation}) {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [userUID, setUserUID] = useState();
  const [userEmailId, setUserEmailId] = useState();

  function toggleShowPassword() {
    setShowPassword(!showPassword);
  }

  function addInDatabase(id) {
    firestore()
      .collection('users')
      .doc(id)
      .set({
        userName: userName,
        email: email,
        phoneNumber: phoneNumber,
        checked: false,
      })
      .then(() => {
        Alert.alert('User added!');
      });
  }

  function signupHandler() {
    if (!userName && !password && !email && !phoneNumber) {
      Alert.alert('Error', 'Please check your entered inputs', [
        {
          text: 'cancel',
          onPress: () => console.log('cancel Pressed'),
          style: 'cancel',
        },
      ]);
    } else {
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then(user => {
          const id = user.user.uid;
          addInDatabase(id);
          Alert.alert('User account created & signed in!');
          storeUserToAsyncStorage(id, email);
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            Alert.alert('That email address is already in use!');
          }

          if (error.code === 'auth/invalid-email') {
            Alert.alert('That email address is invalid!');
          }

          Alert.alert(error);
        });

      navigation.navigate(SCREEN_NAMES.registerTwo);
    }
  }

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '803598167086-20eco5dan16hhh69314th1hfk2cobet1.apps.googleusercontent.com',
    });
  }, []);

  async function onGoogleButtonPress() {
    await GoogleSignin.hasPlayServices({
      showPlayServicesUpdateDialog: true,
    });
    const {idToken} = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    return auth().signInWithCredential(googleCredential);
  }

  const handleButtonClick = () => {
    if (isButtonClicked) {
      Alert.alert('Alert', 'Button already clicked!');
    } else {
      setIsButtonClicked(true);
    }
  };

  async function storeUserDatatoFirebase(uid, fullName) {
    try {
      await firestore().collection('users').doc(uid).set({
        email: userEmailId,
        id: userUID,
        userName: fullName,
      });
    } catch (error) {
      Alert.alert('Error storing user data in Firebase:', error);
    }
  }

  const storeUserToAsyncStorage = async (uid, userEmail) => {
    const value = {
      id: uid,
      email: userEmail,
    };
    try {
      await AsyncStorage.setItem('user_logined', JSON.stringify(value));
    } catch (error) {
      Alert(error);
    }
  };

  async function onFacebookButtonPress() {
    try {
      const result = await LoginManager.logInWithPermissions([
        'public_profile',
        'email',
      ]);
      if (result.isCancelled) {
        throw 'User cancelled the login process';
      }

      const data = await AccessToken.getCurrentAccessToken();
      if (!data) {
        throw 'Something went wrong obtaining access token';
      }

      const facebookCredential = auth.FacebookAuthProvider.credential(
        data.accessToken,
      );
      const userCredential = await auth().signInWithCredential(
        facebookCredential,
      );

      if (userCredential.additionalUserInfo) {
        setUserEmailId(userCredential.additionalUserInfo.profile.email);
        setUserUID(userCredential.user.uid);
        setUserName(userCredential.user.displayName);

        await storeUserToAsyncStorage(
          userCredential.user.uid,
          userCredential.additionalUserInfo.profile.email,
        );

        storeUserDatatoFirebase(
          userCredential.user.uid,
          userCredential.additionalUserInfo.profile.email,
          userCredential.user.displayName,
        );
      }
    } catch (error) {
      Alert.alert('Facebook login error:', error);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hey There,</Text>
      <Text style={styles.text2}>Create an Account</Text>

      <KeyboardAwareScrollView>
        <View style={styles.fieldsView}>
          <View style={styles.textFieldsView}>
            <Profile style={styles.icons} width={20} height={20} />
            <TextInput
              style={styles.textInput}
              placeholder="Full Name"
              placeholderTextColor={colors.grey}
              onChangeText={text => setUserName(text)}
              value={userName}
            />
          </View>

          <View style={styles.textFieldsView}>
            <Phone style={styles.icons} width={20} height={20} />
            <TextInput
              style={styles.textInput}
              placeholder="Phone Number"
              placeholderTextColor={colors.grey}
              onChangeText={text => setPhoneNumber(text)}
              value={phoneNumber}
            />
          </View>

          <View style={styles.textFieldsView}>
            <Email style={styles.icons} width={20} height={20} />
            <TextInput
              style={styles.textInput}
              placeholder="Email"
              placeholderTextColor={colors.grey}
              onChangeText={text => setEmail(text)}
              value={email}
            />
          </View>

          <View style={styles.textFieldsView}>
            <Lock style={styles.icons} width={20} height={20} />
            <TextInput
              style={styles.textInput}
              placeholder="Password"
              placeholderTextColor={colors.grey}
              onChangeText={text => setPassword(text)}
              value={password}
              secureTextEntry={!showPassword}
            />
            <HidePassword
              style={styles.hidePassword}
              width={20}
              height={20}
              onPress={toggleShowPassword}
            />
          </View>

          <View style={styles.privacyPolicyView}>
            <View style={styles.buttonView}>
              <Pressable
                style={({pressed}) => [
                  pressed && styles.pressedButton,
                  isButtonClicked && styles.clickedButton,
                ]}
                onPress={handleButtonClick}>
                <Text />
              </Pressable>
            </View>
            <Text style={styles.privacyPolicyText}>
              By continuing you accept our privacy policy and Term of use
            </Text>
          </View>
        </View>
      </KeyboardAwareScrollView>

      <View style={styles.bottomView}>
        <CustomButton
          buttonStyle={styles.buttonStyle}
          textStyle={styles.textStyle}
          title="Register"
          onPress={signupHandler}
        />

        <View style={styles.linesView}>
          <View style={styles.leftLine} />
          <View>
            <Text style={styles.middleText}>or</Text>
          </View>
          <View style={styles.rightLine} />
        </View>

        <View style={styles.googleFacebookView}>
          <Pressable
            style={styles.google}
            onPress={() =>
              onGoogleButtonPress().then(() =>
                console.log('Signed in with Google!'),
              )
            }>
            <GoogleLogo height={20} width={20} />
          </Pressable>

          <View style={styles.facebook}>
            <Pressable
              onPress={() =>
                onFacebookButtonPress().then(
                  () => navigation.navigate(SCREEN_NAMES.registerTwo),
                  console.log('Signed in with Facebook!'),
                )
              }>
              <FacebookLogo height={20} width={20} />
            </Pressable>
          </View>
        </View>

        <View style={styles.bottomTextViewContainer}>
          <View style={styles.bottomTextView}>
            <Text style={styles.haveAccount}>Already have an account?</Text>
            <Pressable
              style={({pressed}) => [
                pressed && styles.pressed1,
                styles.registerPressable,
              ]}
              onPress={() => {
                navigation.navigate(SCREEN_NAMES.login);
              }}>
              <Text style={styles.pressableText}>Login</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}

export default Register;
