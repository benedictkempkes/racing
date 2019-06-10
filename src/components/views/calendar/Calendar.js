import React from 'react';
import { connect } from 'react-redux';

import Event from './Event';

const Calendar = ({ calendar }) => (
    <div>
        {
            calendar.map((item, index) => (
                <Event key={index} place={item['1']} time={item['2']} position={item['3']} race={item['4']} />
            ))
        }
    </div>
)

const mapStateToProps = (state) => ({
    calendar: state.calendar
})

export default connect(mapStateToProps)(Calendar)