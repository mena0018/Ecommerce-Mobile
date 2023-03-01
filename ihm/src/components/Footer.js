/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import { Link } from '@react-navigation/native';
import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Context from '../context';

function Footer() {
  const {
    state: { cart },
  } = useContext(Context);

  const total = Object.values(cart).reduce(
    (acc, article) => (acc += article.prix * article.quantity),
    0
  );

  const count = Object.values(cart).reduce(
    (acc, article) => (acc += article.quantity),
    0
  );

  return (
    <Link to={{ screen: 'cart' }} style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.span}>Quantité : </Text>
        <Text style={styles.text}>{count}</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.span}>Prix total : </Text>
        <Text style={styles.text}>{total.toFixed(2)} €</Text>
      </View>
    </Link>
  );
}

export default Footer;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    paddingHorizontal: 50,
    backgroundColor: 'royalblue',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
  },
  span: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white',
    marginLeft: 20,
    marginRight: 5,
  },
  text: {
    fontSize: 16,
    color: 'white',
  },
});
