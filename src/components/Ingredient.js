import React from 'react';
import { useDispatch } from 'react-redux';
import { ingredientDeleted } from '../reducers/recipesSlice';
import '../styles/Ingredient.css';

const Ingredient = ({ item }) => {
    const dispatch = useDispatch();

    const deleteIngredient = (i) => {
        dispatch(ingredientDeleted(i))
    };

    return (
        <div className='item'>
            <li>
                {item.ingredient}

                <button onClick={() => deleteIngredient(item)}>
                    X
                </button>
            </li>
        </div>
    )
}

export default Ingredient