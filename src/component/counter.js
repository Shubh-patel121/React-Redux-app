import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../features/counter/counterSlice";

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="counter-wrapper">
    <div className="counter">
      <div className="count-wrapper">
        <span className="count-text">{count}</span>
      </div>
      <div className="btn-wrapper">
        <button className="btn" onClick={() => dispatch(decrement())}>
          -
        </button>
        <button className="btn" onClick={() => dispatch(incrementByAmount(5))}>
          Increment by 5
        </button>
        <button className="btn" onClick={() => dispatch(increment())}>
          +
        </button>
      </div>
    </div>
    </div>
  );
}

export default Counter;
