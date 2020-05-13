import React from "react";
import classes from './AnnouncementItemPage.module.scss'
import {Link} from "react-router-dom"
import {connect} from 'react-redux'
import BlockTitle from "../../components/UI/BlockTitle/BlockTitle";

const AnnouncementItemPage = props => {

    function titleInURLTransformer (title) {
        return title.toLowerCase().split(' ').join('-')
    }

    const newAnnounces = props.announcements.map((announcement) => {
        announcement.url = titleInURLTransformer(announcement.title);
        return announcement
    });

    const AnnounceToShow = newAnnounces.filter(function(announce) {
        return announce.url === props.match.params.name
    })[0];
    return (
        <div className={classes.AnnouncementItemPage}>
            <BlockTitle>
                <Link className={classes.Link} to={'/actualite'}>Actualité</Link> <i className="fas fa-arrow-circle-right"/> {AnnounceToShow.title}
            </BlockTitle>
            <div className={classes.AnnounceArticle}>
            <h1>{AnnounceToShow.title}</h1>
                {AnnounceToShow.text.map((p, index) => {
                    return (
                        <p key={p + index}>{p}</p>
                    )
                })}
            </div>
        </div>
    )
};

function mapStateToProps (state) {
    return {
        announcements: state.lycee.announcements
    }

}

export default connect(mapStateToProps)(AnnouncementItemPage)
