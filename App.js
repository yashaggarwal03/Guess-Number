import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

import Header from './src/components/Header';
import StartGame from './src/screens/StartGame';

const App = () => {
  return (
    <View style={styles.container}>
      {/* <StatusBar translucent={true} backgroundColor="transparent"/> */}
      <Header title="Guess a Number"/>
      <StartGame/>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex:1
  }
})

export default App;