import React from 'react';
import classes from './Button.css'

const button = (props) => {
    return(
    <button 
    onClick = {props.click}
    className = {[classes.Button, classes[props.btnType]].join(' ')} >
        {props.children}
    </button>    
    )}

export default button