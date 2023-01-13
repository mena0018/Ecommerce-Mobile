import { useEffect, useState } from 'react';
import { getArticles, getCart } from '../services/api';

function useArticles() {
  const [articles, setArticles] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    getArticles().then((data) => setArticles(data));
    getCart().then((data) => setCart(data));
  }, []);

  return {
    articles,
    cart,
  };
}

export default useArticles;
