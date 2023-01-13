import { useEffect, useReducer } from 'react';
import { getArticles, getCart } from '../services/api';
import reducer, { defaultState } from '../store/store';

export default function useArticles() {
  const [state, dispatch] = useReducer(reducer, defaultState);

  useEffect(() => {
    getArticles().then((articles) =>
      dispatch({ type: 'SET_ARTICLES', articles })
    );
    getCart().then((cart) => dispatch({ type: 'SET_CART', cart }));
  }, []);

  return {
    state,
    dispatch,
  };
}
