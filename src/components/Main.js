import React from 'react'
import Header from "./Header";
import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
import '../styles/App.css'

import bacon from '../images/bacon.png'
import drumstick from '../images/cartoon-drumstick.webp';
import saladbowl from '../images/cartoon-saladbowl.png';
import fruitveg from '../images/fruits-vegetables.png';
import lettuce from '../images/lettuce.png';
import macaroni from '../images/macaroni.png';
import meat from '../images/meat.png';
import popcorn from '../images/popcorn.png';
import sandwich from '../images/sandwich.png';
import spaghetti from '../images/spaghetti.png';
import bread from '../images/bread.png';
import eggs from '../images/eggs.png';
import pancakes from '../images/pancakes.png';
import seafood from '../images/seafood.png';

const Main = () => {

    const fallingImages = [
        {
            imgSrc: bacon
        },
        {
            imgSrc: drumstick
        },
        {
            imgSrc: saladbowl
        },
        {
            imgSrc: fruitveg
        },
        {
            imgSrc: lettuce
        },
        {
            imgSrc: macaroni
        },
        {
            imgSrc: meat
        },
        {
            imgSrc: popcorn
        },
        {
            imgSrc: sandwich
        },
        {
            imgSrc: spaghetti
        },
        {
            imgSrc: eggs
        },
        {
            imgSrc: bread
        },
        {
            imgSrc: pancakes
        },
        {
            imgSrc: seafood
        },
    ]

    const cycleFood = fallingImages.map((fallenImg) => {
        return (
            <div className='falling-food' key={fallenImg.imgSrc}>
                <img src={fallenImg.imgSrc} alt='fallingfood' />
            </div>
        )
    })

    return (
        <div>
            <div id="main">
                <Header />
                <div>
                    <h2 id='listTitle'>
                        Ingredient List
                    </h2>

                    <IngredientForm />

                    <IngredientList />

                </div>

                <div id='fallenFoodContainer'>
                    {cycleFood}
                </div>
            </div>
        </div>
    )
}

export default Main