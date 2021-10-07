import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import MainButton from '../components/MainButton';

import Styles from '../constants/Styles';
import Colors from '../constants/Colors';

const GameOver = props => {
  return (
    <View style={styles.container}>
      <Text style={Styles.title}>Game Over!</Text>
      <View style={styles.imageContainer}>
        <Image
          fadeDuration={1000}
          // source={require('../assets/success.png')}
          source={{uri: 'https://picsum.photos/id/0/200'}}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={Styles.largeText}>
          Your Phone has taken{' '}
          <Text style={styles.text}>{props.numOfRounds} </Text>
          rounds to guess the number{' '}
          <Text style={styles.text}>{props.userNumber}</Text>
        </Text>
      </View>
      <MainButton onPress={props.onNewGame}>NEW GAME</MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: '#000',
    overflow: 'hidden',
    marginTop: 10,
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  textContainer: {
    marginHorizontal: 35,
    marginBottom: 10,
  },
  text: {
    color: Colors.primary,
    fontFamily: 'OpenSans-Bold',
  },
});

export default GameOver;
