import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  counterIncrement,
  counterDecrement
} from "../store/counter/counter.action";

function Index() {
  const count = useSelector(state => state.counter.number);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(counterIncrement(count))}>+</button>
      <h1>{count}</h1>
      <button
        onClick={() => dispatch(counterDecrement(count))}
      >
        -
      </button>
    </div>
  );
}

export default Index;
