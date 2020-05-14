import React from "react";
import classes from "./Header.module.scss"
import logo from '../../img/unnamed.png';
import {NavLink, Link} from "react-router-dom";
import MenuToggle from "../Navigation/MenuToggle/MenuToggle";
import Media from 'react-media';
import {connect} from 'react-redux'
import {changeMenuState} from '../../store/actions/actions'

const Header = props => {
    console.log(props)
    return (
        <div className={classes.Header}>
            <div className={classes.Flex}>
                <div className={classes.LogoContainer}>
                <Link to={'/'}><img className={classes.Logo} src={logo} alt="logo"/></Link>
                </div>
                <Media queries={{
                    large: "(min-width: 1260px)"
                }}>
                    {matches => (matches.large && <h1 className={classes.HeaderLogoTitle}>Lycée MBELE</h1>)}
                </Media>
            </div>
            <Media queries={{
                medium: "(min-width: 1100px)"
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
            <MenuToggle onToggle={props.changeMenuState} isOpen={props.menuIsOpen}/>
        </div>
    )
};

function mapStateToProps(state) {
    return {
     menuIsOpen: state.lycee.menu
    }
}

function mapDispatchToProps(dispatch) {
    return {
        changeMenuState: () => dispatch(changeMenuState())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
