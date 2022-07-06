import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { ingredientAdded } from '../reducers/recipesSlice';
import { fetchRecipe } from "../reducers/recipesSlice";
import { Link } from 'react-router-dom';

import '../styles/IngredientForm.css'

const IngredientForm = () => {
    const [ingredient, setIngredient] = useState('');

    const dispatch = useDispatch();

    const get = () => {
        dispatch(fetchRecipe())
    };

    const onAddIngredient = (e) => {
        e.preventDefault();
        if (ingredient) {
            dispatch(ingredientAdded(ingredient))
            setIngredient('')
        }
    };

    function canAdd(str) {
        if (!Boolean(str) || str.match(/\d/)) {
            return true;
        }
        else {
            return false;
        }
    };

    return (
        <div>
            <div id='formContainer'>
                <form onSubmit={onAddIngredient} id='form'>
                    <input
                        type="text"
                        value={ingredient}
                        onChange={(e) => setIngredient(e.target.value)}
                    />
                    <button
                        type="submit"
                        onClick={onAddIngredient}
                        disabled={canAdd(ingredient)}
                    >
                        Add
                    </button>
                </form>
            </div>

            <div id='getRecipeBtn'>
                <Link to='/recipes'>
                    <button onClick={get}>
                        Get Recipes
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default IngredientForm;