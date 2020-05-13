import React from "react";
import classes from './PhotosMenuSection.module.scss'
import PhotoMenuItem from "../PhotoMenuItem/PhotoMenuItem";
import Separator from "../UI/Separator/Separator";
import PhotoResults from '../../img/results.jpg';
import PhotoVision from '../../img/vision.jpg';
import PhotoHistory from '../../img/history.jpg';
import WOW from 'wowjs';


class PhotosMenuSection extends React.Component {
    componentDidMount() {
        new WOW.WOW({
            live: false
        }).init();
    }
    render() {
        const cls = [classes.PhotoMenuSection, 'wow', 'bounceInUp'];
        return (
            <div>
                <Separator/>
                <div className={cls.join(' ')}>
                    <PhotoMenuItem
                        title={"Histoire du lycée Mbele"}
                        description={'Ici vous pouvez trouver des documents supplémentaires et des liens utiles'}
                        background={PhotoHistory}
                    />
                    <PhotoMenuItem
                        title={"Notre vision"}
                        description={'Ici vous pouvez trouver des documents supplémentaires et des liens utiles'}
                        background={PhotoVision}
                    />
                    <PhotoMenuItem
                        title={"Nos résultats"}
                        description={'Ici vous pouvez trouver des documents supplémentaires et des liens utiles'}
                        background={PhotoResults}
                    />
                </div>
                <Separator/>
            </div>
        )
    }

}

export default PhotosMenuSection
