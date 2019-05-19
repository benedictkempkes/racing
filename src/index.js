import React from "react";
import ReactDOM from "react-dom";

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './Reducer';
import App from './App';

const store = createStore(reducer);

const rootElement = document.getElementById('index')
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
)