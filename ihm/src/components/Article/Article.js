import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import useQuantity from '../../hooks/useQuantity';
import { URL } from '../../services/api';
import Quantity from '../Quantity';

function Article({ article, inCart }) {
  const { quantity, onUpdate } = useQuantity(article, inCart);

  return (
    <View style={[styles.container, styles.shadowProp]}>
      <View style={styles.description}>
        <View>
          <Text style={styles.span}>Description :</Text>
          <Text> {article.description}</Text>
        </View>
        <View style={styles.prix}>
          <Text style={styles.span}>Prix :</Text>
          <Text> {article.prix}€</Text>
        </View>

        <Quantity quantity={quantity} onUpdate={onUpdate} />
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
