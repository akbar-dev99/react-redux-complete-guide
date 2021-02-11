import ActionTypes from "../actions";

const initialState = {
  results: [],
  idResult: 0,
};

const resultReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.STORE_RESULTS:
      let id = state.idResult + 1;
      return {
        ...state,
        idResult: id,
        results: state.results.concat({
          id: id,
          value: action.payload?.result,
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

export default resultReducer;
