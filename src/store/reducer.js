import ActionTypes from "./actions";

const initialState = {
  counter: 0,
  results: [],
  idResult: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.INCREMENT_COUNTER:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case ActionTypes.ADD_COUNTER:
      return {
        ...state,
        counter: state.counter + action.value,
      };
    case ActionTypes.DECREMENT_COUNTER:
      if (state.counter > 0) {
        return { ...state, counter: state.counter - 1 };
      }
      return state;
    case ActionTypes.SUBTRACT_COUNTER:
      if (state.counter > action.value - 1) {
        return { ...state, counter: state.counter - action.value };
      }
      return state;
    case ActionTypes.STORE_RESULTS:
      let id = state.idResult + 1;
      return {
        ...state,
        idResult: id,
        results: state.results.concat({
          id: id,
          value: state.counter,
        }),
      };
    case ActionTypes.DELETE_RESULT:
      const updatedArray = state.results.filter(
        res => res.id !== action.payload.id
      );
      return { ...state, results: updatedArray };
  }
  return state;
};

export default reducer;
