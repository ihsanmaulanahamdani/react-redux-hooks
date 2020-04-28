import { INCREMENT, DECREMENT } from "./counter.action.type";

export const counterIncrement = number => {
  return {
    type: INCREMENT,
    data: number + 1
  };
};

export const counterDecrement = number => {
  return {
    type: DECREMENT,
    data: number > 0 ? number - 1 : number
  };
};
