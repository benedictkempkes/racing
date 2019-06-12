import React from 'react';
import './layout.less';

import Navbar from './navbar/Navbar';
import ViewController from './views/ViewController'

const App = () => (
    <div className="app">
        <Navbar />
        <ViewController />
    </div>
)

export default App