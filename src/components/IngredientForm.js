import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { ingredientAdded } from '../reducers/recipesSlice';

import '../styles/IngredientForm.css'

const IngredientForm = () => {
    const [ingredient, setIngredient] = useState('');

    const dispatch = useDispatch();

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
    )
}

export default IngredientForm;