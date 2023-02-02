import { useEffect, useReducer } from 'react';
import { getArticles, getCart } from '../services/api';
import reducer, { defaultState } from '../store/store';
import transform from '../services/transform';

export default function useArticles() {
  const [state, dispatch] = useReducer(reducer, defaultState);

  useEffect(() => {
    getArticles().then((articles) =>
      dispatch({ type: 'SET_ARTICLES', articles })
    );

    getCart().then((cart) => {
      const formatCart = transform(cart);
      dispatch({ type: 'SET_CART', cart: formatCart });
    });
  }, []);

  return {
    state,
    dispatch,
  };
}
