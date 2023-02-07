const URL = 'http://172.20.0.1:7000';

const getArticles = () => fetch(`${URL}/articles`).then((data) => data.json());
const getCart = () => fetch(`${URL}/panier`).then((data) => data.json());

const addArticle = (article) =>
  fetch(`${URL}/panier/${article.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(article),
  });

export { getArticles, getCart, URL, addArticle };
