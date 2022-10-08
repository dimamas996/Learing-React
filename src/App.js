import React, { useState } from "react";
import Counter from "./Counter.js";
import CounterHooks from "./CounterHooks.js";

export const ThemeContext = React.createContext();

function App() {
  const [theme, setTheme] = useState("red");
  return (
    <ThemeContext.Provider value={{ background: theme }}>
      Counter
      <Counter initialCount={0} />
      CounterHooks
      <CounterHooks initialCount={0} />
      <button
        onClick={() =>
          setTheme((prevTheme) => {
            return prevTheme === "red" ? "blue" : "red";
          })
        }
      >
        Toggle Theme
      </button>
    </ThemeContext.Provider>
  );
}

export default App;
