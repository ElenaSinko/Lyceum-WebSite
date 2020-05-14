import React from "react";
import classes from './ModalWindow.module.scss'
import BackDrop from "../BlackDrop/BlackDrop";
import Button from "../Button/Button";
import {connect} from "react-redux";
import {closeModalWindow} from "../../../store/actions/actions";

const ModalWindow = props => {
    return (
    <React.Fragment>
        <div className={classes.ModalWindow}>
            <h2>{props.children}</h2>
            <Button onClick={props.closeModalWindow}>OK</Button>
        </div>
        <BackDrop onClick={props.closeModalWindow}/>
    </React.Fragment>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        closeModalWindow: () => dispatch(closeModalWindow())
    }
}

export default connect(null, mapDispatchToProps)(ModalWindow)
