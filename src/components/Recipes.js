import React from 'react';
import { useSelector } from 'react-redux';
import { getAllRecipes, getRecipesStatus } from '../reducers/recipesSlice';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Recipe from './Recipe';
import '../styles/Recipes.css'

const Recipes = () => {
    const status = useSelector(getRecipesStatus)
    const recipes = useSelector(getAllRecipes);
    const navigate = useNavigate();

    const mapRecipes = recipes.map(rec => {
        return (
            <Recipe
                key={rec.id}
                recipe={rec}
            />
        )
    });

    const goBack = () => {
        return (
            <button
                id='goBackBtn'
                onClick={() => navigate(-1)}
            >
                <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
                Back
            </button>
        );
    };

    const renderRecipes = () => {
        if (recipes.length === 0 && status === 'LOADING') {
            return <div className="spinner"></div>
        }

        else if (recipes.length === 0 && status === 'SUCCEEDED') {
            return (
                <div>
                    {goBack()}
                    <h1 id='noResults'>No Recipes Found</h1>
                </div>
            )
        }

        return (
            <div>
                <h1 id='recipesTitle'>
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
            {renderRecipes()}
        </div>
    )
}

export default Recipes;