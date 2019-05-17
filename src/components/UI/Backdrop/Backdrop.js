import React from 'react';
import classes from './Backdrop.module.css';

const Bacdrop = props => {
    return (
        <div className={classes.Backdrop} onClick={props.onClick}/>
    )
};

export default Bacdrop;