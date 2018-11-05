import React from 'react';
import BurgerControl from '../BurgerControls/BurgerControl/BurgerControl'
import classes from './BurgerControls.css'

const burgerControls = (props) => {

    const controls = [
        {
            Label: 'salad',
            label: 'Salad'
        }, {
            Label: 'bacon',
            label: 'Bacon'
        }, {
            Label: 'cheese',
            label: 'Cheese'
        }, {
            Label: 'beefPatty',
            label: 'Beef Patty'
        }
    ]

    let controlItems = 
    <div className = {classes.BuildControls}>
    <p>{props.totalPrice}</p>
    {controls.map(control => {
        return (<BurgerControl 
            key={control.Label} 
            label={control.label}
            addIngr = {()=>props.addIngr(control.Label)}
            removeIngr = {()=>props.removeIngr(control.Label)}
            disabled = {props.disabled[control.Label]}
        />)
    
    })}
    <button 
    className = {classes.OrderButton}
    disabled = {props.disabledOrder}
    onClick = {props.showOrder}>Order Now!</button>
    </div>

    return(
    <div className = {classes.BuildControls}>
    {controlItems}
    </div>

    )}

export default burgerControls;