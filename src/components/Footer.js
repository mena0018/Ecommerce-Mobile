/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'react-router-native';
import Context from '../context';

function Footer() {
  const {
    state: { cart },
  } = useContext(Context);

  const total = Object.values(cart).reduce(
    (acc, article) => (acc += article.prix * article.quantity),
    0
  );

  const totalFormat = new Intl.NumberFormat('fr-FR').format(total);

  const count = Object.values(cart).reduce(
    (acc, article) => (acc += article.quantity),
    0
  );

  return (
    <Link to="/cart">
      <View style={styles.container}>
        <Text>
          <Text style={styles.span}>Quantité: </Text>
          <Text style={styles.text}>{count}</Text>
        </Text>
        <Text style={styles.space}>
          <Text style={styles.span}>Prix total: </Text>
          <Text style={styles.text}>{totalFormat} €</Text>
        </Text>
      </View>
    </Link>
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
