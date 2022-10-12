import React from "react";

export default function RecipeAuthorEdit(props) {
  const { author, handleAuthorChange, handleAuthorDelete } = props;

  function handleChange(changes) {
    handleAuthorChange(author.id, { ...author, ...changes });
  }

  return (
    <>
      <input
        value={author.name}
        onChange={(e) => handleChange({ name: e.target.value })}
        className="recipe-edit__input"
        type="text"
      />
      <button
        onClick={() => {
          handleAuthorDelete(author.id);
        }}
        className="btn btn--danger"
      >
        &times;
      </button>
    </>
  );
}
