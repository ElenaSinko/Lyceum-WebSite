import React from "react";
import classes from './PhotoMenuItem.module.scss'
import LinkButton from "../UI/LinkButton/LinkButton";

const PhotoMenuItem = props => {
    return (
        <div className={classes.PhotoMenuItemContainer} style={{backgroundImage: `url(${props.background})`}}>
            <div className={classes.PhotoMenuItem}>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
                <LinkButton url='/presentation'>en savoir plus</LinkButton>
            </div>
        </div>
    )
}

export default PhotoMenuItem
