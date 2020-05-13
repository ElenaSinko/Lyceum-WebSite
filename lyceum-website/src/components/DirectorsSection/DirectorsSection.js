import React from "react";
import classes from "./DirectorsSection.module.scss"
import DirectorItem from "../DirectorItem/DirectorItem";

const DirectorsSection = props => {
    return (
        <ul className={classes.DirectorsSection}>
            {props.directors.map((director, index) => {
                return (
                    <li key={director.name + index}>
                        <DirectorItem
                        name={director.name}
                        title={director.title}
                        telephone={director.telephone}
                        email={director.email}
                        src={director.src}
                        cite={director.cite}
                        />
                    </li>
                )
            })}
        </ul>
    )
};

export default DirectorsSection
