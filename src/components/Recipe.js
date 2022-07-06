import React from 'react'
import '../styles/Recipes.css'

const Recipe = ({ onSelect, recipe }) => {

    const handleSelect = () => {
        document.querySelector('#modal').style.display = 'flex';
        onSelect(recipe);
    };

    return (
        <div onClick={handleSelect} className='recipe-item'>
            <div className="recipe-overlay">
                <h3>{recipe.title}</h3>
                <p>Check it out!</p>
            </div>
            <img src={recipe.image} alt={recipe.title} />
        </div>
    )
}

export default Recipe