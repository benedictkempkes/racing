import { connect } from 'react-redux';
import React from 'react';

import { ERGEBNIS } from '../../constants';

import Header from '../elements/Header';
import HomepageController from '../seriesoverview/HomepageController';

const Calendar = ({ data, serie, loading }) => (
    <div>
        <Header title={serie.name} />
        <div>
            {
                data.map((item, index) => (
                    <div key={index}>
                        <h2>{(item[2]) ? item[0] : item[0] + ' (Beendet)'}</h2>
                        <h3>{item[1]}</h3>
                        {(item[2] ? <HomepageController page={ERGEBNIS} serie={serie} url={item[2]}>Ergebnis</HomepageController> : undefined)}
                    </div>
                ))
            }
        </div>
    </div>
)

const mapStateToProps = (state) => ({
    data: state.data,
    loading: state.loading,
    serie: state.serie
})

export default connect(mapStateToProps)(Calendar)