import React from 'react';
import {Text, Pressable} from 'react-native';
import {styles} from './styles';

const ViewButton = ({onPress, title, buttonStyle, textStyle}) => {
  return (
    <Pressable onPress={onPress} style={[styles.button, buttonStyle]}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </Pressable>
  );
};

export default ViewButton;
