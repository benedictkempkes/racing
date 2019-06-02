import { connect } from 'react-redux';
import React from 'react';

const StandingsD = ({ tablehead, tablebody, loading }) => (
    <div>
        <table>
            <thead>
                <tr>
                    <td>P</td>
                    {
                        tablehead.map((item, index) => (
                            <td key={ index }>{ item }</td>
                        ))
                    }
                </tr>
            </thead>
            <tbody>
                {
                    tablebody.map((row, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
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
    </div>
)

const mapStateToProps = (state) => ({
    tablehead: state.data.shift(),
    tablebody: state.data,
    pagination: state.pagination,
    loading: state.loading
})

export default connect(mapStateToProps)(StandingsD)