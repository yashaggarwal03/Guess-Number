import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const StartGame = () => {
  return (
    <View style={styles.container}>
      <Text>Start the Game!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
});

export default StartGame;
