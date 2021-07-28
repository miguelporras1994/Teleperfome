const reducer = (state, action) => {
  console.log(state);
  console.log(action);
  switch (action.type) {
    case 'SET_FAVORITE':
      return {
        ...state,
        result: action.comments.result,

      };
    case 'REGISTER_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'LOGIN_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
