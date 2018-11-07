import React from 'react';
import classes from './Modal.css'
import Backdrop from '../../UI/Backdrop/Backdrop'
import Aux from '../../../HOC/Auxl'

const Modal = (props) => {
  
    let showModal = 
    <div className={classes.Modal}>
        {props.children}
    </div>
            return(
            <Aux>
                <Backdrop show={props.show} escape={props.escape}/>
                {props.show ? showModal : null }
            </Aux>
            )}

export default Modal