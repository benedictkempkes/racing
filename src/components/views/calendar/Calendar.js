import React from 'react';
import { connect } from 'react-redux';
import './calendar.less';

import Event from './Event';

const getCalendar = (calendar) => {
    return calendar.map((item, index) => (
        <div className="wrapper" key={index}>
            {(index%2) ? 
                <div className="row">
                    <div className="itemWrapper" style={{ justifyContent: 'flex-end', marginLeft: '10px'}}>
                        <Event key={index} place={item['1']} time={item['2']} position={item['3']} newRace={item['4']} image={item['5']} styling='left'/>
                        <span className="horizontal"></span>
                        <span className="vertical"></span>
                        <span className="circle" style={{ right: '-10px' }}></span>
                    </div>
                    <div className="otherSide"></div>
                </div>
                 : 
                <div className="row">
                    <div className="otherSide"></div>
                    <div className="itemWrapper" style={{ justifyContent: 'flex-start', marginRight: '10px'}}>
                        <span className="circle" style={{left: '-10px'}}></span>
                        <span className="vertical"></span>
                        <span className="horizontal"></span>
                        <Event key={index} place={item['1']} time={item['2']} position={item['3']} newRace={item['4']} image={item['5']} styling='right' />
                    </div>
                </div>
                 }
        </div>
    ))
}

const Calendar = ({ calendar }) => (
    <div className='calendar'>
        <div className="calendarWrapper">
            {getCalendar(calendar)}
        </div>
    </div>
)

const mapStateToProps = (state) => ({
    calendar: state.calendar
})

export default connect(mapStateToProps)(Calendar)