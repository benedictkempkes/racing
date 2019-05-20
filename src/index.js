import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import Root from './components/Root';
import { init } from './actions';

const store = createStore(
    reducer,
    applyMiddleware(thunk)
);

store.dispatch(init());
ReactDOM.render(<Root store={store} />, document.getElementById('index'));