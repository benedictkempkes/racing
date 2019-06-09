import { connect } from 'react-redux';
import React from 'react';

import StandingsController from './StandingsController';
import Standing from './Standing';

const Standings = ({ paginationSecond, standings }) => (
    <div>
        <div>
            <StandingsController page={'FAHRERWERTUNG'} style='standingsButton'>
                FAHRERWERTUNG
            </StandingsController>
            <StandingsController page={'TEAMWERTUNG'} style='standingsButton'>
                TEAMWERTUNG
            </StandingsController>
            {(paginationSecond === 'FAHRERWERTUNG') ? <Standing data={standings.driver} /> : <Standing data={standings.team} />}
        </div>
    </div>
)

const mapStateToProps = (state) => ({
    paginationSecond: state.paginationSecond,
    standings: state.standings,
    loading: state.loading
})

export default connect(mapStateToProps)(Standings)