import React, { useState, useEffect } from "react";
import RecipeList from "./RecipeList";
import "../css/App.css";
import uuidv4 from "../../node_modules/uuid/dist/v4";
import RecipeEdit from "./RecipeEdit";
import Heading from "./Heading";

export const RecipeContext = React.createContext();
const LOCAL_STORAGE_KEY = "firstproject.recipes";

function App() {
  const [selectedRecipeId, setSelecedRecipeId] = useState();
  const [recipes, setRecipes] = useState(sampleRecipes);
  const [searchSubstr, setSearchSubstr] = useState("");
  const selectedRecipe = recipes.find(
    (recipe) => recipe.id === selectedRecipeId
  );

  useEffect(() => {
    const LS_Data = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (LS_Data) setRecipes(LS_Data);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes));
  }, [recipes]);

  const RecipeContextValue = {
    handleRecipeAdd,
    handleRecipeDelete,
    handleRecipeSelect,
    handleRecipeChange,
    searchingFunction,
  };

  return (
    <RecipeContext.Provider value={RecipeContextValue}>
      <Heading />
      <RecipeList
        styles={
          selectedRecipe ? "recipe-list" : "recipe-list recipe-list--wide"
        }
        recipes={searchInRecipe(searchSubstr, recipes)}
      />
      {selectedRecipe && <RecipeEdit recipe={selectedRecipe} />}
    </RecipeContext.Provider>
  );

  function searchingFunction(substr) {
    setSearchSubstr(substr);
  }

  function searchInRecipe(substr, recipeArr) {
    if (!substr) return recipeArr;

    let filteredArr = recipeArr.filter((element) => {
      let values = Object.values(element);
      if (
        values.some((value) => {
          if (
            typeof value === "string" &&
            value.toLowerCase().includes(substr.toLowerCase())
          )
            return true;
          if (Array.isArray(value) && searchInRecipe(substr, value).length)
            return true;
          return false;
        })
      ) {
        return true;
      }
      return false;
    });

    return filteredArr;
  }

  function handleRecipeChange(id, recipe) {
    const newRecipes = [...recipes];
    const index = newRecipes.findIndex((recipe) => recipe.id === id);
    newRecipes[index] = recipe;
    setRecipes(newRecipes);
  }

  function handleRecipeSelect(id) {
    setSelecedRecipeId(id);
  }

  function handleRecipeAdd() {
    const newRecipe = {
      id: uuidv4(),
      name: "",
      servings: 1,
      cookTime: "",
      instructions: "",
      ingridients: [
        {
          id: uuidv4(),
          name: "",
          amount: "",
        },
      ],
      authors: [
        {
          name: "",
          id: uuidv4(),
        },
      ],
    };

    setSelecedRecipeId(newRecipe.id);
    setRecipes([...recipes, newRecipe]);
  }

  function handleRecipeDelete(id) {
    if (setSelecedRecipeId != null && setSelecedRecipeId === id) {
      setSelecedRecipeId(undefined);
    }
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  }
}

const sampleRecipes = [
  {
    id: 1,
    name: "Plain Chicken",
    servings: 3,
    cookTime: "1:45",
    instructions:
      "1. Put salt in chicken\n2. Put chicken in oven\n3. Eat chicken",
    ingridients: [
      {
        id: 1,
        name: "Chicken",
        amount: "2 Pounds",
      },
      {
        id: 2,
        name: "Salt",
        amount: "1 Tbs",
      },
    ],
    authors: [
      {
        name: "Gordon Ramzi",
        id: 1,
      },
    ],
  },
  {
    id: 2,
    name: "Plain Pork",
    servings: 5,
    cookTime: "0:45",
    instructions: "1. Put paprika on pork\n2. Put pork in oven\n3. Eat pork",
    ingridients: [
      {
        id: 1,
        name: "Pork",
        amount: "3 Pounds",
      },
      {
        id: 2,
        name: "Paprika",
        amount: "2 Tbs",
      },
    ],
    authors: [
      {
        name: "Gordon Ramzi",
        id: 1,
      },
    ],
  },
];

export default App;
