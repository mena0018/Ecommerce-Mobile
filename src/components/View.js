import React from 'react';
import { StyleSheet, View } from 'react-native';
import useArticles from '../hooks/useArticles';
import ArticleList from './Article/ArticleList';
import Footer from './Footer';
import Title from './Title';

function ArticleView() {
  const { articles, cart } = useArticles();

  return (
    <View style={styles.container}>
      <Title text="E-commerce" />
      <ArticleList articles={articles} inCart={cart} />
      <Footer cart={cart} />
    </View>
  );
}

export default ArticleView;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#ececec',
  },
});
