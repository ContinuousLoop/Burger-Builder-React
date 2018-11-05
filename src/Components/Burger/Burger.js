import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient'

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients).map(ingrKey => {
        return [...Array(props.ingredients[ingrKey])].map((_,index) => {
            return <BurgerIngredient
            key = {ingrKey+index}
            type = {ingrKey} />  
        }) 
    }).reduce((accum, current) => {
        return accum.concat(current)
    }, [])

if(transformedIngredients.length === 0){
    transformedIngredients = 'Add some ingredients!'
} 
 
return (
    <div className = {classes.Burger}>
        <BurgerIngredient type='topBun'/>
        {transformedIngredients}
        <BurgerIngredient type='bottomBun' />
    </div>
)
}

export default burger