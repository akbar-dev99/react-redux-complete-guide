const initialState = {
  counter: 0,
  result: [],
  idResult: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INC":
      return {
        ...state,
        counter: state.counter + 1,
      };
    case "ADD_MORE":
      return {
        ...state,
        counter: state.counter + action.value,
      };
    case "DEC":
      if (state.counter > 0) {
        return { ...state, counter: state.counter - 1 };
      }
      return state;
    case "SUBTRACT_MORE":
      if (state.counter > action.value - 1) {
        return { ...state, counter: state.counter - action.value };
      }
      return state;
    case "STORE_RESULT":
      let id = state.idResult + 1;
      return {
        ...state,
        idResult: id,
        result: state.result.concat({
          id: id,
          value: state.counter,
        }),
      };
  }

  return state;
};

export default reducer;
