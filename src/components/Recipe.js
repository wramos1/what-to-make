import React from 'react'


const Recipe = ({ onSelect, recipe }) => {
    return (
        <div onClick={() => onSelect(recipe)}>
            <h1>{recipe.title}</h1>
            <img src={recipe.image} alt="" />
        </div>
    )
}

export default Recipe