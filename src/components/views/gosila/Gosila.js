import React from 'react';
import { connect } from 'react-redux';

import GosilaController from './GosilaController';

import { FAHRERWERTUNG, RENNKALENDER } from '../../../constants';

const Gosila = ({ series, loading }) => (
    <div >
        {(loading) ? undefined : series.map((serie, index) => (
            <div key={index}>
                <h2>{serie.name}</h2>
                <h3>{(serie.next) ? 'Nächstes Rennen: ' + serie.next : 'Beendet'}</h3>
                <h3>{(serie.current) ? 'Platz: ' + serie.current : 'Startet bald'}</h3>
                <h3>Team: {(serie.team) ? serie.team : '-'}</h3>
                <div>
                    <GosilaController page={FAHRERWERTUNG} serie={serie} url={serie.urlSerie} style='seriesButton'>
                        Tabellen
                    </GosilaController>
                    <GosilaController page={RENNKALENDER} serie={serie} url={serie.urlSerie} style='seriesButton'>
                        Rennkalender
                    </GosilaController>
                </div>
            </div>
        ))}
    </div >
)

const mapStateToProps = (state) => ({
    series: state.series,
    loading: state.loading
})

export default connect(mapStateToProps)(Gosila)