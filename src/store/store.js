export const defaultState = {
  cart: {},
  articles: [],
};

export default function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT': {
      return {
        ...state,
        cart: {
          ...state.cart,
          quantity: state.cart.quantity - 1,
        },
      };
    }

    case 'DECREMENT': {
      return {
        ...state,
        cart: {
          ...state.cart,
          quantity: state.cart.quantity - 1,
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
