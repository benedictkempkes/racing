import React from 'react';
import { connect } from 'react-redux';

import ResultController from './ResultController';
import Result from './Result';
import Highlight from './Highlight';

const Results = ({paginationSecond, result}) => (
    <div>
        <div>
            <span> Nürnburgring Rennen 2</span>
            <ResultController page={(paginationSecond === 'HIGHLIGHT') ? 'ERGEBNIS' : 'HIGHLIGHT'} style='resultButton'>
                {(paginationSecond === 'HIGHLIGHT') ? 'ERGEBNIS' : 'HIGHLIGHT'}
            </ResultController>
            <div>
                {
                    (paginationSecond === 'HIGHLIGHT') ? 
                        <Highlight result={result} /> : <Result result={result} />
                }
            </div>
        </div>
    </div>
)

const mapStateToProps = (state) => ({
    paginationSecond: state.paginationSecond,
    result: state.result,
    loading: state.loading
})

export default connect(mapStateToProps)(Results)