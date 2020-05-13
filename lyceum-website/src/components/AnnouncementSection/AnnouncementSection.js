import React from "react";
import AnnouncementItem from "../AnnouncementItem/AnnouncementItem";
import classes from './AnnouncementSection.module.scss'

const AnnouncementSection  = props => {
    return(
        <div className={classes.AnnouncementSection}>
            {props.announcements.map((announcement, index) => <AnnouncementItem
                key={announcement + index}
                title={announcement.title}
                text={`${announcement.text.join(' ').substr(0, 300)} ...`}
                type={announcement.type} url={`/actualite/${announcement.title.toLowerCase().split(' ').join('-')}`}
            />
            )}
        </div>
    )
};

export default AnnouncementSection
