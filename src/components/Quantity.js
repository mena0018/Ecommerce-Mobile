import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

function Quantity({ quantity = 5, onUpdate }) {
  return (
    <View style={styles.quantityContainer}>
      <Pressable style={styles.button} onPress={onUpdate}>
        <Text style={styles.btnText}>-</Text>
      </Pressable>

      <Text style={styles.text}>{quantity}</Text>

      <Pressable style={styles.button} onPress={onUpdate}>
        <Text style={styles.btnText}>+</Text>
      </Pressable>
    </View>
  );
}

export default Quantity;

const styles = StyleSheet.create({
  quantityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 150,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
    paddingHorizontal: 25,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'royalblue',
    color: 'white',
  },
  btnText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  text: {
    marginHorizontal: 5,
  },
});
