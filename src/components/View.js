import React from 'react';
import Homepage from './Homepage';
import Profile from './Profile';

import { PROFILE, ARCHIVE } from '../constants';

const getPage = activePage => {
    let content = <Homepage />
    switch (activePage) {
        case PROFILE:
            content = <Profile />;
            break;
        case ARCHIVE:
            content = <div>Coming Soon</div>;
            break;
        default:
            content = <Homepage />
    }
    return content;
}

const View = ({ activePage }) => (
    <div>
        {getPage(activePage)}
    </div>
)

export default View