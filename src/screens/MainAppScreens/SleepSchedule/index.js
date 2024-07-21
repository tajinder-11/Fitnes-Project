import React, {useState, useEffect} from 'react';
import {Image, Text, View, Pressable, FlatList} from 'react-native';
import {Calendar} from 'react-native-calendars';
import firestore from '@react-native-firebase/firestore';
import dayjs from 'dayjs';

import BackNavs from '../../../assets/icons/icBackNavs.svg';
import CardImage from '../../../assets/icons/icCardImage.svg';
import AddButton from '../../../assets/icons/icAddButton.svg';
import {styles} from './styles';
import {SCREEN_NAMES} from '../../../utilities/constants/navigationConstants';
import CustomButton from '../../../commonComponents/CustomButton';

function SleepSchedule({navigation}) {
  const date = new Date();
  const [users, setUsers] = useState([]);
  const [selected, setSelected] = useState(dayjs(date).format('DD-MM-YYYY'));

  useEffect(() => {
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
  }, []);

  function renderItems(itemData) {
    return (
      <Pressable onPress={() => {}}>
        {selected === itemData.item.date && (
          <View style={styles.itemContainer}>
            <View style={styles.datas}>
              <Image
                style={styles.image}
                source={require('../../../assets/images/bed.png')}
              />
              <View style={styles.titleTimeView}>
                <Text style={styles.textHeading}>{itemData.item.title}</Text>
                <Text style={styles.text1}>{itemData.item.sleepTime}</Text>
              </View>
            </View>
          </View>
        )}
      </Pressable>
    );
  }

  return (
    <View style={styles.container}>
      <BackNavs style={styles.backButton} onPress={() => navigation.goBack()} />
      <Text style={styles.mainHeading}>Sleep Schedule</Text>
      <View>
        <Image
          source={require('../../../assets/images/background.png')}
          style={styles.backCard}
        />
        <View style={styles.textView}>
          <Text>Ideal hours for sleep</Text>
          <Text>8hours 30minutes</Text>
        </View>
        <CardImage style={styles.cardImage} />
      </View>

      <CustomButton title="Learn More" buttonStyle={styles.buttonStyle} />
      <Text style={styles.scheduleText}>Your Schedule</Text>
      <View style={styles.calendarView}>
        <Calendar
          onDayPress={day => {
            setSelected(dayjs(day.dateString).format('DD-MM-YYYY'));
          }}
          markedDates={{
            [selected]: {
              selected: true,
              disableTouchEvent: false,
              selectedDotColor: 'orange',
            },
          }}
        />
      </View>
      <FlatList data={users} renderItem={renderItems} />

      <AddButton
        onPress={() =>
          navigation.navigate(SCREEN_NAMES.addSleepSchedule, {
            selectedDate: selected,
          })
        }
        style={styles.addButton}
      />
    </View>
  );
}

export default SleepSchedule;
