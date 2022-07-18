import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './Main';
import Recipes from './Recipes';
import RecipeInstructions from './RecipeInstructions';

const RouterURLs = () => {
    return (
        <Routes>
            <Route path={process.env.PUBLIC_URL} element={<Main />} />
            <Route path='/recipes' element={<Recipes />} />
            <Route path='/recipes/:id' element={<RecipeInstructions />} />
        </Routes>
    )
}

export default RouterURLs;