import { createAction } from 'redux-actions';
import Debug from 'debug';

const debug = Debug('ocreilly::actions::index');

export const REQUEST_DATA = 'REQUEST_DATA';
export const FETCHING_DATA = 'FETCHING_DATA';
export const RECEIVE_DATA = 'RECEIVE_DATA';
export const CONVERT_DATA = 'CONVERT_DATA';
export const CONVERTING_DATA = 'CONVERTING_DATA';
export const CONVERTED_DATA_RESULT = 'CONVERTED_DATA_RESULT';

export const requestData = createAction(REQUEST_DATA, (id) => {
    return {
        id
    }
});
export const fetchingData = createAction(FETCHING_DATA);
export const receiveData = createAction(RECEIVE_DATA, (data) => {
    return {
        data
    }
});
export const convertData = createAction(CONVERT_DATA, (id) => {
    return {
        id
    }
});
export const convertingData = createAction(CONVERTING_DATA);
export const convertedDataResult = createAction(CONVERTED_DATA_RESULT, (data) => {
    return {
        data
    }
});
