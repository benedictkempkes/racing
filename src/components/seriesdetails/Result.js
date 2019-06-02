import { connect } from 'react-redux';
import React from 'react';

const Result = ({ bestL, tablehead, tablebody  }) => (
    <div>
        <table>
            <thead>
                <tr>
                    {
                        tablehead.map((item, index) => (
                            <td key={index}>{item}</td>
                        ))
                    }
                </tr>
            </thead>
            <tbody>
                {
                    tablebody.map((row, index) => (
                        <tr key={index}>
                            {
                                row.map((col, index) => (
                                    <td key={index}>{col}</td>
                                ))
                            }
                        </tr>
                    ))
                }
            </tbody>
        </table>
        <div>
            {bestL}
        </div>
    </div>
)

const mapStateToProps = (state) => ({
    bestL: state.data.shift(),
    tablehead: state.data.shift(),
    tablebody: state.data
})

export default connect(mapStateToProps)(Result)