import React from 'react'
import { Link } from 'react-router-dom';
import { fetchInstructions, fetchRecipeById } from '../reducers/recipesSlice';
import { useDispatch } from 'react-redux';
import '../styles/Recipes.css'

const Recipe = ({ recipe }) => {
    const dispatch = useDispatch();

    const handleSelect = (id) => {
        dispatch(fetchRecipeById(id));
        dispatch(fetchInstructions(id))
    };

    return (
        <Link to={`/recipes/${recipe.id}`} onClick={() => handleSelect(recipe.id)} className='recipe-item'>
            <div className="recipe-overlay">
                <h2>{recipe.title}</h2>
                <h4>Check it out!</h4>
            </div>
            <img src={recipe.image} alt={recipe.title} />
        </Link>
    )
}

export default Recipe