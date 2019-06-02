import React from 'react';
import { connect } from 'react-redux';

import HomepageController from './HomepageController';
import { REGLEMENT, FAHRERWERTUNG, RENNKALENDER } from '../../constants';

const Homepage = ({ series, loading }) => (
    <div>
        {(loading) ? undefined : series.map((serie, index) => (
            <div key={index}>
                <h2>{serie.name}</h2>
                <h3>{serie.next}</h3>
                <div>
                    {/* <HomepageController page={REGLEMENT} serie={serie} url={serie.urlReglement}>
                        Reglement
                    </HomepageController> */}
                    <HomepageController page={FAHRERWERTUNG} serie={serie} url={serie.urlDriverS}>
                        Tabellen
                    </HomepageController>
                    <HomepageController page={RENNKALENDER} serie={serie} url={serie.urlKalender}>
                        Rennkalender
                    </HomepageController>
                </div>
            </div>
        ))}
    </div>
)

const mapStateToProps = (state) => ({
    series: state.series,
    loading: state.loading
})

export default connect(mapStateToProps)(Homepage)