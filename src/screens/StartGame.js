import React, {useState} from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  ScrollView,
  Dimensions
} from 'react-native';

import Card from '../components/Card';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';
import Colors from '../constants/Colors';
import Styles from '../constants/Styles';
import MainButton from '../components/MainButton';

const StartGame = props => {
  const [number, setNumber] = useState('');
  const [confirm, setConfirm] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const enteredInput = number => {
    setNumber(number.replace(/[^0-9]/g, ''));
  };

  const resetInput = () => {
    setNumber('');
    setConfirm(false);
  };

  const confirmInput = () => {
    const chosenNumber = parseInt(number);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert('Invalid Number!', 'Number must be between 1 and 99', [
        {text: 'OK', style: 'destructive', onPress: resetInput},
      ]);
      return;
    }
    setConfirm(true);
    setSelectedNumber(chosenNumber);
    setNumber('');
    Keyboard.dismiss();
  };

  let confirmedOutput;
  if (confirm) {
    confirmedOutput = (
      <Card style={styles.confirmNumberContainer}>
        <Text style={Styles.text}>You Selected</Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <MainButton onPress={() => props.onStartGame(selectedNumber)}>
          START GAME
        </MainButton>
      </Card>
    );
  }

  const {height, width} = Dimensions.get("window");

  return (
    <ScrollView>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={Styles.title}>Start a New Game!</Text>
        <Card style={styles.inputContainer}>
          <Text style={Styles.text}>Select a Number</Text>
          <Input
            style={styles.input}
            keyboardType="number-pad"
            maxLength={2}
            allowFontScaling={false}
            onChangeText={enteredInput}
            value={number}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title="Reset"
                onPress={resetInput}
                color={Colors.secondary}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Confirm"
                onPress={confirmInput}
                color={Colors.primary}
              />
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
  },
  input: {
    width: 50,
    textAlign: 'center',
    fontSize: 17,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  button: {
    // width: 100,
    width: width/2 
  },
  confirmNumberContainer: {
    marginVertical: 20,
    alignItems: 'center',
  },
});

export default StartGame;
