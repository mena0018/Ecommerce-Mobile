/* eslint-disable prefer-destructuring */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Context from '../context';

function Footer() {
  const { state } = useContext(Context);
  const length = state.cart.length;

  const total =
    length > 0
      ? state.cart.reduce((acc, article) => (acc += article.prix), 0)
      : 0;

  return (
    <View style={styles.container}>
      <Text>
        <Text style={styles.span}>Quantité: </Text>
        <Text style={styles.text}>{length}</Text>
      </Text>
      <Text style={styles.space}>
        <Text style={styles.span}>Prix total: </Text>
        <Text style={styles.text}>{total} €</Text>
      </Text>
    </View>
  );
}

export default Footer;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 20,
    backgroundColor: 'royalblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  span: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white',
  },
  text: {
    fontSize: 16,
    color: 'white',
  },
  space: {
    marginTop: 10,
  },
});
