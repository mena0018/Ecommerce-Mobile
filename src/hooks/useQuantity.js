import { useContext } from 'react';
import Context from '../context';
import { addArticle } from '../services/api';

export default function useQuantity(article) {
  const {
    state: { cart },
    dispatch,
  } = useContext(Context);

  const quantity = cart[article.id] ? cart[article.id].quantity : 0;

  const onUpdate = (newQuantity) => {
    const newArticle = { ...article, quantity: newQuantity };

    addArticle(newArticle).then(() =>
      dispatch({ type: 'UPDATE_QUANTITY', article, newQuantity })
    );
  };

  return { quantity, onUpdate };
}
