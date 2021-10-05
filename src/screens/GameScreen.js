import React, {useState, useRef, useEffect} from 'react';
import {Button, Text, View, StyleSheet, Alert} from 'react-native';

import Card from '../components/Card';
import NumberContainer from '../components/NumberContainer';

const generateRandomNumber = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randnum = Math.floor(Math.random() * (max - min) + min);
  if (randnum === exclude) {
    return generateRandomNumber(min, max, exclude);
  } else {
    return randnum;
  }
};

const GameScreen = props => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomNumber(1, 100, props.userChoice),
  );
  const [rounds, setRounds] = useState(0);
  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  useEffect(() => {
    if (currentGuess === props.userChoice) {
      props.onGameOver(rounds);
    }
  });

  const nextGuess = hint => {
    if (
      (hint === 'lower' && currentGuess < props.userChoice) ||
      (hint === 'higher' && currentGuess > props.userChoice)
    ) {
      Alert.alert("Don't Lie!", 'You know that it is incorrect...', [
        {text: 'Sorry!', style: 'cancel'},
      ]);
      return;
    }
    if (hint === 'lower') {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }
    const newGuess = generateRandomNumber(
      currentLow.current,
      currentHigh.current,
      currentGuess,
    );
    setCurrentGuess(newGuess);
    setRounds(rounds => rounds + 1);
  };

  return (
    <View style={styles.container}>
      <Text>COMPUTER'S GUESS</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <Button title="LOWER" onPress={nextGuess.bind(this, 'lower')} />
        <Button title="HIGHER" onPress={nextGuess.bind(this, 'higher')} />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: 300,
    maxWidth: '80%',
    justifyContent: 'space-around',
    marginTop: 20,
  },
});

export default GameScreen;
