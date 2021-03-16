const ActionTypes = {
  INCREMENT_COUNTER: "INC_COUNTER",
  DECREMENT_COUNTER: "DEC_COUNTER",
  ADD_COUNTER: "ADD_COUNTER",
  SUBTRACT_COUNTER: "SUB_COUNTER",
  STORE_RESULTS: "STORE_RESULTS",
  DELETE_RESULT: "DEL_RESULT",
};

export const increment = () => {
  return {
    type: ActionTypes.INCREMENT_COUNTER,
  };
};

export const decrement = () => {
  return {
    type: ActionTypes.DECREMENT_COUNTER,
  };
};

export const addCounter = value => ({
  type: ActionTypes.ADD_COUNTER,
  value,
});

export const subtract = value => ({
  type: ActionTypes.SUBTRACT_COUNTER,
  value,
});

const saveResult = value => {
  return {
    type: ActionTypes.STORE_RESULTS,
    payload: {
      result: value,
    },
  };
};

export const storeResult = value => {
  return dispatch => {
    setTimeout(() => {
      dispatch(saveResult(value));
    }, 3000);
  };
};

export const deleteResult = id => {
  return {
    type: ActionTypes.DELETE_RESULT,
    payload: {
      id,
    },
  };
};
export default ActionTypes;
