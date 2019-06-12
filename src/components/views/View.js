import React from 'react';
import './view.less';

import Gosila from './gosila/Gosila';
import Standings from './standings/Standings';
import Calendar from './calendar/Calendar';
import Results from './result/Results';

import { FAHRERWERTUNG, RENNKALENDER, ERGEBNIS } from '../../constants';

const getPage = activePage => {
    let content;
    switch (activePage.PAGINATION) {
        case FAHRERWERTUNG.PAGINATION:
            content = <Standings />;
            break;
        case RENNKALENDER.PAGINATION:
            content = <Calendar />;
            break;
        case ERGEBNIS.PAGINATION:
            content = <Results />;
            break;
        default:
            content = <Gosila />
    }
    return content;
}

const View = ({ activePage, loading }) => (
    <div className="view">
        {(loading) ? <div className="loader"><div className="lds-hourglass"></div></div> : getPage(activePage)}
    </div>
)

export default View