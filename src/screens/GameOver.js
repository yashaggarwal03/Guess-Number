import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
} from 'react-native';
import MainButton from '../components/MainButton';

import Styles from '../constants/Styles';
import Colors from '../constants/Colors';

const GameOver = props => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text allowFontScaling={false} style={Styles.title}>
          Game Over!
        </Text>
        <View style={styles.imageContainer}>
          <Image
            fadeDuration={1000}
            source={{uri: 'https://picsum.photos/id/0/200'}}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <View style={styles.textContainer}>
          <Text allowFontScaling={false} style={Styles.largeText}>
            Your Phone has taken{' '}
            <Text style={styles.text}>{props.numOfRounds} </Text>
            rounds to guess the number{' '}
            <Text style={styles.text}>{props.userNumber}</Text>
          </Text>
        </View>
        <MainButton onPress={props.onNewGame}>NEW GAME</MainButton>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  imageContainer: {
    width: Dimensions.get('window').width * 0.74,
    height: Dimensions.get('window').width * 0.75,
    borderRadius: (Dimensions.get('window').width * 0.74) / 2,
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
    marginHorizontal: Dimensions.get('window').width * 0.085,
    marginBottom: 10,
  },
  text: {
    color: Colors.primary,
    fontFamily: 'OpenSans-Bold',
  },
});

export default GameOver;
