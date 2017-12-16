import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import Debug from 'debug';

import {
    REQUEST_DATA,
    FETCHING_PROJECTS,
    RECEIVE_DATA
} from '../actions/index.js';

const debug = Debug('ocreilly::reducers::index');

const initialState = {
    isFetching: false,
    data: null,
    name: null
};

export default handleActions({
    [REQUEST_DATA]: (state, action) => {
        return {
            ...state
        }
    },
    [FETCHING_PROJECTS]: (state, action) => {
        return {
            ...state
        }
    },
    [RECEIVE_DATA]: (state, action) => {
        return {
            ...state
        }
    }    
}, initialState);