import React from 'react';
import ReactDOM from 'react-dom';
import 'rxjs';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import qs from 'qs';
import Debug from 'debug';

import RequestButton from './RequestButton';
import Explanation from './Explanation';
import Result from './Result';
import ConvertButton from './ConvertButton';

import reducers from '../reducers/index';
import epicsMiddleware from '../middleware/index';
import api from '../utils/apiUtils';

const debug = Debug('ocreilly::components::App');
const isDev = qs.parse(location.search.replace('?', ''))['isDev'] || false;

window.addEventListener('DOMContentLoaded', () => {
    debug('===> Mount App');
    const composeEnhancers = isDev ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose : compose;
    const store = createStore(reducers,
        composeEnhancers(applyMiddleware(
            epicsMiddleware
        )));
    api.init(store)
    ReactDOM.render(
        <Provider store={store}>
            <div className="body">
                <Explanation />
                <RequestButton />
                <Result />
                <ConvertButton />
            </div>
        </Provider>,
        document.getElementById('app')
    );
})