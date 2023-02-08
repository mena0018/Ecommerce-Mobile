import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Article from './Article';

function ArticleList({ articles, cart }) {
  const articlesList = articles.map((article) => (
    <Article key={article.id} article={article} inCart={cart[article.id]} />
  ));

  return <ScrollView style={styles.container}>{articlesList}</ScrollView>;
}

export default ArticleList;

const styles = StyleSheet.create({
  container: {
    padding: 50,
    flex: 1,
  },
});
