import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

function Title({ text }) {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{text}</Text>
    </View>
  );
}

export default Title;

const styles = StyleSheet.create({
  titleContainer: {
    width: '100%',
    backgroundColor: 'royalblue',
    fontSize: 35,
    textAlign: 'center',
    paddingTop: Constants.statusBarHeight,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    padding: 20,
  },
});
