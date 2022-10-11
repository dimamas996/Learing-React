import React, { useContext } from "react";
import RecipeIngEdit from "./RecipeIngEdit";
import { RecipeContext } from "./App";
import uuidv4 from "../../node_modules/uuid/dist/v4";

export default function RecipeEdit({ recipe }) {
  const { handleRecipeChange, handleRecipeSelect } = useContext(RecipeContext);

  function handleChange(changes) {
    handleRecipeChange(recipe.id, { ...recipe, ...changes });
  }

  function handleIngChange(id, ingredient) {
    const newIngridients = [...recipe.ingridients];
    const index = newIngridients.findIndex((i) => i.id === id);
    newIngridients[index] = ingredient;
    handleChange({ ingridients: newIngridients });
  }

  function handleIngAdd() {
    const newIng = {
      id: uuidv4(),
      name: "",
      amount: "",
    };
    handleChange({ ingridients: [...recipe.ingridients, newIng] });
  }

  function handleIngDelete(id) {
    handleChange({
      ingridients: recipe.ingridients.filter((ing) => ing.id !== id),
    });
  }

  return (
    <div className="recipe-edit">
      <div className="recipe-edit__remove-button-container">
        <button
          onClick={() => handleRecipeSelect(undefined)}
          className="btn recipe-edit__remove-button"
        >
          &times;
        </button>
      </div>
      <div className="recipe-edit__details-grid">
        <label className="recipe-edit__label" htmlFor="name">
          Name
        </label>
        <input
          className="recipe-edit__input"
          type="text"
          name="name"
          id="name"
          value={recipe.name}
          onChange={(e) => handleChange({ name: e.target.value })}
        />
        <label className="recipe-edit__label" htmlFor="author">
          Author
        </label>
        <input
          className="recipe-edit__input"
          type="text"
          name="author"
          id="author"
          value={recipe.author}
          onChange={(e) => handleChange({ author: e.target.value })}
        />
        <label className="recipe-edit__label" htmlFor="cookTime">
          Cook Time
        </label>
        <input
          className="recipe-edit__input"
          type="text"
          name="cookTime"
          id="cookTime"
          value={recipe.cookTime}
          onChange={(e) => handleChange({ cookTime: e.target.value })}
        />
        <label className="recipe-edit__label" htmlFor="servings">
          Servings
        </label>
        <input
          className="recipe-edit__input"
          type="number"
          min="1"
          name="servings"
          id="servings"
          value={recipe.servings}
          onChange={(e) =>
            handleChange({ servings: parseInt(e.target.value) || "" })
          }
        />
        <label className="recipe-edit__label" htmlFor="instructions">
          Instructions
        </label>
        <textarea
          className="recipe-edit__input"
          type="text"
          name="instructions"
          id="instructions"
          value={recipe.instructions}
          onChange={(e) => handleChange({ instructions: e.target.value })}
        ></textarea>
      </div>
      <br />
      <label className="recipe-edit__label">Ingredients</label>
      <div className="recipe-edit__ingredient-grid">
        <div>Name</div>
        <div>Amount</div>
        <div></div>
        {recipe.ingridients.map((ing) => (
          <RecipeIngEdit
            handleIngDelete={handleIngDelete}
            handleIngChange={handleIngChange}
            key={ing.id}
            ingredient={ing}
          />
        ))}
      </div>
      <div className="recipe-edit__add-ingredient-btn-container">
        <button onClick={() => handleIngAdd()} className="btn btn--primary">
          Add Ingredient
        </button>
      </div>
    </div>
  );
}
