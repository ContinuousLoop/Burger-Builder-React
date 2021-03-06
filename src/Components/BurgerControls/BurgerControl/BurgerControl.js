import React from 'react';
import classes from './BurgerControl.css'

const burgerControl = (props) => {
return (
    <div className = {classes.BuildControl}>
    <div className = {classes.Label}>{props.label}</div>
    <button 
    className = {classes.More}
    onClick = {props.addIngr}
    >More</button>
    <button 
    disabled = {props.disabled}
    className = {classes.Less}
    onClick = {props.removeIngr}
    >Less</button>
  </div>
);}

export default burgerControl