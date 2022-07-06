import React from 'react'
import Header from "./Header";
import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
import '../styles/App.css'

const Main = () => {

    return (
        <div>
            <Header />
            <div>
                <h2 id='listTitle'>
                    Ingredient List
                </h2>

                <IngredientForm />

                <IngredientList />

            </div>
        </div>
    )
}

export default Main