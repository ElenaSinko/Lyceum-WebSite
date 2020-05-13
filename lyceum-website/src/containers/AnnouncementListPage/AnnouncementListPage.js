import React from "react";
import AnnouncementSection from "../../components/AnnouncementSection/AnnouncementSection";
import BlockTitle from "../../components/UI/BlockTitle/BlockTitle";
import {connect} from 'react-redux';

class AnnouncementListPage extends React.Component {

    render() {
        return (
            <React.Fragment>
                <BlockTitle>Actualite</BlockTitle>
                <AnnouncementSection announcements={this.props.announcements}/>
            </React.Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        announcements: state.lycee.announcements,
    }
}


export default connect(mapStateToProps)(AnnouncementListPage)
