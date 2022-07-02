import { configureStore } from "@reduxjs/toolkit";
import recipesSlice from "../reducers/recipesSlice";

const store = configureStore({
    reducer: {
        recipes: recipesSlice
    }
})

export default store;