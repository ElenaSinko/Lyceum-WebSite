import React from "react";
import classes from "./Drawer.module.scss"
import BackDrop from "../../UI/BlackDrop/BlackDrop"
import {NavLink} from "react-router-dom";
import Media from 'react-media';
import {connect} from "react-redux"
import {closeMenu} from "../../../store/actions/actions";

const Drawer = props => {
    let cls = [classes.Drawer];

    if (!props.menuIsOpen) {
        cls.push(classes.close)
    }

    return(
        <React.Fragment>
            <Media queries={{
                small: "(max-width: 1100px)",
                }}>
                    {matches => (matches.small && <ul className={cls.join(' ')}>
                        <li><NavLink onClick={props.onClose} activeStyle={{fontWeight: 'bold'}} to={'/'} exact className={`${classes.Link}`}>Accueil</NavLink></li>
                        <li><NavLink onClick={props.onClose} activeStyle={{fontWeight: 'bold'}} to={'/actualite'} className={classes.Link}>Actualités</NavLink></li>
                        <li><NavLink onClick={props.onClose} activeStyle={{fontWeight: 'bold'}} to={'/vie-scolaire'} className={classes.Link}>Vie scolaire</NavLink></li>
                        <li><NavLink onClick={props.onClose} activeStyle={{fontWeight: 'bold'}} to={'/presentation'} className={classes.Link}>Présentation</NavLink></li>
                        <li><NavLink onClick={props.onClose} activeStyle={{fontWeight: 'bold'}} to={'/postes-vacants'} className={classes.Link}>Postes vacants</NavLink></li>
                        <li><NavLink onClick={props.onClose} activeStyle={{fontWeight: 'bold'}} to={'/contacts'} className={classes.Link}>Contacts</NavLink></li>
                        <li><a className={classes.DrawerRef} href='http://lyceembele.ddns.net/pronote/eleve.html?login=true&fd=1' target="_blank" rel="noopener noreferrer">Pronote</a></li>
                        <li><a className={classes.DrawerRef} href='http://lyceembele.ddns.net/pronote/eleve.html?login=true&fd=1' target="_blank" rel="noopener noreferrer">Facebook Group</a></li>
                        <li><a className={classes.DrawerRef} href='http://lyceembele.ddns.net/pronote/eleve.html?login=true&fd=1' target="_blank" rel="noopener noreferrer">Youtube Chaîne</a></li>
                        <li><a className={classes.DrawerRef} href='http://lyceembele.ddns.net/pronote/eleve.html?login=true&fd=1' target="_blank" rel="noopener noreferrer">Cours en ligne</a></li>
                    </ul>)}
                </Media>

                <Media queries={{
                    medium: "(min-width: 1100px)",
                }}>
                    {matches => (matches.medium && <ul className={cls.join(' ')}>
                        <li><a className={classes.DrawerRef} href='http://lyceembele.ddns.net/pronote/eleve.html?login=true&fd=1' target="_blank" rel="noopener noreferrer">Pronote</a></li>
                        <li><a className={classes.DrawerRef} href='http://lyceembele.ddns.net/pronote/eleve.html?login=true&fd=1' target="_blank" rel="noopener noreferrer">Facebook Group</a></li>
                        <li><a className={classes.DrawerRef} href='http://lyceembele.ddns.net/pronote/eleve.html?login=true&fd=1' target="_blank" rel="noopener noreferrer">Youtube Chaîne</a></li>
                        <li><a className={classes.DrawerRef} href='http://lyceembele.ddns.net/pronote/eleve.html?login=true&fd=1' target="_blank" rel="noopener noreferrer">Cours en ligne</a></li>
                    </ul>)}
                </Media>

                {props.menuIsOpen && <BackDrop onClick={props.closeMenu}/>}
            </React.Fragment>
        )

};

function mapStateToProps(state) {
    return {
        menuIsOpen: state.lycee.menu
    }
}

function mapDispatchToProps(dispatch) {
    return {
        closeMenu: () => dispatch(closeMenu())
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Drawer)
