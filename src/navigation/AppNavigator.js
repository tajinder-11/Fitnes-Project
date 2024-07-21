import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Onboarding from '../screens/AuthScreens/Onboarding/index';
import Register from '../screens/AuthScreens/Register/Index';
import Register2 from '../screens/AuthScreens/Register2/index';
import ConfirmRegistration from '../screens/MainAppScreens/ConfirmRegistration';
import SuccessRegistration from '../screens/MainAppScreens/SuccessRegistration/index';
import BottomTabNavigator from '../navigation/BottomTabNavigator';
import WorkoutDetails_1 from '../screens/MainAppScreens/WorkoutDetails_1';
import WorkoutDetails_2 from '../screens/MainAppScreens/WorkoutDetails_2';
import ActivityTracker from '../screens/MainAppScreens/ActivityTracker/index';
import Login from '../screens/AuthScreens/Login/index';
import AddSchedule from '../screens/MainAppScreens/AddSchedule/index';
import WorkoutTracker from '../screens/MainAppScreens/WorkoutTracker/index';
import WorkoutSchedule from '../screens/MainAppScreens/WorkoutSchedule/index';
import SleepTracker from '../screens/MainAppScreens/SleepTracker/index';
import AddSleepSchedule from '../screens/MainAppScreens/AddSleepSchedule/index';
import SleepSchedule from '../screens/MainAppScreens/SleepSchedule/index';
import ComparePhoto from '../screens/MainAppScreens/ComparePhoto/index';
import EditProfile from '../screens/MainAppScreens/EditProfile/index';
import ForgetPassword from '../screens/AuthScreens/ForgetPassword/index';
import ChoosePhoto from '../screens/MainAppScreens/ChoosePhoto/index';
import Splash from '../screens/MainAppScreens/Splash/index';
import {SCREEN_NAMES} from '../utilities/constants/navigationConstants';

const AppStack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <>
      <AppStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <AppStack.Screen name={SCREEN_NAMES.splash} component={Splash} />
        <AppStack.Screen
          name={SCREEN_NAMES.onboarding}
          component={Onboarding}
        />

        <AppStack.Screen name={SCREEN_NAMES.login} component={Login} />
        <AppStack.Screen
          name={SCREEN_NAMES.forgetPassword}
          component={ForgetPassword}
        />
        <AppStack.Screen name={SCREEN_NAMES.register} component={Register} />
        <AppStack.Screen
          name={SCREEN_NAMES.registerTwo}
          component={Register2}
        />
        <AppStack.Screen
          name={SCREEN_NAMES.confirmRegistration}
          component={ConfirmRegistration}
        />
        <AppStack.Screen
          name={SCREEN_NAMES.successRegistration}
          component={SuccessRegistration}
        />
        <AppStack.Screen
          name={SCREEN_NAMES.bottomTab}
          component={BottomTabNavigator}
        />
        <AppStack.Screen
          name={SCREEN_NAMES.activityTracker}
          component={ActivityTracker}
        />
        <AppStack.Screen
          name={SCREEN_NAMES.workoutTracker}
          component={WorkoutTracker}
        />
        <AppStack.Screen
          name={SCREEN_NAMES.workoutDetilsOne}
          component={WorkoutDetails_1}
        />
        <AppStack.Screen
          name={SCREEN_NAMES.workoutDetailsTwo}
          component={WorkoutDetails_2}
        />
        <AppStack.Screen
          name={SCREEN_NAMES.workoutSchedule}
          component={WorkoutSchedule}
        />
        <AppStack.Screen
          name={SCREEN_NAMES.addSchedule}
          component={AddSchedule}
        />
        <AppStack.Screen
          name={SCREEN_NAMES.sleepTracker}
          component={SleepTracker}
        />
        <AppStack.Screen
          name={SCREEN_NAMES.sleepSchedule}
          component={SleepSchedule}
        />
        <AppStack.Screen
          name={SCREEN_NAMES.addSleepSchedule}
          component={AddSleepSchedule}
        />
        <AppStack.Screen
          name={SCREEN_NAMES.comparePhoto}
          component={ComparePhoto}
        />
        <AppStack.Screen
          name={SCREEN_NAMES.choosePhoto}
          component={ChoosePhoto}
        />
        <AppStack.Screen
          name={SCREEN_NAMES.editProfile}
          component={EditProfile}
        />
      </AppStack.Navigator>
    </>
  );
}

export default AppNavigator;
