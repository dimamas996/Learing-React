import React, { useContext } from "react";
import { RecipeContext } from "./App";

export default function Searching() {
  const { searchingFunction } = useContext(RecipeContext);
  let inputSearch = null;
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
        onChange={(e) => {
          inputSearch = e.target;
          console.log(inputSearch, e.target);
          searchingFunction(e.target.value);
        }}
      />
      <div className="search__delete-btn-wrapper">
        <button
          onClick={() => {
            document.querySelector(".searching__input").value = "";
          }}
          className="btn btn--danger"
        >
          &times;
        </button>
      </div>
    </div>
  );
}
