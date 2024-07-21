import React, {useState, useEffect} from 'react';
import {Text, View, FlatList, Pressable, Modal} from 'react-native';
import dayjs from 'dayjs';
import {Calendar} from 'react-native-calendars';
import firestore from '@react-native-firebase/firestore';

import BackButton from '../../../assets/icons/icBackButton.svg';
import ArrowLeft from '../../../assets/icons/icArrowLeft.svg';
import RectangleRight from '../../../assets/icons/icRectangleRight.svg';
import RightButton from '../../../assets/icons/icRightButton.svg';
import Cross from '../../../assets/icons/icCross.svg';
import Delete from '../../../assets/icons/icDelete.svg';
import Add from '../../../assets/icons/icAdd.svg';
import ModalButton from '../../../commonComponents/ModalButton';
import {styles} from './styles';
import {SCREEN_NAMES} from '../../../utilities/constants/navigationConstants';

function WorkoutSchedule({navigation, route}) {
  const date = new Date();
  const [selected, setSelected] = useState(dayjs(date).format('DD-MM-YYYY'));
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [selectedWorkout, setSelectedWorkout] = useState();
  const [users, setUsers] = useState();

  useEffect(() => {
    const subscriber = firestore()
      .collection('workoutSchedules')
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

  function deleteHandler() {
    if (selectedWorkout) {
      firestore()
        .collection('workoutSchedules')
        .doc(selectedWorkout.key)
        .delete()
        .then(() => {
          console.log('Document successfully deleted!');
          setModalIsVisible(false);
        })
        .catch(error => {
          console.error('Error deleting document: ', error);
        });
    }
  }

  function renderItems(itemData) {
    return (
      <Pressable
        onPress={() => {
          setModalIsVisible(true);
          setSelectedWorkout(itemData.item);
        }}>
        {selected === itemData.item.date && (
          <View style={styles.textView}>
            <View style={styles.itemContainer}>
              <Text style={styles.text}>{itemData.item.workoutName}</Text>
              <Text style={styles.timeText}>{itemData.item.workoutTime}</Text>
            </View>
          </View>
        )}
      </Pressable>
    );
  }

  return (
    <View style={styles.container}>
      <Modal
        transparent={true}
        visible={modalIsVisible}
        style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.modalHeaderView}>
            <Cross
              style={styles.cross}
              onPress={() => setModalIsVisible(false)}
            />
            <Text style={styles.modalHeadingText}>Workout Schedule</Text>
            <Delete style={styles.delete} onPress={deleteHandler} />
          </View>
          {selectedWorkout && (
            <View style={styles.selectedItemContainer}>
              <Text style={styles.selectedItemTextHeading}>
                {selectedWorkout.workoutName}
              </Text>

              <Text style={styles.selectedItemText}>
                {selectedWorkout.workoutTime}
              </Text>
            </View>
          )}
          <ModalButton>mark as Read</ModalButton>
        </View>
      </Modal>

      {/* Screen Data */}
      <View style={styles.headerView}>
        <BackButton
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        />
        <ArrowLeft style={styles.leftArrrow} />
        <Text style={styles.headingText}>Workout Schedule</Text>
        <RectangleRight />
        <RightButton style={styles.rightButton} />
      </View>

      <View style={styles.calendarView}>
        <Calendar
          onDayPress={day => {
            setSelected(dayjs(day.dateString).format('DD-MM-YYYY'));
          }}
          markedDates={{
            [selected]: {
              selected: true,
              disableTouchEvent: true,
              selectedDotColor: 'orange',
            },
          }}
        />
      </View>
      <FlatList data={users} renderItem={renderItems} />

      <Add
        onPress={() => navigation.navigate(SCREEN_NAMES.addSchedule)}
        style={styles.addButton}
      />
    </View>
  );
}

export default WorkoutSchedule;
