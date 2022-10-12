import React, { useContext } from "react";
import { RecipeContext } from "./App";

export default function Searching() {
  const { searchingFunction } = useContext(RecipeContext);
  return (
    <div className="searching">
      <label className="searching__label" htmlFor="search">
        Search
      </label>
      <input
        className="searching__input"
        type="text"
        name="search"
        id="search"
        onBlur={(e) => {
          console.log(e);
          e.target.value = "";
          searchingFunction("");
        }}
        onChange={(e) => searchingFunction(e.target.value)}
      />
    </div>
  );
}
