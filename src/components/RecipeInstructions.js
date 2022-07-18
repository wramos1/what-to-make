import React, { useEffect, useState } from 'react'
import { getAllSteps, getRecipe, getRecipeStatus } from '../reducers/recipesSlice';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import '../styles/RecipeInstructions.css'

const RecipeInstructions = () => {
    const [isMobile, setIsMobile] = useState(false);
    const navigate = useNavigate();
    const recipe = useSelector(getRecipe);
    const steps = useSelector(getAllSteps);
    const status = useSelector(getRecipeStatus);

    useEffect(() => {
        updateDivOrder();
        window.addEventListener('resize', updateDivOrder);

        return () => {
            window.removeEventListener('resize', updateDivOrder)
        }
    }, [setIsMobile])

    const updateDivOrder = () => {
        setIsMobile(window.innerWidth < 675)
    }

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

    const renderInstructions = () => {
        if (steps.length === 0) {
            return <h5>No Instructions Found</h5>
        }
        return steps.map((s) => s.map((listedStep, i) => {
            return (
                <li key={i} >
                    {listedStep}
                </li>
            )
        }));
    };

    const renderAllIngredients = () => {
        if (status === 'SUCCEEDED') {
            return recipe.extendedIngredients.map((ingred, i) => {
                return (
                    <li key={i}>
                        {`${ingred.amount} ${ingred.name}`}
                    </li>
                )
            });
        }
    }

    if (status === 'LOADING') {
        return <div className="spinner"></div>
    }
    else if (isMobile === true) {
        return (
            <div>
                {goBack()}
                <div id='recipeBook'>

                    <h1 id='recipeTitle'>
                        {recipe.title}
                    </h1>

                    <div id='minorDetails'>
                        <div>{`${recipe.readyInMinutes} Minutes`}</div>
                        <div> | </div>
                        <div>{`${recipe.servings} Servings`}</div>
                    </div>

                    <img id='recipeImg' src={recipe.image} alt={recipe.title} />

                    <div id='allIngredientContainer'>
                        <h2>Ingredients: </h2>
                        <ul>
                            {renderAllIngredients()}
                        </ul>
                    </div>

                    <div id='instructionsListContainer'>
                        <h3>Instructions: </h3>
                        <ul id='instructionsList'>
                            {renderInstructions()}
                        </ul>
                    </div>

                </div>

            </div>
        )
    }
    return (
        <div>
            {goBack()}
            <div id='recipeBook'>
                <div id='leftHalf'>

                    <img src={recipe.image} alt={recipe.title} />

                    <div id='allIngredientContainer'>
                        <h2>Ingredients: </h2>
                        <ul>
                            {renderAllIngredients()}
                        </ul>
                    </div>
                </div>

                <div id='instructionsPage'>
                    <h1>
                        {recipe.title}
                    </h1>

                    <div id='minorDetails'>
                        <div>{`${recipe.readyInMinutes} Minutes`}</div>
                        <div> | </div>
                        <div>{`${recipe.servings} Servings`}</div>
                    </div>

                    <div id='instructionsListContainer'>
                        <ul id='instructionsList'>
                            <h3>Instructions: </h3>
                            {renderInstructions()}
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default RecipeInstructions