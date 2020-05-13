import React from "react";
import classes from "./BlockTitle.module.scss"
import {Link} from "react-router-dom";

const BlockTitle = props => {
    return (
        <div className={classes.BlockTitle}>
            <Link className={classes.Link} to={'/'}>Accueil</Link> <i className="fas fa-arrow-circle-right"/>{props.children}
        </div>
    )
}

export default BlockTitle
