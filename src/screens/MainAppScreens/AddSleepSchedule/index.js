import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import firestore from '@react-native-firebase/firestore';
import dayjs from 'dayjs';

import BackNavs from '../../../assets/icons/icBackNavs.svg';
import IconBed from '../../../assets/icons/icIconBed.svg';
import IconTime from '../../../assets/icons/icIconTime.svg';
import {styles} from './styles';
import {SCREEN_NAMES} from '../../../utilities/constants/navigationConstants';
import {sleepData} from '../../../utilities/constants/dummyData';
import {sleepHoursData} from '../../../utilities/constants/dummyData';
import CustomButton from '../../../commonComponents/CustomButton';

function AddSleepSchedule({navigation, route}) {
  const [sleepTime, setSleepTime] = useState();
  const [sleepHours, setSleepHours] = useState();
  const [title, setTitle] = useState('');

  const sleep = route.params.selectedDate;

  function addInDatabase(id) {
    firestore()
      .collection('sleepSchedule')
      .add({
        title: title,
        date: sleep,
        day: dayjs(sleep, 'DD-MM-YYYY').format('ddd'),
        sleepTime: sleepTime,
        sleepHours: sleepHours,
        checked: false,
      })
      .then(() => {
        console.log('Sleep Schedule Added');
      });
    navigation.navigate(SCREEN_NAMES.sleepSchedule);
  }

  return (
    <View style={styles.container}>
      <View style={styles.textInputsView}>
        <BackNavs
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.mainHeading}>Add Schedule</Text>
        <Dropdown
          style={[styles.dropdown]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={sleepData}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={'Sleep Time'}
          searchPlaceholder="Search..."
          value={sleepTime}
          onChange={item => {
            setSleepTime(item.value);
          }}
        />

        <IconBed style={styles.icons} width={20} height={20} />

        <Dropdown
          style={[styles.dropdown]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={sleepHoursData}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={'Hours of Sleep'}
          searchPlaceholder="Search..."
          value={sleepHours}
          onChange={item => {
            setSleepHours(item.value);
          }}
        />
        <IconTime style={styles.icons2} width={20} height={20} />

        <View style={styles.textInput}>
          <TextInput
            placeholder="Title"
            onChangeText={text => setTitle(text)}
            value={title}
          />
        </View>
      </View>

      <CustomButton
        title="Add"
        buttonStyle={styles.buttonStyle}
        onPress={addInDatabase}
      />
    </View>
  );
}

export default AddSleepSchedule;
