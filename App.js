import React, {useState} from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';

import Header from './src/components/Header';
import GameOver from './src/screens/GameOver';
import GameScreen from './src/screens/GameScreen';
import StartGame from './src/screens/StartGame';

const App = () => {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);

  const startGameHandler = selectedNumber => {
    setUserNumber(selectedNumber);
  };

  const gameOverHandler = rounds => {
    setGuessRounds(rounds);
  };

  const newGameHandler = () => {
    setUserNumber();
    setGuessRounds(0);
  };

  let screen = <StartGame onStartGame={startGameHandler} />;

  if (userNumber && guessRounds <= 0) {
    screen = (
      <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
    );
  } else if (guessRounds > 0) {
    screen = (
      <GameOver
        numOfRounds={guessRounds}
        userNumber={userNumber}
        onNewGame={newGameHandler}
      />
    );
  }

  return (
    <View style={styles.container}>
      {/* <StatusBar translucent={true} backgroundColor="transparent"/> */}
      <Header title="Guess a Number" />
      {screen}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
