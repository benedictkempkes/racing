import React from 'react';
import Homepage from '../seriesoverview/Homepage';
import Profile from '../Profile';
import Standings from '../seriesdetails/Standings';
import Calendar from '../seriesdetails/Calendar';
import Result from '../seriesdetails/Result';

import { PROFILE, ARCHIVE, REGLEMENT, FAHRERWERTUNG, TEAMWERTUNG, RENNKALENDER, ERGEBNIS} from '../../constants';

const getPage = activePage => {
    let content;
    switch (activePage) {
        case PROFILE:
            content = <Profile />;
            break;
        case ARCHIVE:
            content = <div>Coming Soon</div>;
            break;
        case REGLEMENT:
            content = <div>Coming Soon</div>;
            break;
        case FAHRERWERTUNG:
            content = <Standings />;
            break;
        case TEAMWERTUNG:
            content = <Standings />;
            break;
        case RENNKALENDER:
            content = <Calendar />;
            break;
        case ERGEBNIS:
            content = <Result />;
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