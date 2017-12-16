import { combineReducers } from 'redux';
import { handleActions, handleAction } from 'redux-actions';
import Debug from 'debug';

import {
    REQUEST_DATA,
    FETCHING_PROJECTS,
    RECEIVE_DATA
} from '../actions/index.js';

const debug = Debug('ocreilly::reducers::index');

const initialState = {
    isFetching: false,
    data: {
        name: '???',
        image: 'https://i.gyazo.com/179f7bd68a97a3911c4acba2eb4161b1.png',
        types: [
            '???'
        ],
        weight: '???'
    },
    showButton: false
};

const countTypes = (data) => {
    const typesNum = data.length;// 配列の長さ取得
    const haveTypes = {
        ...data.reduce((prev, types, index) => {
            prev[index] = types.type.name;
            return prev
        }, {})
    };
    const typeArray = [];
    Object.keys(haveTypes).forEach((key) => {
        typeArray.push(haveTypes[key])
    });
    debug('types',typeArray);
    return typeArray;
} 

export default handleActions({
    [FETCHING_PROJECTS]: (state, action) => {
        return {
            ...state,
            isFetching: true
        }
    },
    [RECEIVE_DATA]: (state, action) => {
        debug('receive data', action)
        const{ data } = action.payload;
        return Object.assign({}, state, {
            data: {
                name: data.name,
                image: data.sprites.front_default,
                types: countTypes(data.types),
                weight: data.weight
            },
            isFetching: false
        })
    }    
}, initialState);