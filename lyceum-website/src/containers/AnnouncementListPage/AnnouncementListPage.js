import React from "react";
import classes from './AnnouncementListPage.module.scss'
import AnnouncementSection from "../../components/AnnouncementSection/AnnouncementSection";
import BlockTitle from "../../components/UI/BlockTitle/BlockTitle";
import {connect} from 'react-redux';

class AnnouncementListPage extends React.Component {

    render() {
        return (
            <div className={classes.AnnouncementListPage}>
                <BlockTitle>Actualite</BlockTitle>
                <AnnouncementSection announcements={this.props.announcements}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        announcements: state.lycee.announcements,
    }
}


export default connect(mapStateToProps)(AnnouncementListPage)
