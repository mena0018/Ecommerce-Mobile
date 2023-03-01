import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Link } from '@react-navigation/native';
import Constants from 'expo-constants';

function Title({ text }) {
  return (
    <Link to={{ screen: 'home' }} style={styles.titleContainer}>
      <Text style={styles.title}>{text}</Text>
    </Link>
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
