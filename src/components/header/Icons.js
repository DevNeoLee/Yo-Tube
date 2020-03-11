import React from 'react';
import appIcons from './appIcons.png';
import createIcon from './createIcon.png';
import settingIcon from './settingIcon.png';
import notificationIcon from './notificationIcon.png';
import signinIcon from './signinIcon.png';


function Icons() {


    return (
        <div className="container" >
            <img src={ createIcon } className="createIcon" />
            <img src={ appIcons } className="appIcon"/>
            <img src={ settingIcon } className="settingIcon"/>
            <img src={ signinIcon } className="signinIcon"/>
        </div>
    )
}

export default Icons;
