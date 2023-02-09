import React, { useContext } from 'react';
import ArticleList from '../../components/Article/ArticleList';
import Context from '../../context';

export default function CarteView() {
  const {
    state: { cart },
  } = useContext(Context);

  return <ArticleList articles={cart} cart={cart} />;
}
