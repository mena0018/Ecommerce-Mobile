import { useContext } from 'react';
import Context from '../context';
import { addArticle, deleteArticle, updateArticle } from '../services/api';

export default function useQuantity(article, inCart) {
  const { dispatch } = useContext(Context);

  const quantity = inCart ? inCart.quantity : 0;

  const onUpdate = (newQuantity) => {
    const newArticle = {
      id: article.id,
      prix: article.prix,
      quantity: newQuantity,
    };

    if (!inCart) {
      addArticle(newArticle).then(() =>
        dispatch({ type: 'SET_ARTICLE', newArticle })
      );
    } else if (newQuantity === 0) {
      deleteArticle(newArticle).then(() =>
        dispatch({ type: 'DELETE_ARTICLE', newArticle })
      );
    } else {
      updateArticle(newArticle).then(() =>
        dispatch({ type: 'SET_ARTICLE', newArticle })
      );
    }
  };

  return { quantity, onUpdate };
}
