import {useEffect} from 'react';
import * as SplashScreen from 'expo-splash-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {SCREEN_NAMES} from '../../../utilities/constants/navigationConstants';

function Splash({navigation}) {
  SplashScreen.preventAutoHideAsync()
    .then(result =>
      console.log(`SplashScreen.preventAutoHideAsync() succeeded: ${result}`),
    )
    .catch(console.warn);

  useEffect(() => {
    setTimeout(async () => {
      await SplashScreen.hideAsync();
    }, 2000);
  }, []);

  useEffect(() => {
    const getUser = async () => {
      try {
        const savedUser = await AsyncStorage.getItem('user_logined');
        const currentUser = JSON.parse(savedUser);
        if (currentUser) {
          navigation.replace(SCREEN_NAMES.bottomTab);
        } else {
          navigation.navigate(SCREEN_NAMES.onboarding);
        }
        await SplashScreen.hideAsync();
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  });
}

export default Splash;
