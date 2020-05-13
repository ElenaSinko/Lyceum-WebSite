import React from "react";
import classes from "./VacanciesPage.module.scss"
import BlockTitle from "../../components/UI/BlockTitle/BlockTitle";
import VacancyItem from "../../components/VacancyItem/VacancyItem";
import {connect} from 'react-redux';

const VacanciesPage = props => {
    return (
        <div className={classes.VacanciesPage}>
            <BlockTitle>Postes Vacants</BlockTitle>
            <div>
                <h1>Nos postes vacants: </h1>
                {props.vacancies.map((postVac, index) => {
                    return <VacancyItem key={postVac + index} vacancy={postVac.vacancy} level={postVac.level}/>
                })}
            </div>
        </div>
    )
};

function mapStateToProps(state) {
    return {
        vacancies: state.lycee.vacancies,
    }
}

export default connect(mapStateToProps)(VacanciesPage)
