import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getAllRecipes } from '../reducers/recipesSlice';
import { useNavigate } from 'react-router-dom';
import Recipe from './Recipe';
import ShowRecipe from './ShowRecipe';
import '../styles/Recipes.css'

const Recipes = () => {
    const [selectedRecipe, setSelectedRecipe] = useState(null);
    const recipes = useSelector(getAllRecipes);
    const navigate = useNavigate();

    const mapRecipes = recipes.map(rec => {
        return (
            <Recipe
                onSelect={setSelectedRecipe}
                key={rec.id}
                recipe={rec}
            />
        )
    });

    const goBack = () => {
        return (
            <button
                style={{
                    position: 'fixed',
                    top: '0',
                    left: '0',
                    fontSize: '1.4em',
                    cursor: 'pointer',
                    color: 'rgb(31, 199, 177)',
                    backgroundColor: 'black'
                }}
                onClick={() => navigate(-1)}
            >
                Back
            </button>
        );
    };

    const renderRecipes = () => {
        if (recipes.length === 0) {
            return (
                <div>
                    No Recipes Found
                </div>
            )
        }

        return (
            <div>
                <h1 id='recipeTitle'>
                    Recipes
                </h1>

                {goBack()}

                <div id='recipeContainer'>
                    {mapRecipes}
                </div>

            </div>
        )
    };

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