import React, { useState, useContext } from "react";
import { ThemeContext } from "./App";

export default function CounterHooks({ initialCount }) {
  const [count, setCount] = useState(initialCount);
  const style = useContext(ThemeContext);
  return (
    <div style={style}>
      <button onClick={() => setCount((prvCount) => prvCount - 1)}>-</button>
      <span>{count}</span>
      <button onClick={() => setCount((prvCount) => prvCount + 1)}>+</button>
    </div>
  );
}
