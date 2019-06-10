import React from 'react';

import EventController from './EventController';
import { ERGEBNIS } from '../../../constants';

const Event = ({ place, position, time, race  }) => (
    <div>
        <h2>{place}</h2>
        <h3>{time}</h3>
        <h3>{(position) ? 'Platz ' + position : <span>&nbsp;</span>}</h3>
        <div>
            <EventController page={ERGEBNIS} style='calendarButton' race={race}>
                Ergebnis
            </EventController>
        </div>
    </div>
)

export default Event