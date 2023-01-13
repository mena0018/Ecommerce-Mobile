import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { URL } from '../../services/api';
import Quantity from '../Quantity';

function Article({ article, cart }) {
  return (
    <View style={[styles.container, styles.shadowProp]}>
      <View style={styles.description}>
        <Text>
          <Text style={styles.span}>Description :</Text>
          <Text> {article.description}</Text>
        </Text>
        <Text style={styles.prix}>
          <Text style={styles.span}>Prix :</Text>
          <Text> {article.prix}€</Text>
        </Text>
        <Quantity quantity={cart ? cart.quantity : 0} />
      </View>

      <View>
        <Image
          source={{ uri: URL + article.picture }}
          style={{ width: 100, height: 100, borderRadius: 5 }}
        />
      </View>
    </View>
  );
}

export default Article;

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    padding: 20,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  span: {
    fontWeight: 'bold',
  },
  prix: {
    marginVertical: 10,
  },
});
