import ActionTypes from "./actionTypes";

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
