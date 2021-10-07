import React from 'react';
import {StyleSheet, Text} from 'react-native';

const TextTitle = props => {
  return <Text style={styles.title}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontFamily: 'PlayfairDisplay-BlackItalic',
    fontSize: 24,
    color: '#000',
  },
});

export default TextTitle;
