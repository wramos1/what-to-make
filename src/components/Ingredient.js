import React from 'react';
import { useDispatch } from 'react-redux';
import { ingredientDeleted } from '../reducers/recipesSlice';
import '../styles/Ingredient.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const Ingredient = ({ item }) => {
    const dispatch = useDispatch();

    const deleteIngredient = (i) => {
        dispatch(ingredientDeleted(i))
    };

    return (
        <div className='item'>
            <div className='ingredient'>

                <div className='ingredientText'>
                    {item.ingredient}
                </div>

                <button onClick={() => deleteIngredient(item)} className='delete-btn'>
                    <FontAwesomeIcon icon={faXmark} className='x-icon' />
                </button>
            </div>
        </div>
    )
}

export default Ingredient