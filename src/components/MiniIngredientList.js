import React from 'react'

const MiniIngredientList = ({ missedIngredients, usedIngredients }) => {
    const missedIngredientsList = missedIngredients.map(ingred => {
        return (
            <div key={ingred.id} className='miniIngredients'>
                <img src={ingred.image} alt={ingred.title} />
                <p>{ingred.original}</p>
            </div>
        )

    })

    const usedIngredientsList = usedIngredients.map(ingred => {
        return (
            <div key={ingred.id} className='miniIngredients'>
                <img src={ingred.image} alt={ingred.title} />
                <p>{ingred.original}</p>
            </div>
        )

    })
    return (
        <div id='miniIngredientList'>
            {usedIngredientsList}
            {missedIngredientsList}
        </div>
    )
}

export default MiniIngredientList