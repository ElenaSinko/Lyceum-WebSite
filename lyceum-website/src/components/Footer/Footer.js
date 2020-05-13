import React from "react";
import classes from './Footer.module.scss'
import logo from '../../img/unnamed.png';
import WOW from 'wowjs';
import Media from 'react-media';

class Footer extends React.Component {
    componentDidMount() {
        new WOW.WOW({
            live: false
        }).init();
    }
    render() {
        const cls = [classes.Logo, 'wow', 'fadeInLeft'];
        const clsContacts = [classes.Contacts, 'wow', 'fadeInLeft'];

        return (
            <div className={classes.Footer}>
                <Media queries={{
                    small: "(min-width: 600px)",
                }}>
                    {matches => (matches.small && <img src={logo} className={cls.join(' ')} alt="logo" data-wow-duration="zs"/>)}
                </Media>
                <div className={clsContacts.join(' ')} data-wow-duration="2s" data-wow-delay=".1s">
                    <h2>Coordonnées</h2>
                    <ul>
                        <li><i className="fas fa-home"/> Lycée Privé de Nzeng-Ayong, Fondation MBELE</li>
                        <li><i className="fas fa-map-marker-alt"/> B.P. 20042, Libreville</li>
                        <li><i className="fas fa-phone-volume"/> +(241)24 12 41 24</li>
                        <li><i className="fas fa-at" /> lyceeMbele@mail.com</li>
                    </ul>
                </div>

            </div>
        )
    }
}

export default Footer
