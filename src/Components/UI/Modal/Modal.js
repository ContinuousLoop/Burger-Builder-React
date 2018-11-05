import React from 'react';
import classes from './Modal.css'
import Backdrop from '../../UI/Backdrop/Backdrop'
import Aux from '../../../HOC/Auxl'

const Modal = (props) => {
    return <Aux>
        <Backdrop 
        show = {props.show}
        escape={props.escape}/>

        <div className={classes.Modal} style={{ opacity: props.show ? "1" : "0" }}>
          {props.children}
        </div>
        
      </Aux>;
}

export default Modal