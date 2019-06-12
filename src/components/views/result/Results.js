import React from 'react';
import { connect } from 'react-redux';
import './results.less';

import ResultController from './ResultController';
import Result from './Result';
import Highlight from './Highlight';

const Results = ({paginationSecond, result, place}) => (
    <div className="results">
        <div className={(result[0]['2']) ? 'controls' : 'controls noHighlight'}>
            <span>{place}</span>
            {(result[0]['2']) ? 
            < ResultController page={(paginationSecond === 'HIGHLIGHT') ? 'ERGEBNIS' : 'HIGHLIGHT'} style='resultButton'>
                {(paginationSecond === 'HIGHLIGHT') ? 'ERGEBNIS' : 'HIGHLIGHT'}
            </ResultController> : 
            undefined}
            
        </div>
        <div className="wrapper">
            {
                (paginationSecond === 'HIGHLIGHT') ? 
                    <Highlight result={result} /> : <Result result={result} />
            }
        </div>
    </div>
)

const mapStateToProps = (state) => ({
    paginationSecond: state.paginationSecond,
    result: state.result,
    place: state.place
})

export default connect(mapStateToProps)(Results)