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
        onChange={(e) => searchingFunction(e.target.value)}
      />
      <div className="search__delete-btn-wrapper">
        <button
          onClick={() => {
            document.querySelector(".searching__input").value = "";
            searchingFunction("");
          }}
          className="btn btn--danger search__delete-btn"
        >
          &times;
        </button>
      </div>
    </div>
  );
}
