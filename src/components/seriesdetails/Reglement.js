import { connect } from 'react-redux';
import React from 'react';

const Regelement = ({ data, loading }) => (
    <div>
        {data}
    </div>
)

const mapStateToProps = (state) => ({
    data: state.data,
    loading: state.loading
})

export default connect(mapStateToProps)(Regelement)