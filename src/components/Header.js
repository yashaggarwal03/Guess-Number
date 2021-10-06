import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Colors from '../constants/Colors';
import TextTitle from '../components/TextTitle';

const Header = props => {
  return (
    <View style={styles.header}>
      <TextTitle>{props.title}</TextTitle>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Header;
