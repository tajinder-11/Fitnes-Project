import React from 'react';
import {Pressable, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './styles';

class ModalButton extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Pressable
        style={({pressed}) => [styles.button, pressed && styles.pressed]}
        onPress={this.props.onPress}>
        <LinearGradient
          colors={['#9df7e9', '#2efab6', '#4afaa5']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={styles.button}>
          <Text style={styles.buttonText}>{this.props.children}</Text>
        </LinearGradient>
      </Pressable>
    );
  }
}

export default ModalButton;
