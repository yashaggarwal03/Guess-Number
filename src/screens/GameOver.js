import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const GameOver = (props) => {
  return (
    <View style={styles.container}>
      <Text style={{color: '#000'}}>Game Over!</Text>
      <Text style={{color: '#000'}}>The number of rounds: {props.numOfRounds}</Text>
      <Text style={{color: '#000'}}>The number was: {props.userNumber}</Text>
      <Button title="NEW GAME" onPress={props.onNewGame}/>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default GameOver;

