import { combineEpics, createEpicMiddleware } from 'redux-observable';
import Rx from 'rxjs';
import Debug from 'debug';

import {
    REQUEST_DATA,
    FETCHING_PROJECTS,
    RECEIVE_DATA
} from '../actions/index.js';

const debug = Debug('ocreilly::middleware::index');

