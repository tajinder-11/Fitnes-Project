import React, {useState, useEffect} from 'react';
import {Text, View, Image} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';

import IconCalendar from '../../../assets/icons/icIconCalendar.svg';
import ChangePicture from '../../../assets/icons/icChangePicture.svg';
import BackNavs from '../../../assets/icons/icBackNavs.svg';
import {styles} from './styles';
import {SCREEN_NAMES} from '../../../utilities/constants/navigationConstants';
import {monthOne} from '../../../utilities/constants/dummyData';
import {monthSecond} from '../../../utilities/constants/dummyData';

function ComparePhoto({navigation, route}) {
  const [chooseFirstMonth, setChooseFirstMonth] = useState('');
  const [chooseSecondMonth, setChooseSecondMonth] = useState('');
  const [firstPhoto, setFirstPhoto] = useState(null);
  const [firstMonth, setFirstMonth] = useState(null);
  const [secondPhoto, setSecondPhoto] = useState(null);
  const [secondMonth, setSecondMonth] = useState(null);

  useEffect(() => {
    if (route.params?.selectedPhoto && route.params?.selectedMonth) {
      if (!firstPhoto || !firstMonth) {
        setFirstPhoto(route.params.selectedPhoto);
        setFirstMonth(route.params.selectedMonth);
      } else {
        setSecondPhoto(route.params.selectedPhoto);
        setSecondMonth(route.params.selectedMonth);
      }
    }
  }, [
    route.params?.selectedPhoto,
    route.params?.selectedMonth,
    firstPhoto,
    firstMonth,
  ]);

  const navigateToChoosePhotoScreen = month => {
    navigation.navigate(SCREEN_NAMES.choosePhoto, {selectedMonth: month});
  };

  return (
    <View style={styles.container}>
      <BackNavs style={styles.backButton} />
      <Text style={styles.mainHeading}>Comparison</Text>

      <View style={styles.textInputsView}>
        <Dropdown
          style={[styles.dropdown]}
          placeholderStyle={{
            ...styles.placeholderStyle,
            ...styles.placeholderColor,
          }}
          selectedTextStyle={{
            ...styles.selectedTextStyle,
            ...styles.placeholderColor,
          }}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={monthOne}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={'Select Month 1'}
          searchPlaceholder="Search..."
          value={chooseFirstMonth}
          onChange={item => {
            setChooseFirstMonth(item.value);
            navigateToChoosePhotoScreen(item.value);
          }}
        />
        <IconCalendar style={styles.icons} width={20} height={20} />

        <Dropdown
          style={[styles.dropdown]}
          placeholderStyle={{
            ...styles.placeholderStyle,
            ...styles.placeholderColor,
          }}
          selectedTextStyle={{
            ...styles.selectedTextStyle,
            ...styles.placeholderColor,
          }}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={monthSecond}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={'Select Month 2'}
          searchPlaceholder="Search..."
          value={chooseSecondMonth}
          onChange={item => {
            setChooseSecondMonth(item.value);
            navigateToChoosePhotoScreen(item.value);
          }}
        />
        <IconCalendar style={styles.icons} width={20} height={20} />

        <View style={styles.imagesView}>
          <View style={styles.firstImageView}>
            {firstPhoto && firstMonth ? (
              <Image source={{uri: firstPhoto}} style={styles.image} />
            ) : (
              <Text style={styles.imageText}>No selected images</Text>
            )}
          </View>

          <View style={styles.secondImageView}>
            {secondPhoto && secondMonth ? (
              <Image source={{uri: secondPhoto}} style={styles.image} />
            ) : (
              <Text style={styles.imageText}>No selected images</Text>
            )}
          </View>
        </View>

        <View style={styles.buttonsView}>
          <ChangePicture
            style={styles.changeButtonOne}
            onPress={() => navigateToChoosePhotoScreen(chooseFirstMonth)}
          />
          <ChangePicture
            onPress={() => navigateToChoosePhotoScreen(chooseSecondMonth)}
          />
        </View>
      </View>
    </View>
  );
}

export default ComparePhoto;
