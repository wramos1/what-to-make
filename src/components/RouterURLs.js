import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './Main';
import Recipes from './Recipes';


const RouterURLs = () => {
    return (
        <Routes>
            <Route path={process.env.PUBLIC_URL} element={<Main />} />
            <Route path='/recipes' element={<Recipes />} />
        </Routes>
    )
}

export default RouterURLs;