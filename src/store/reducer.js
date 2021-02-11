const initialState = {
  counter: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INC":
      return {
        counter: state.counter + 1,
      };
    case "ADD_MORE":
      return {
        counter: state.counter + action.value,
      };
    case "DEC":
      if (state.counter > 0) {
        return {
          counter: state.counter - 1,
        };
      }
    case "SUBTRACT_MORE":
      if (state.counter > action.value - 1) {
        return {
          counter: state.counter - action.value,
        };
      }
    default:
      break;
  }

  return state;
};

export default reducer;
