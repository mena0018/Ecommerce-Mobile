import React, { useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import useArticles from './src/hooks/useArticles';
import ArticleList from './src/components/Article/ArticleList';
import Footer from './src/components/Footer';
import Title from './src/components/Title';
import Context from './src/context';

export default function App() {
  const { state, dispatch } = useArticles();
  const value = useMemo(
    () => ({
      state,
      dispatch,
    }),
    [state, dispatch]
  );

  return (
    <Context.Provider value={value}>
      <View style={styles.container}>
        <Title text="E-commerce" />
        <ArticleList />
        <Footer />
      </View>
    </Context.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#ececec',
  },
});
