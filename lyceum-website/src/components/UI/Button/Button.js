import React from "react";
import classes from "./Button.module.scss"

const Button = props => {
    const cls = [classes.Button, classes[props.type]];
    if (props.type === 'important') {
        cls.push(classes.Important)
    }
    return (
        <button
            onClick={props.onClick}
            className={cls.join(` `)}
            disabled={props.disabled}
            type={props.type}
        >
            {props.children}
        </button>
    )
};

export default Button
