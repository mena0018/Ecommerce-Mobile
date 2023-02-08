import React, { useContext } from 'react';
import Context from '../context';
import ArticleList from './Article/ArticleList';

export default function ArticleView() {
  const {
    state: { articles, cart },
  } = useContext(Context);

  return <ArticleList articles={articles} cart={cart} />;
}
