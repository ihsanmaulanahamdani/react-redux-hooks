import { INCREMENT, DECREMENT } from "./counter.action.type";

export const counterIncrement = (number) => {
  return increment(number);
};

export const counterDecrement = (number) => {
  return decrement(number);
};

const increment = (number) => ({
  type: INCREMENT,
  data: number + 1,
});

const decrement = (number) => ({
  type: DECREMENT,
  data: number > 0 ? number - 1 : number,
});
