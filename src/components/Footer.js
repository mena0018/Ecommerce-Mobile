/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Context from '../context';

function Footer() {
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);

  const {
    state: { cart },
  } = useContext(Context);

  useEffect(() => {
    const total = Object.values(cart).reduce(
      (acc, article) => (acc += article.prix * article.quantity),
      0
    );

    const totalFormat = new Intl.NumberFormat('fr-FR').format(total);
    setTotal(totalFormat);

    setCount(
      Object.values(cart).reduce((acc, article) => (acc += article.quantity), 0)
    );
  }, [cart]);

  return (
    <View style={styles.container}>
      <Text>
        <Text style={styles.span}>Quantité: </Text>
        <Text style={styles.text}>{count}</Text>
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
