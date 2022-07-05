import React from 'react'
import Header from "./Header";
import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
import '../styles/App.css'
import { useDispatch } from "react-redux";
import { fetchRecipe } from "../reducers/recipesSlice";
import { Link } from 'react-router-dom';

const Main = () => {
    const dispatch = useDispatch();

    const get = () => {
        dispatch(fetchRecipe())
    };


    return (
        <div>
            <Header />
            <div>
                <h2 id='listTitle'>
                    Ingredient List
                </h2>

                <IngredientForm />

                <Link to='/recipes'>
                    <button onClick={get}>
                        Get Recipes
                    </button>
                </Link>

                <IngredientList />

            </div>
        </div>
    )
}

export default Main