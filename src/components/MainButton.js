import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

import Colors from '../constants/Colors';

const MainButton = props => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={styles.button}
      onPress={props.onPress}>
      <Text style={styles.buttonText}>{props.children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 13,
    paddingHorizontal: 20,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'OpenSans-Bold',
    fontSize: 16,
  },
});

export default MainButton;
