import React, {useState} from 'react';
import {Alert, Text, TextInput, View} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import dayjs from 'dayjs';
import {Dropdown} from 'react-native-element-dropdown';
import RNDateTimePicker from '@react-native-community/datetimepicker';

import RectangleRight from '../../../assets/icons/icRectangleRight.svg';
import RightButton from '../../../assets/icons/icRightButton.svg';
import BackNavs from '../../../assets/icons/icBackNavs.svg';
import IconBarbel from '../../../assets/icons/icIconBarbel.svg';
import Difficulty from '../../../assets/icons/icDifficulty.svg';
import IconClock from '../../../assets/icons/icIconClock.svg';
import {styles} from './styles';
import {SCREEN_NAMES} from '../../../utilities/constants/navigationConstants';
import CustomButton from '../../../commonComponents/CustomButton';
import {workoutsArray} from '../../../utilities/constants/dummyData';
import {difficultyArray} from '../../../utilities/constants/dummyData';

function AddSchedule({navigation}) {
  const [chooseWorkout, setChooseWorkout] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [isFocus, setIsFocus] = useState(false);

  function addInDatabase() {
    const date = new Date();
    const formattedTime = dayjs(selectedTime).format('h:mm A');
    const formattedDate = dayjs(date).format('DD-MM-YYYY');

    firestore()
      .collection('workoutSchedules')
      .add({
        workoutName: chooseWorkout,
        difficulty: difficulty,
        workoutTime: formattedTime,
        date: formattedDate,
        checked: false,
      })
      .then(() => {
        Alert.alert('User added!');
      });
    navigation.navigate(SCREEN_NAMES.workoutSchedule);
  }

  return (
    <View style={styles.container}>
      <View style={styles.upperView}>
        <View style={styles.headerView}>
          <BackNavs onPress={() => navigation.goBack()} />
          <Text style={styles.headingText}>Add Schedule</Text>
          <RectangleRight />
          <RightButton style={styles.rightButton} />
        </View>

        {isFocus && (
          <RNDateTimePicker
            mode="time"
            value={selectedTime}
            onChange={(event, selected) => {
              const currentDate = selected || selectedTime;
              setSelectedTime(currentDate);
              setIsFocus(false);
            }}
          />
        )}

        <View style={styles.textInputsView}>
          <Dropdown
            style={[styles.dropdown]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={workoutsArray}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={'Choose Workout'}
            searchPlaceholder="Search..."
            value={chooseWorkout}
            onFocus={() => setIsFocus(false)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setChooseWorkout(item.value);
              setIsFocus(false);
            }}
          />
          <IconBarbel style={styles.icons} width={20} height={20} />

          <Dropdown
            style={[styles.dropdown]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={difficultyArray}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={'Difficulty'}
            searchPlaceholder="Search..."
            value={difficulty}
            onFocus={() => setIsFocus(false)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setDifficulty(item.value);
              setIsFocus(false);
            }}
          />
          <Difficulty style={styles.icons} width={20} height={20} />

          <View style={styles.textInput}>
            <IconClock />
            <TextInput
              placeholder="select workout time"
              editable={false}
              value={dayjs(selectedTime).format('h:mm A')}
              style={styles.textInputValue}
            />
            <CustomButton
              onPress={() => setIsFocus(true)}
              title="Select Time"
              buttonStyle={styles.selectTime}
            />
          </View>
        </View>
      </View>
      <CustomButton
        title="Save"
        buttonStyle={styles.buttonStyle}
        onPress={addInDatabase}
      />
    </View>
  );
}

export default AddSchedule;
