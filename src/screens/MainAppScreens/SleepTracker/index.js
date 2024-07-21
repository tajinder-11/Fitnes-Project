import React, {useEffect, useState} from 'react';
import {FlatList, Text, View, Image} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {LineChart} from 'react-native-gifted-charts';

import BackNavs from '../../../assets/icons/icBackNavs.svg';
import {styles} from './styles';
import {SCREEN_NAMES} from '../../../utilities/constants/navigationConstants';
import {data} from '../../../utilities/constants/dummyData';
import colors from '../../../utilities/constants/globalColors';
import CustomButton from '../../../commonComponents/CustomButton';

function SleepTracker({navigation}) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getData();
  });

  async function getData() {
    const subscriber = firestore()
      .collection('sleepSchedule')
      .onSnapshot(querySnapshot => {
        const user = [];

        querySnapshot.forEach(documentSnapshot => {
          user.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });
        setUsers(user);
      });

    return () => subscriber();
  }

  function renderItems(itemData) {
    return (
      <View style={styles.itemContainer}>
        <Image
          style={styles.image}
          source={require('../../../assets/images/bed.png')}
        />

        <View style={styles.titleTimeDate}>
          <View style={styles.titleTimeView}>
            <Text style={styles.textHeading}>{itemData.item.title}</Text>
            <Text style={styles.text}>{itemData.item.sleepTime}</Text>
          </View>
          <Text style={styles.date}>Date: {itemData.item.date}</Text>
        </View>
      </View>
    );
  }

  function checkButtonHandler() {
    navigation.navigate(SCREEN_NAMES.sleepSchedule);
  }

  return (
    <View style={styles.container}>
      <BackNavs style={styles.backButton} onPress={() => navigation.goBack()} />
      <Text style={styles.mainHeading}>Sleep Tracker</Text>
      <View style={styles.graph}>
        <LineChart
          thickness={4}
          data={data}
          areaChart
          curved
          width={300}
          maxValue={10}
          color={colors.graphGreen}
          startFillColor={colors.greyExtraLight}
          animateOnDataChange
          animationDuration={1000}
          onDataChangeAnimationDuration={300}
          hideDataPoints={true}
          rulesColor="white"
          yAxisLabelText="fjsldfjklfda"
        />
      </View>
      <Image
        source={require('../../../assets/images/bg.png')}
        style={styles.cardImage}
      />

      <View style={styles.headingView}>
        <Text style={styles.headingText}>Last night sleep</Text>
        <Text style={styles.headingText}>8h 20min</Text>
      </View>
      <Image
        source={require('../../../assets/images/whiteGraph.png')}
        style={styles.sleepGraph}
      />

      <View style={styles.targetView}>
        <Text style={styles.targetText}>Today Target</Text>
        <CustomButton
          buttonStyle={styles.buttonStyle}
          title="Check"
          onPress={checkButtonHandler}
        />
      </View>

      <Text style={styles.todaySchedule}>Today Schedule</Text>

      <FlatList data={users} renderItem={renderItems} />

      {/* <>
        <Text style={styles.sleepText}>No sleep Schedule added for today</Text>
        <AddSchedule
          style={styles.add}
          onPress={() => navigation.navigate(SCREEN_NAMES.sleepSchedule)}
        />
      </> */}
    </View>
  );
}

export default SleepTracker;
