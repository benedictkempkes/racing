import React from 'react';
import { connect } from 'react-redux';
import './layout.less';

import Navbar from './navbar/Navbar';
import ViewController from './views/ViewController';
import Error from '../components/views/Error';

const App = ({ error }) => (
    <div className="app">
        {console.log(error)}
        <Navbar />
        {(error) ? <Error /> : < ViewController />}
    </div>
)

const mapStateToProps = (state) => ({
    error: state.error
})

export default connect(mapStateToProps)(App)