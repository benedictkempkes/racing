import React from 'react';
import { connect } from 'react-redux';

import EventController from './EventController';
import { ERGEBNIS } from '../../../constants';

const Event = ({ place, position, time, race, serie, oldRace  }) => (
    <div>
        <h2>{place}</h2>
        <h3>{time}</h3>
        <h3>{(position) ? 'Platz ' + position : <span>&nbsp;</span>}</h3>
        <div>
            <EventController page={ERGEBNIS} serie={serie} style='calendarButton' race={race} oldRace={oldRace}>
                Ergebnis
            </EventController>
        </div>
    </div>
)

const mapStateToProps = (state) => ({
    serie: state.serie,
    oldRace: state.race
})

export default connect(mapStateToProps)(Event)