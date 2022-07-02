import React from 'react'
import { useSelector } from 'react-redux'
import { getAllIngredients } from '../reducers/recipesSlice'
import Ingredient from './Ingredient'

import '../styles/IngredientList.css'

const IngredientList = () => {
    const ingredients = useSelector(getAllIngredients)

    const renderIngredients = ingredients.map(item => {
        return (
            <Ingredient
                key={item.id}
                item={item}
            />
        )
    })

    return (
        <div id='ingredientContainer'>
            {renderIngredients}
        </div>
    )
}

export default IngredientList;