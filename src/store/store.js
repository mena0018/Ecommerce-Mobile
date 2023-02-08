export const defaultState = {
  articles: [],
  cart: {},
};

export default function reducer(state, action) {
  switch (action.type) {
    case 'SET_ARTICLE': {
      const { newArticle } = action;
      const newCart = { ...state.cart, [newArticle.id]: newArticle };

      return { ...state, cart: newCart };
    }

    case 'DELETE_ARTICLE': {
      const { id } = action.newArticle;
      const newCart = { ...state.cart };
      delete newCart[id];

      return { ...state, cart: newCart };
    }

    case 'SET_ARTICLES': {
      return { ...state, articles: action.articles };
    }

    case 'SET_CART': {
      return { ...state, cart: action.cart };
    }

    default:
      return state;
  }
}
