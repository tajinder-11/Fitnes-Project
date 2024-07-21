import React, {useState} from 'react';
import {Text, TextInput, View, Pressable, Alert} from 'react-native';

import {LoginManager, AccessToken} from 'react-native-fbsdk-next';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Lock from '../../../assets/icons/icLock.svg';
import GoogleLogo from '../../../assets/icons/icGoogleLogo.svg';
import FacebookLogo from '../../../assets/icons/icFacebookLogo.svg';
import HidePassword from '../../../assets/icons/icHidePassword.svg';
import GMSFIT from '../../../assets/icons/icGmsFit.svg';
import Email from '../../../assets/icons/icEmail.svg';
import CustomButton from '../../../commonComponents/CustomButton';
import colors from '../../../utilities/constants/globalColors';
import styles from './styles';
import {SCREEN_NAMES} from '../../../utilities/constants/navigationConstants';

function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  function toggleShowPassword() {
    setShowPassword(!showPassword);
  }

  function loginHandler() {
    if (!email && !password) {
      Alert.alert('Error', 'Please fill the credentials');
    } else {
      auth()
        .signInWithEmailAndPassword(email, password)
        .then(response => {
          const id = response.user.uid;
          storeUserToAsyncStorage(id, email);
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            Alert.alert('Error', 'This Email is already in use');
          }

          if (error.code === 'auth/invalid-email') {
            Alert.alert('Error', 'That email address is invalid!');
          }
          Alert.alert(error);
        });
      navigation.navigate(SCREEN_NAMES.registerTwo);
    }
  }

  GoogleSignin.configure(
    {
      webClientId:
        '803598167086-4drpmg67rntg2cegmcouictptqjejtam.apps.googleusercontent.com',
    },
    [],
  );

  async function googlebuttonHandler() {
    try {
      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
      const {idToken} = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      return auth().signInWithCredential(googleCredential);
    } catch (error) {
      Alert.alert('Google sign-in error:', error);
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
      Alert.alert(error);
    }
  };

  async function onFacebookButtonPress() {
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

    await storeUserToAsyncStorage(
      userCredential.user.uid,
      userCredential.additionalUserInfo.profile.email,
    );
    return auth().signInWithCredential(facebookCredential);
  }

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView>
        <View style={styles.upperView}>
          <GMSFIT style={styles.icon} />
          <Text style={styles.text}>Welcome Back</Text>

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

          <View style={styles.textFieldsView}>
            <Lock />
            <TextInput
              style={styles.textInputs}
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
          <Pressable
            onPress={() => navigation.navigate(SCREEN_NAMES.forgetPassword)}>
            <Text style={styles.forgot}>Forgot your password</Text>
          </Pressable>
        </View>
      </KeyboardAwareScrollView>
      <View style={styles.bottomView}>
        <CustomButton
          buttonStyle={styles.buttonStyle}
          textStyle={styles.textStyle}
          title="Login"
          onPress={loginHandler}
        />

        <View style={styles.linesView}>
          <View style={styles.leftLine} />
          <View>
            <Text style={styles.middleText}>or</Text>
          </View>
          <View style={styles.rightLine} />
        </View>

        <View style={styles.googleFacebookView}>
          <Pressable style={styles.google} onPress={googlebuttonHandler}>
            <GoogleLogo height={20} width={20} />
          </Pressable>
          <View style={styles.facebook}>
            <Pressable
              onPress={() =>
                onFacebookButtonPress().then(() =>
                  navigation.navigate(SCREEN_NAMES.bottomTab),
                )
              }>
              <FacebookLogo height={20} width={20} />
            </Pressable>
          </View>
        </View>

        <View style={styles.bottomTextViewContainer}>
          <View style={styles.bottomTextView}>
            <Text style={styles.haveAccount}>Don't have an account yet?</Text>
            <Pressable
              style={({pressed}) => [
                pressed && styles.pressed1,
                styles.registerPressable,
              ]}
              onPress={() => navigation.navigate(SCREEN_NAMES.register)}>
              <Text style={styles.pressableText}>Register</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}

export default Login;
