import React from "react";
import classes from './PresentationPage.module.scss'
import BlockTitle from "../../components/UI/BlockTitle/BlockTitle";
import Separator from "../../components/UI/Separator/Separator";
import WOW from 'wowjs';

export default class Presentation extends React.Component {
    componentDidMount() {
        new WOW.WOW({
            live: false
        }).init();
    }
    render() {
        const cls = [`wow`, 'zoomIn'];
        return (
            <div className={classes.PresentationPage}>
                <BlockTitle>Présentation</BlockTitle>
                <div>
                    <h3 id='Chiffres'>Chiffres clés</h3>
                    <ul>
                        <li className={cls.join(' ')}>plus de <span>4000</span> élève chaque année</li>
                        <li className={cls.join(' ')} data-wow-delay=".5s"><span>25</span> ans d'expérience</li>
                        <li className={cls.join(' ')} data-wow-delay="1s"><span>100%</span> à  BAC cinq dernières années</li>
                    </ul>
                </div>
                <Separator/>
                <h3>Notre vision</h3>
                <Separator/>
                <h3>Histoire du lycée Mbele</h3>
            </div>
        )
    }

}

