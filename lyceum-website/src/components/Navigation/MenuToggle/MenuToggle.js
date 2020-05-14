import React from 'react'
import classes from './MenuToggle.module.scss'

const MenuToggle = props => {
    const cls = [classes.MenuToggle, 'fa']
    if(props.isOpen) {
        cls.push(`fa-times`)
        cls.push(classes.open)
    } else {
        cls.push(`fa-bars`)
    }

    function keyDownHandler(evt) {
        if(evt.keyCode === 13){
            props.onToggle();
        }
    }

    return (
        <React.Fragment>
            {props.isOpen && <i tabIndex='0' className={`${classes.MenuToggle} fa fa-bars`} />}
            <i
                tabIndex='0'
                className={cls.join(' ')}
                onClick={props.onToggle}
                onKeyDown={(evt) =>keyDownHandler(evt)}
            />
        </React.Fragment>
    )
}

export default MenuToggle


