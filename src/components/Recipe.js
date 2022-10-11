import React, { useContext } from "react";
import IngridientList from "./IngridientList";
import AuthorList from "./AuthorList";
import { RecipeContext } from "./App";

export default function Recipe(props) {
  const { handleRecipeDelete, handleRecipeSelect } = useContext(RecipeContext);
  const { id, name, cookTime, servings, instructions, ingridients, authors } =
    props;

  return (
    <div className="recipe">
      <div className="recipe__header">
        <h3 className="recipe__title">{name}</h3>
        <div>
          <button
            onClick={() => handleRecipeSelect(id)}
            className="btn btn--primary mr-1"
          >
            Edit
          </button>
          <button
            onClick={() => {
              handleRecipeDelete(id);
            }}
            className="btn btn--danger"
          >
            Delete
          </button>
        </div>
      </div>
      <div className="recipe__row">
        <span className="recipe__label">Cook Time:</span>
        <span className="recipe__value">{cookTime}</span>
      </div>
      <div className="recipe__row">
        <span className="recipe__label">Serving:</span>
        <span className="recipe__value">{servings}</span>
      </div>
      <div className="recipe__row">
        <span className="recipe__label">Instructions:</span>
        <div className="recipe__value recipe__instructions recipe__value--indented">
          {instructions}
        </div>
      </div>
      <div className="recipe__row">
        <span className="recipe__label">Ingridients:</span>
        <div className="recipe__value recipe__value--indented">
          <IngridientList ingridients={ingridients} />
        </div>
      </div>
      <div className="recipe__row">
        <span className="recipe__label">Authors:</span>
        <div className="recipe__value recipe__value--indented">
          <AuthorList authors={authors} />
        </div>
      </div>
    </div>
  );
}
