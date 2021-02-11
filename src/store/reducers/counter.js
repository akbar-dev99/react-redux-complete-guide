import ActionTypes from "../actions";

const initialState = {
  counter: 0,
};

const counterReducer = (state = initialState, action) => {
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
  }
  return state;
};

export default counterReducer;
