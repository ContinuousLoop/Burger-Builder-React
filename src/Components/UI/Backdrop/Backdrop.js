import React from 'react';
import Aux from '../../HOC/Aux';
import classes from './Backdrop.css'

const backdrop = (props) => {
return(
    <Aux>
        {props.show ? <div
            onClick={props.escape}
            className={classes.Backdrop}>
        </div> : null}
    </Aux>
)
}

export default backdrop