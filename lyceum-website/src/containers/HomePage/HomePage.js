import React from "react";
import classes from "./HomePage.module.scss"
import LinkButton from "../../components/UI/LinkButton/LinkButton";
import PhotosMenuSection from "../../components/PhotosMenuSection/PhotosMenuSection";
import AnnouncementSection from "../../components/AnnouncementSection/AnnouncementSection";
import WOW from 'wowjs';
import {connect} from 'react-redux'

class HomePage extends React.Component {
    componentDidMount() {
        new WOW.WOW({
            live: false
        }).init();
    }
    render() {
        const cls = [classes.AboutSchool, `wow`, 'slideInRight'];
        const clsContainer = [classes.PhotoContainer, `wow`, 'slideInRight'];
        return (
            <div className={classes.HomePage}>
                <div className={clsContainer.join(' ')}>
                    <div className={cls.join(' ')}>
                        <h1>Lycée MBELE</h1>
                        <p>
                            Bienvenue sur le site du Lycée MBELE
                            Lycée MBELE un établissement d'enseignement générale et technologique. L'identité de l'établissement est axée sur les sciences, le Lycée propose différentes spécialités comme les Mathématiques, la Physique-Chimie, la SVT ou encore les Sciences de l'Ingénieur.
                            Enfin, l'établissement propose une formation de BTS (Bac+2) en MCO (Management Commerciale des Organisations).
                        </p>
                        <div className={classes.ButtonContainer}>
                            <LinkButton url='/contacts'>Nous Contacter</LinkButton>
                        </div>
                    </div>
                </div>
                <PhotosMenuSection />
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

export default connect(mapStateToProps)(HomePage)
