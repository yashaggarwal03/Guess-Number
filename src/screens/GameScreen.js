import React, {useState, useRef, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Alert,
  ScrollView,
  Dimensions,
} from 'react-native';

import Card from '../components/Card';
import MainButton from '../components/MainButton';
import NumberContainer from '../components/NumberContainer';
import Styles from '../constants/Styles';
import AntDesign from 'react-native-vector-icons/AntDesign';

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
  const [previousGuess, setPreviousGuess] = useState([]);
  const [availableDeviceHeight, setAvailableDeviceHeight] = useState(
    Dimensions.get('window').height,
  );
  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  useEffect(() => {
    const updateLayout = () => {
      setAvailableDeviceHeight(Dimensions.get('window').height);
    };

    Dimensions.addEventListener('change', updateLayout);
    return () => {
      Dimensions.addEventListener('change', updateLayout).remove();
    };
  });

  useEffect(() => {
    if (currentGuess === props.userChoice) {
      props.onGameOver(previousGuess.length);
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
      currentLow.current = currentGuess + 1;
    }
    const newGuess = generateRandomNumber(
      currentLow.current,
      currentHigh.current,
      currentGuess,
    );
    setCurrentGuess(newGuess);
    setPreviousGuess([currentGuess, ...previousGuess]);
  };

  const renderListItem = (value, round) => (
    <View style={styles.listItem} key={value}>
      <Text allowFontScaling={false} style={Styles.largeText}>
        #{round}
      </Text>
      <Text allowFontScaling={false} style={Styles.largeText}>
        {value}
      </Text>
    </View>
  );

  if (availableDeviceHeight < 500) {
    return (
      <View style={styles.container}>
        <Text allowFontScaling={false} style={Styles.title}>
          COMPUTER'S GUESS
        </Text>
        <View style={styles.smallButtonContainer}>
          <MainButton onPress={nextGuess.bind(this, 'lower')}>
            <AntDesign name="minus" size={25} color="#fff" />
          </MainButton>
          <NumberContainer>{currentGuess}</NumberContainer>
          <MainButton onPress={nextGuess.bind(this, 'higher')}>
            <AntDesign name="plus" size={25} color="#fff" />
          </MainButton>
        </View>
        <View style={styles.listContainer}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {previousGuess.map((guess, index) =>
              renderListItem(guess, previousGuess.length - index),
            )}
          </ScrollView>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text allowFontScaling={false} style={Styles.title}>
        COMPUTER'S GUESS
      </Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card
        style={{
          ...styles.buttonContainer,
          marginTop: availableDeviceHeight > 600 ? 20 : 10,
        }}>
        <MainButton onPress={nextGuess.bind(this, 'lower')}>
          <AntDesign name="minus" size={25} color="#fff" />
        </MainButton>
        <MainButton onPress={nextGuess.bind(this, 'higher')}>
          <AntDesign name="plus" size={25} color="#fff" />
        </MainButton>
      </Card>

      {/* We can also use FlatList here instead of ScrollView but as the list will not be too long so ScrollView will not cause any performace issue */}

      <View style={styles.listContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {previousGuess.map((guess, index) =>
            renderListItem(guess, previousGuess.length - index),
          )}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-around',
  },
  smallButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    alignItems: 'center',
  },
  listContainer: {
    flex: 1,
    width: '55%',
  },
  listItem: {
    borderColor: '#222',
    borderWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginVertical: 15,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default GameScreen;
