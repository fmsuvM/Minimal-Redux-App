import { combineReducers } from 'redux';
import { handleActions, handleAction } from 'redux-actions';
import Debug from 'debug';

import {
    REQUEST_DATA,
    FETCHING_DATA,
    RECEIVE_DATA,
    CONVERTING_DATA,
    CONVERTED_DATA_RESULT
} from '../actions/index.js';

const debug = Debug('ocreilly::reducers::index');

const initialState = {
    isFetching: false,
    isConverting: false,
    data: {
        id: 0,
        name: '???',
        convertedName: '???',
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
        typeArray.push(haveTypes[key] + ', ')
    });
    debug('types',typeArray);
    return typeArray;
} 

export default handleActions({
    [FETCHING_DATA]: (state, action) => {
        return Object.assign({}, state, {
            isFetching: true
        })
    },
    [RECEIVE_DATA]: (state, action) => {
        debug('receive data', action)
        const{ data } = action.payload;
        return Object.assign({}, state, {
            data: Object.assign({}, state, {
                id: data.id,
                name: data.name,
                convertedName: data.name,
                image: data.sprites.front_default,
                types: countTypes(data.types),
                weight: data.weight
            }),
            isFetching: false,
            showButton: true
        })
    },
    [CONVERTING_DATA]: (state, action) => {
        return Object.assign({}, state, {
            isConverting: true
        })
    },
    [CONVERTED_DATA_RESULT]: (state, action) => {
        debug('converted data', action);
        const convertedName = action.payload.data.names[1].name;
        return Object.assign({}, state, {
            // data: Object.assign({}, state.data, {
            //     convertedName: convertedName
            // }),
            data: {
                ...state.data,
                convertedName: convertedName
            },
            isConverting: false,
            showButton: false
        })
    }
}, initialState);
