import React from "react";
import Header from "./Header";
import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
import '../styles/App.css'
import { useDispatch } from "react-redux";
import { fetchRecipe } from "../reducers/recipesSlice";

const App = () => {

    const dispatch = useDispatch();

    const getRecipes = () => {
        dispatch(fetchRecipe())
    }

    return (
        <div>
            <Header />
            <div>
                <h2 id='listTitle'>
                    Ingredient List
                </h2>

                <IngredientForm />

                <IngredientList />

                <button onClick={getRecipes}>
                    Get Recipes
                </button>
            </div>
        </div>
    )
}

export default App;