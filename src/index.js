import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux'
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware} from 'redux'
import reducers from "./redux/reducers"

const Store = createStore(reducers);


render(
    <Provider store={Store}><App /></Provider>, document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
