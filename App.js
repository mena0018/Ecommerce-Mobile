import React, { useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import useArticles from './src/hooks/useArticles';
import Context from './src/context';
import Provider from './src/router/Provider';

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
        <Provider />
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
