import React from "react";
import classes from "./AnnouncementItem.module.scss"
import LinkButton from "../UI/LinkButton/LinkButton";
import WOW from 'wowjs';

class  AnnouncementItem extends React.Component {
    componentDidMount() {
        new WOW.WOW({
            live: false
        }).init();
    }
    render() {
        const cls = [classes.AnnouncementItem, 'wow', 'lightSpeedIn'];
        if (this.props.type === 'important') {
            cls.push(classes.Important)
        }
        return (
            <div className={cls.join(' ')}>
                <h1>{this.props.title}</h1>
                <p>{this.props.text}</p>
                <div className={classes.ButtonContainer}>
                    <LinkButton type={this.props.type} url={this.props.url}>... en savoir plus</LinkButton>
                </div>
            </div>
        )
    }
}

export default AnnouncementItem
