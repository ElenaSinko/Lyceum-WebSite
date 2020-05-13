import React from "react";
import classes from "./VacancyItem.module.scss"

const VacancyItem = props => {
    return (

        <div className={classes.PostVacantItem}>
            <i className="fas fa-arrow-right"/>
            <div className={classes.PostVacant}>
                <h3>{props.vacancy} {props.level ? props.level : null}</h3>
            </div>

        </div>
    )
}

export default VacancyItem
