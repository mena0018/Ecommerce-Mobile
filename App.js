import React, { useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import useArticles from './src/hooks/useArticles';
import Context from './src/context';
import Title from './src/components/Title';
import Footer from './src/components/Footer';
import ArticleView from './src/router/routes/ArticleView';
import CartView from './src/router/routes/CartView';

const Stack = createNativeStackNavigator();

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
      <NavigationContainer>
        <View style={styles.container}>
          <Title text="E-commerce" />

          <Stack.Navigator initialRouteName="home">
            <Stack.Screen name="home" component={ArticleView} />
            <Stack.Screen name="cart" component={CartView} />
          </Stack.Navigator>

          <Footer />
        </View>
      </NavigationContainer>
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
