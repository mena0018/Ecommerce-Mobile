import React, { useContext } from 'react';
import { Button, View, Alert, StyleSheet } from 'react-native';
import ArticleList from '../../components/Article/ArticleList';
import Context from '../../context';
import { deleteArticle } from '../../services/api';

export default function CarteView() {
  const {
    dispatch,

    state: { articles, cart },
  } = useContext(Context);

  const filtered = articles.filter((article) => cart[article.id]);

  const makeOrder = () => {
    Alert.alert('Commande réalisé avec succès');
    resetCart();
  };

  const resetCart = () => {
    Object.keys(cart).map((id) =>
      setTimeout(() => {
        deleteArticle(id).then(() => dispatch({ type: 'RESET_CART' }));
      }, 500)
    );
  };

  return (
    <>
      <View style={styles.btn_container}>
        <Button
          onPress={resetCart}
          title="Tout supprimer"
          color="#0043cc"
          disabled={filtered.length === 0}
        />
        <Button
          title="Valider"
          disabled={filtered.length <= 0}
          color="#0043cc"
          onPress={makeOrder}
        />
      </View>
      <ArticleList articles={filtered} cart={cart} />
    </>
  );
}

const styles = StyleSheet.create({
  btn_container: {
    width: '100%',
    padding: 15,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});
