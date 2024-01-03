const mainState = {
  content: {
    user: {},
    cart: [],
  },
};

const mainReducer = (state = mainState, action) => {
  switch (action.type) {
    case "SAVE_USER_LOGIN":
      return {
        ...state,
        content: {
          ...state.content,
          user: action.payload,
        },
      };
    case "ADD_TO_CART":
      return {
        ...state,
        content: {
          ...state.content,
          cart: [...state.content.cart, action.payload],
        },
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        content: {
          ...state.content,
          cart: state.content.cart.filter((item, i) => i !== action.payload),
        },
      };
    default:
      return state;
  }
};

export default mainReducer;
