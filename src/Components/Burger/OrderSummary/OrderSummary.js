import React from 'react';
import Aux from '../../../HOC/Auxl'
import Button from '../../UI/Buttons/Buttons'

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

            <p><strong>{props.price.toFixed(2)}</strong></p>

            <p>Happy with your order?</p>
            <Button
            btnType = 'Success'
            click = {props.continue}>Proceed</Button>
            <Button
            click = {props.cancel} 
            btnType = 'Danger'>Cancel</Button>
            
        </Aux>
    )
}

export default orderSummary