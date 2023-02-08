const URL = 'http://10.31.4.43:7000';

const getArticles = () => fetch(`${URL}/articles`).then((data) => data.json());
const getCart = () => fetch(`${URL}/panier`).then((data) => data.json());

const addArticle = (article) =>
  fetch(`${URL}/panier`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(article),
  });

const updateArticle = (article) =>
  fetch(`${URL}/panier/${article.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(article),
  });

const deleteArticle = (article) =>
  fetch(`${URL}/panier/${article.id}`, {
    method: 'DELETE',
  });

export { getArticles, getCart, URL, addArticle, updateArticle, deleteArticle };
