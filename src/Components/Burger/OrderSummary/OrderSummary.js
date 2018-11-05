import React from 'react';
import Aux from '../../../HOC/Auxl'

const orderSummary = (props) => {

    const orderedIngredients = Object.keys(props.ingredients)
    .map(ingr => { 
        if (props.ingredients[ingr] > 0){
            return (
            <li
            key = {ingr}
            >
            {ingr}:{props.ingredients[ingr]}
            </li>
            )} 
    })

    return(
        <Aux>
            <h1>Order Summary</h1>
            <p>Your Burger:</p>
            <ul>
                {orderedIngredients}
            </ul>

            <button>Continue to checkout!</button>
            <button>Cancel</button>
            <button>Continue</button>
        </Aux>
    )
}

export default orderSummary