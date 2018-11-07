import React from 'react';
import icon from '../../Assets/burger-logo.png'
import classes from './Logo.css'

const logo = (props) => (
    <div className = {classes.Logo}>
        <logo>
            <img src = {icon} alt ='MyBurger'/>
        </logo>
    </div>
)

export default logo