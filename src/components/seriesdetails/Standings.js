import { connect } from 'react-redux';
import React from 'react';

import { FAHRERWERTUNG, TEAMWERTUNG } from '../../constants';

import HomepageController from '../seriesoverview/HomepageController';
import Standing from './Standing';
import Header from '../elements/Header';


const Standings = ({ serie }) => (
    <div>
        <Header title={serie.name}/>
        <div>
            <HomepageController page={FAHRERWERTUNG} serie={serie} url={serie.urlDriverS}>
                Fahrerwertung
            </HomepageController>
            <HomepageController page={TEAMWERTUNG} serie={serie} url={serie.urlTeamS}>
                Teamwertung
            </HomepageController>
        </div>
        {<Standing />}
    </div>
)

const mapStateToProps = (state) => ({
    pagination: state.pagination,
    serie: state.serie,
    loading: state.loading
})

export default connect(mapStateToProps)(Standings)