import React from 'react';
import { connect } from 'react-redux';

import Event from './Event';

const Calendar = ({ calendar }) => (
    <div>
        {
            calendar.map((item, index) => (
                <Event key={index} place={item.Strecke} time={item.Zeit} position={item.Position} />
            ))
        }
    </div>
)

const mapStateToProps = (state) => ({
    calendar: state.calendar
})

export default connect(mapStateToProps)(Calendar)