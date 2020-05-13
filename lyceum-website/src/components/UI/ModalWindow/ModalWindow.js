import React from "react";
import classes from './ModalWindow.module.scss'
import Backdrop from "../BlackDrop/BlackDrop";
import Button from "../Button/Button";

const ModalWindow = props => {
    return (
    <React.Fragment>
        <div className={classes.ModalWindow}>
            <h2>{props.children}</h2>
            <Button onClick={props.onCloseModalWindow}>OK</Button>
        </div>
        <Backdrop onClick={props.onCloseModalWindow}/>
    </React.Fragment>
    )
}

export default ModalWindow
