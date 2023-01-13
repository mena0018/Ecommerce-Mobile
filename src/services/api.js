const URL = 'http://172.20.0.1:7000';

const getArticles = () => fetch(`${URL}/articles`).then((data) => data.json());
const getCart = () => fetch(`${URL}/panier`).then((data) => data.json());

export { getArticles, getCart, URL };
