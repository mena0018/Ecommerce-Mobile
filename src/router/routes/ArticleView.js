import React, { useContext } from 'react';
import ArticleList from '../../components/Article/ArticleList';
import Context from '../../context';

export default function ArticleView() {
  const {
    state: { articles, cart },
  } = useContext(Context);

  return <ArticleList articles={articles} cart={cart} />;
}
