import React from 'react'
import ReactDOM from 'react-dom';
import MiniIngredientList from './MiniIngredientList'
import '../styles/ShowRecipe.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const ShowRecipe = ({ recipe }) => {
    const closeRecipe = () => {
        document.querySelector('#modal').style.display = 'none';
    }
    if (!recipe) {
        return null;
    }

    return ReactDOM.createPortal(
        <div id='innerModal'>
            <h1>
                {recipe.title}
            </h1>

            <button
                id='closeRecipe'
                onClick={closeRecipe}
            >
                <FontAwesomeIcon icon={faXmark} className='x-icon' />

            </button>

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