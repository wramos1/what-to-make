import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getAllRecipes } from '../reducers/recipesSlice';
import Recipe from './Recipe';
import ShowRecipe from './ShowRecipe';

const Recipes = () => {
    const [selectedRecipe, setSelectedRecipe] = useState(null);
    const recipes = useSelector(getAllRecipes);


    const renderRecipes = () => {
        if (recipes.length === 0) {
            return (
                <div>
                    No Recipes Found
                </div>
            )
        }
        return recipes.map(rec => {
            return (
                <Recipe
                    onSelect={setSelectedRecipe}
                    key={rec.id}
                    recipe={rec}
                />
            )
        })
    }

    return (
        <div>
            <ShowRecipe
                recipe={selectedRecipe}
            />
            {renderRecipes()}
        </div>
    )
}

export default Recipes;