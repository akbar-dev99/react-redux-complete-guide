import ActionTypes from "./actionTypes";

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
