import { connect } from 'react-redux';
import React from 'react';
import './standings.less';

import StandingsController from './StandingsController';
import Standing from './Standing';

const Standings = ({ paginationSecond, standings, serie }) => (
    <div className="standings">
        <div className="controls">
            <StandingsController page={'FAHRERWERTUNG'} style='standingsButton'>
                FAHRERWERTUNG
            </StandingsController>
            {
                (standings.team[1]) ?
                <StandingsController page={'TEAMWERTUNG'} style='standingsButton'>
                    TEAMWERTUNG
                </StandingsController>
                :
                undefined
            }            
        </div>
        <div className="wrapper">
            {(paginationSecond === 'FAHRERWERTUNG') ? 
                <div className="driver"><Standing data={standings.driver} win={serie['5']} points={1}/></div> : 
                <div className="team"><Standing data={standings.team} win={serie['6']} points={0}/></div>}
        </div>
    </div>
)

const mapStateToProps = (state) => ({
    paginationSecond: state.paginationSecond,
    standings: state.standings,
    serie: state.serie
})

export default connect(mapStateToProps)(Standings)