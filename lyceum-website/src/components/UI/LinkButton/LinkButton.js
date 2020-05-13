import React from "react";
import classes from "./LinkButton.module.scss"
import {Link} from "react-router-dom";

const LinkButton = props => {
    const cls = [classes.LinkButton, classes[props.type]]
    if (props.type === 'important') {
        cls.push(classes.Important)
    }
    return (
        <Link to={props.url} className={cls.join(` `)} type={props.type}>{props.children}</Link>
    )
}

export default LinkButton
