const initialState = {
  counter: 0,
};

const reducer = (state = initialState, action) => {
  console.log(action);

  switch (action.type) {
    case "INC":
      return {
        counter: state.counter + 1,
      };
    case "DEC":
      if (state.counter > 0) {
        return {
          counter: state.counter - 1,
        };
      }
    default:
      break;
  }

  return state;
};

export default reducer;
