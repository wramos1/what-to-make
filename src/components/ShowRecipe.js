import React from 'react'
import ReactDOM from 'react-dom';
import MiniIngredientList from './MiniIngredientList'

const ShowRecipe = ({ recipe }) => {
    if (!recipe) {
        return null;
    }

    return ReactDOM.createPortal(
        <div>
            <h1>{recipe.title}</h1>
            <img src={recipe.image} alt={recipe.title} />
            <MiniIngredientList
                missedIngredients={recipe.missedIngredients}
                usedIngredients={recipe.usedIngredients}
            />
        </div>,
        document.querySelector('#modal')
    )
}

export default ShowRecipe