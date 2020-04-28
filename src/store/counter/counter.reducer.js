import { INCREMENT, DECREMENT } from "./counter.action.type";

const initialState = {
  number: 0
};

export default (state = { ...initialState }, action) => {
  console.log(action)
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        number: action.data
      };
    case DECREMENT:
      return {
        ...state,
        number: action.data
      };
    default:
      return state;
  }
};
