import React from 'react';
import { connect } from 'react-redux';
import './event.less';

import EventController from './EventController';
import { ERGEBNIS } from '../../../constants';

const Event = ({ place, position, time, race, serie, oldRace, image, styling  }) => (
    <div className={"event " + styling}>
        <div className="image" style={{backgroundImage: 'url(' + image + ')'}}>

        </div>
        <div className="content">
            <div className="header">
                <h2>{place}</h2>
                <h3>{time}</h3>
                <h3>{(position) ? 'Platz ' + position : <span>&nbsp;</span>}</h3>
            </div>
            <div className="controls">
                {console.log(race)}
                <EventController page={ERGEBNIS} serie={serie} style='calendarButton' race={race} oldRace={oldRace}>
                    Ergebnis
                </EventController>
            </div>
        </div>
    </div>
)

const mapStateToProps = (state) => ({
    serie: state.serie,
    oldRace: state.race
})

export default connect(mapStateToProps)(Event)