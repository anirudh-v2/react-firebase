/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../core/store/counterSlice";

export default function Counter() {
  const countSelector = useSelector((state: any) => state.counter);
  const dispatch = useDispatch();
  var count: any = 0;

  React.useEffect(() => {
    console.log("countSelector", countSelector);
  }, [countSelector]);

  return (
    <div>
      <h1>{countSelector.value}</h1>
      <button
        onClick={() => {
          dispatch(increment(count));
        }}
      >
        click
      </button>
    </div>
  );
}
