import React, { useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import useArticles from './src/hooks/useArticles';
import Footer from './src/components/Footer';
import Title from './src/components/Title';
import Context from './src/context';
import ArticleView from './src/components/ArticleView';

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
        <ArticleView />
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
