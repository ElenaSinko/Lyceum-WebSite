import React from "react";
import classes from "./Header.module.scss"
import logo from '../../img/unnamed.png';
import {NavLink, Link} from "react-router-dom";
import MenuToggle from "../Navigation/MenuToggle/MenuToggle";
import Media from 'react-media';

const Header = props => {
    return (
        <div className={classes.Header}>
            <div className={classes.Flex}>
                <Link to={'/'}><img className={classes.Logo} src={logo} alt="logo"/></Link>
                <Media queries={{
                    large: "(min-width: 1215px)"
                }}>
                    {matches => (matches.large && <h1 className={classes.HeaderLogoTitle}>Lycée MBELE</h1>)}
                </Media>
            </div>
            <Media queries={{
                medium: "(min-width: 1065px)"
            }}>
                {matches => (matches.medium && <ul className={classes.HeaderList}>
                    <li><NavLink activeStyle={{fontWeight: 'bold'}} to={'/'} exact className={`${classes.Link}`}>Accueil</NavLink></li>
                    <li><NavLink activeStyle={{fontWeight: 'bold'}} to={'/actualite'} className={classes.Link}>Actualités</NavLink></li>
                    <li><NavLink activeStyle={{fontWeight: 'bold'}} to={'/vie-scolaire'} className={classes.Link}>Vie scolaire</NavLink></li>
                    <li><NavLink activeStyle={{fontWeight: 'bold'}} to={'/presentation'} className={classes.Link}>Présentation</NavLink></li>
                    <li><NavLink activeStyle={{fontWeight: 'bold'}} to={'/postes-vacants'} className={classes.Link}>Postes vacants</NavLink></li>
                    <li><NavLink activeStyle={{fontWeight: 'bold'}} to={'/contacts'} className={classes.Link}>Contacts</NavLink></li>
                </ul>)}
            </Media>
            <MenuToggle onToggle={props.onToggle} isOpen={props.isOpen}/>
        </div>
    )
};

export default Header
