import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

const Input = props => {
  return (
    <TextInput
      allowFontScaling={false}
      {...props}
      style={{...styles.input, ...props.style}}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});

export default Input;
