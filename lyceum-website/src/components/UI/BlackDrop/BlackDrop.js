import React from "react";
import classes from "./BlackDrop.module.scss"

const BackDrop = props => <div className={classes.Backdrop} onClick={props.onClick}/>;

export default BackDrop
