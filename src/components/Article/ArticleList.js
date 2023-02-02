import React, { useContext } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Article from './Article';
import Context from '../../context';

function ArticleList() {
  const {
    state: { articles },
  } = useContext(Context);

  const articlesList = articles.map((article) => (
    <Article key={article.id} article={article} />
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
