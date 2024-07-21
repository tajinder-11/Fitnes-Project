import React from 'react';
import {StyleSheet, View, Text, Platform} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../screens/MainAppScreens/Home/index';
import Profile from '../screens/MainAppScreens/Profile/index';
import HomePic from '../assets/icons/icHomePic.svg';
import Activity from '../assets/icons/icActivity.svg';
import ActivityActive from '../assets/icons/icActivityActive.svg';
import Camera from '../assets/icons/icCamera.svg';
import ProfileIcon from '../assets/icons/icProfileIcon.svg';
import HomeActive from '../assets/icons/icHomeActive.svg';
import ProfileActive from '../assets/icons/icProfileActive.svg';
import CameraActive from '../assets/icons/icCameraActive.svg';
import ActivityTracker from '../screens/MainAppScreens/ActivityTracker/index';
import ProgressPhoto from '../screens/MainAppScreens/ProgressPhoto/index';
import colors from '../utilities/constants/globalColors';
import fonts from '../utilities/constants/fonts';
import {SCREEN_NAMES} from '../utilities/constants/navigationConstants';

const BottomTab = createBottomTabNavigator();
function BottomTabNavigator({navigation}) {
  return (
    <>
      <BottomTab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: styles.tabBar,
        }}>
        <BottomTab.Screen
          name={SCREEN_NAMES.home}
          component={Home}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <View style={styles.iconContainer}>
                  {focused ? (
                    <HomeActive Height={24} width={24} />
                  ) : (
                    <HomePic Height={24} width={24} />
                  )}
                  <Text style={styles.iconText}>Index</Text>
                </View>
              );
            },
          }}
        />

        <BottomTab.Screen
          name={SCREEN_NAMES.activityTracker}
          component={ActivityTracker}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <View style={styles.iconContainer}>
                  {focused ? (
                    <ActivityActive height={24} width={24} />
                  ) : (
                    <Activity height={24} width={24} />
                  )}
                  <Text style={styles.iconText}>Calendar</Text>
                </View>
              );
            },
          }}
        />

        <BottomTab.Screen
          name={SCREEN_NAMES.progressPhoto}
          component={ProgressPhoto}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <View style={styles.iconContainer}>
                  {focused ? (
                    <CameraActive height={24} width={24} />
                  ) : (
                    <Camera height={24} width={24} />
                  )}
                  <Text style={styles.iconText}>Focuse</Text>
                </View>
              );
            },
          }}
        />

        <BottomTab.Screen
          name={SCREEN_NAMES.profile}
          component={Profile}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <View style={styles.iconContainer}>
                  {focused ? (
                    <ProfileActive height={24} width={24} />
                  ) : (
                    <ProfileIcon height={24} width={24} />
                  )}
                  <Text style={styles.iconText}>Profile</Text>
                </View>
              );
            },
          }}
        />
      </BottomTab.Navigator>
    </>
  );
}

export default BottomTabNavigator;

const styles = StyleSheet.create({
  iconContainer: {alignItems: 'center', marginTop: 20},
  addScreenIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.purple7,
    width: Platform.OS === 'ios' ? 50 : 70,
    height: Platform.OS === 'ios' ? 50 : 70,
    top: Platform.OS === 'ios' ? -20 : -20,
    borderRadius: Platform.OS === 'ios' ? 25 : 35,
  },
  iconText: {
    color: colors.white1,
    paddingVertical: -10,
    fontSize: 14,
    fontFamily: fonts.regular,
  },
  tabBar: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 85,
    backgroundColor: colors.white1,
  },
});
