const mainState = {
  content: {
    user: {},
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
    default:
      return state;
  }
};

export default mainReducer;
