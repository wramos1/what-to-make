import { createSlice, createAsyncThunk, nanoid } from "@reduxjs/toolkit";
import recipe, { getInstructions, getRecipeById } from "../apis/recipe";


const initialState = {
    ingredients: [],
    recipes: [],
    recipe: {},
    instructions: [],
    recipesStatus: '',
    instructionStatus: '',
    recipeStatus: '',
    error: null,
    exists: false,
}

const ingredientListToParams = (ingred) => {
    let list = (ingred).map(a => a.ingredient.toLowerCase());
    return list.toString();
}

export const fetchRecipe = createAsyncThunk('recipes/fetchRecipes', async (obj, { getState }) => {
    const { ingredients } = getState().recipes;

    const response = await recipe.get('', {
        params: {
            ingredients: ingredientListToParams(ingredients),
            number: 12
        }
    });
    return response.data;
})

export const fetchInstructions = createAsyncThunk('recipes/fetchInstructions', async (id) => {
    const response = await getInstructions(id);
    const mappedData = await response.data.map((res) => res.steps.map((stepObj) => stepObj.step))
    return mappedData;
});

export const fetchRecipeById = createAsyncThunk('recipes/fetchRecipeById', async (id) => {
    const response = await getRecipeById(id);

    return response.data;
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
            state.recipesStatus = 'LOADING';
        });
        builder.addCase(fetchRecipe.fulfilled, (state, action) => {
            return { ...state, recipes: action.payload, recipesStatus: 'SUCCEEDED' };
        });
        builder.addCase(fetchRecipe.rejected, (state, action) => {
            state.recipesStatus = 'ERROR'
            state.error = action.error.message
        });

        builder.addCase(fetchInstructions.pending, (state) => {
            state.instructionStatus = 'LOADING';
        });
        builder.addCase(fetchInstructions.fulfilled, (state, action) => {
            return { ...state, instructions: action.payload, instructionStatus: 'SUCCEEDED' };
        });
        builder.addCase(fetchInstructions.rejected, (state, action) => {
            state.instructionStatus = 'ERROR'
            state.error = action.error.message
        });

        builder.addCase(fetchRecipeById.pending, (state) => {
            state.recipeStatus = 'LOADING';
        });
        builder.addCase(fetchRecipeById.fulfilled, (state, action) => {
            return { ...state, recipe: action.payload, recipeStatus: 'SUCCEEDED' };
        });
        builder.addCase(fetchRecipeById.rejected, (state, action) => {
            state.recipeStatus = 'ERROR'
            state.error = action.error.message
        });

    }
});
export const ifExists = (state) => state.recipes.exists;

export const getRecipeStatus = (state) => state.recipes.recipeStatus;

export const getRecipesStatus = (state) => state.recipes.recipesStatus;

export const getInstructionStatus = (state) => state.recipes.instructionStatus;

export const getRecipe = (state) => state.recipes.recipe;

export const getAllSteps = (state) => state.recipes.instructions;

export const getAllIngredients = (state) => state.recipes.ingredients;

export const getAllRecipes = (state) => state.recipes.recipes;

export const { ingredientAdded, ingredientDeleted } = recipesSlice.actions;


export default recipesSlice.reducer;

