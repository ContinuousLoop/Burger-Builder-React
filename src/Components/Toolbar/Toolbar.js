import React from 'react';
import Logo from '../Logo/Logo'
import classes from './Toolbar.css';

const toolbar = (props) => {
    return (
        <navigation className = {classes.Toolbar}>
            <Logo />
            <div>Menu</div>
            <nav>
            ...
            </nav>
        </navigation>
    )
}

export default toolbar