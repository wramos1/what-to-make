import { createSlice, createAsyncThunk, nanoid } from "@reduxjs/toolkit";
import recipe from "../apis/recipe";


const initialState = {
    ingredients: [],
    recipes: [],
    status: '',
    error: null,
    exists: false,
}

export const fetchRecipe = createAsyncThunk('recipes/fetchRecipes', async (obj, { getState }) => {
    const { ingredients } = getState().recipes;

    const ingredientListToParams = (ingred) => {
        let list = (ingred).map(a => a.ingredient.toLowerCase());
        return list.toString();
    }

    const response = await recipe.get('', {
        params: {
            ingredients: ingredientListToParams(ingredients)
        }
    });

    return response.data
})

const recipesSlice = createSlice({
    name: 'recipes',
    initialState,
    reducers: {
        ingredientAdded: {
            reducer(state, { payload }) {
                const ingredientExist = state.ingredients.find((e) => e.ingredient === payload.ingredient);

                if (ingredientExist) {
                    state.exists = true;
                }
                else {
                    state.ingredients.push(payload)
                    state.exists = false;
                }
            },
            prepare(ingredient) {
                return {
                    payload: {
                        id: nanoid(),
                        ingredient,
                    }
                }
            }
        },
        ingredientDeleted(state, { payload }) {
            state.ingredients = state.ingredients.filter((e) => e.id !== payload.id)
        },
    },
    extraReducers(builder) {
        builder.addCase(fetchRecipe.pending, (state) => {
            state.status = 'LOADING';
        });
        builder.addCase(fetchRecipe.fulfilled, (state, action) => {
            return { ...state, recipes: action.payload, status: 'SUCCEEDED' };
        })
        builder.addCase(fetchRecipe.rejected, (state, action) => {
            state.status = 'ERROR'
            state.error = action.error.message
        })
    }
});


export const getAllIngredients = (state) => state.recipes.ingredients;

export const getAllRecipes = (state) => state.recipes.recipes;

export const { ingredientAdded, ingredientDeleted } = recipesSlice.actions;


export default recipesSlice.reducer;

