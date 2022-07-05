import React from 'react'

const MiniIngredientList = ({ missedIngredients, usedIngredients }) => {
    const missedIngredientsList = missedIngredients.map(ingred => {
        return (
            <span key={ingred.id}>
                <img src={ingred.image}></img>
                {ingred.original}
            </span>
        )

    })

    const usedIngredientsList = usedIngredients.map(ingred => {
        return (
            <span key={ingred.id}>
                <img src={ingred.image}></img>
                {ingred.original}
            </span>
        )

    })
    return (
        <div>
            {usedIngredientsList}
            {missedIngredientsList}
        </div>
    )
}

export default MiniIngredientList