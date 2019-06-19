import React from 'react';
import { connect } from 'react-redux';
import Code from '@material-ui/icons/Code';
import Person from '@material-ui/icons/Person';

import './layout.less';

import Navbar from './navbar/Navbar';
import ViewController from './views/ViewController';
import Error from '../components/views/Error';

const App = ({ error }) => (
    <div className="app">
        {console.log(error)}
        <Navbar />
        {(error) ? <Error /> : < ViewController />}
        <footer className="footer">
            <a href="https://github.com/benedictkempkes/racing" target="_blank"><Code />&nbsp;Source Code</a>
            <a href="https://www.xing.com/profile/Benedict_Kempkes" target="_blank"><Person />&nbsp;Xing Profile</a>
        </footer>
    </div>
)

const mapStateToProps = (state) => ({
    error: state.error
})

export default connect(mapStateToProps)(App)