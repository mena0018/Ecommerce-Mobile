export const defaultState = {
  articles: [],
  cart: {},
};

export default function reducer(state, action) {
  switch (action.type) {
    case 'UPDATE_QUANTITY': {
      return {
        ...state,
        cart: {
          ...state.cart,
          [action.article.id]: {
            id: action.article.id,
            prix: action.article.prix,
            quantity: action.newQuantity,
          },
        },
      };
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
