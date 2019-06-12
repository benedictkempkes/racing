import React from 'react';
import { connect } from 'react-redux';
import './gosila.less';

import GosilaController from './GosilaController';

import { FAHRERWERTUNG, RENNKALENDER } from '../../../constants';

const Gosila = ({ series, oldSerie }) => (
    <div className="gosila" >
        {series.map((serie, index) => (
            <div key={index}>
                <h2>{serie['1']}</h2>
                <h3>{(serie['2']) ? 'Nächstes Rennen: ' + serie['2'] : 'Beendet'}</h3>
                <h3>{(serie['3']) ? 'Platz: ' + serie['3'] : 'Startet bald'}</h3>
                <h3>Team: {(serie['4']) ? serie['4'] : '-'}</h3>
                <div>
                    <GosilaController page={FAHRERWERTUNG} serie={serie} oldSerie={oldSerie} style='seriesButton'>
                        Tabellen
                    </GosilaController>
                    <GosilaController page={RENNKALENDER} serie={serie} oldSerie={oldSerie} style='seriesButton'>
                        Rennkalender
                    </GosilaController>
                </div>
            </div>
        ))}
    </div >
)

const mapStateToProps = (state) => ({
    series: state.series,
    oldSerie: state.serie
})

export default connect(mapStateToProps)(Gosila)