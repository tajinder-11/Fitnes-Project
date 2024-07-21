import React from 'react';
import {Text, Pressable} from 'react-native';
import {styles} from './styles';
import colors from '../../utilities/constants/globalColors';
import LinearGradient from 'react-native-linear-gradient';

const CustomButton = ({onPress, title, buttonStyle, textStyle}) => {
  return (
    <Pressable onPress={onPress}>
      <LinearGradient
        colors={[colors.gradientPurpleFour, colors.gradientPurpleFive]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={[styles.button, buttonStyle]}>
        <Text style={[styles.text, textStyle]}>{title}</Text>
      </LinearGradient>
    </Pressable>
  );
};

export default CustomButton;
