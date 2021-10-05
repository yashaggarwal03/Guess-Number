import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Colors from '../constants/Colors';

const NumberContainer = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{props.children}</Text>
    </View>
  );
};


const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        padding: 10,
        borderColor: Colors.secondary,
        borderWidth: 2,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    number: {
        fontSize: 22,
        // fontWeight: 'bold',
        color: Colors.secondary
    }
    
});

export default NumberContainer;