import React from 'react';
import classes from './Modal.css'
import Backdrop from '../../Backdrop/Backdrop'
import Aux from '../../../HOC/Aux'

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