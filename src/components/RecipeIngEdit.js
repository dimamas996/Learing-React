import React from "react";

export default function RecipeIngEdit(props) {
  const { ingredient, handleIngChange, handleIngDelete } = props;

  function handleChange(changes) {
    handleIngChange(ingredient.id, { ...ingredient, ...changes });
  }
  return (
    <>
      <input
        value={ingredient.name}
        className="recipe-edit__input"
        type="text"
        onChange={(e) => handleChange({ name: e.target.value })}
      />
      <input
        value={ingredient.amount}
        className="recipe-edit__input"
        type="text"
        onChange={(e) => handleChange({ amount: e.target.value })}
      />
      <button onClick={()=> {
        handleIngDelete(ingredient.id)
      }} className="btn btn--danger">&times;</button>
    </>
  );
}
