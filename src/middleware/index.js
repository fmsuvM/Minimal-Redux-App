import { combineEpics, createEpicMiddleware } from 'redux-observable';
import Rx from 'rxjs';
import Debug from 'debug';
import api from '../utils/apiUtils';

import {
    REQUEST_DATA,
    FETCHING_DATA,
    RECEIVE_DATA,
    CONVERT_DATA,
    requestData,
    fetchingData,
    receiveData,
    convertingData,
    convertedDataResult
} from '../actions/index';

const debug = Debug('ocreilly::middleware::index');

const requestDataEpic = (action$, store) =>
    action$.ofType(REQUEST_DATA)
        .do(_ => store.dispatch(fetchingData()))
        .switchMap(action => {
            const{ id } = action.payload;
            return api.getPokemonNameFromId(id)
        })
        .map(({ data }) => {
            debug('data', data)
            return receiveData(data)
        })
;

const requestConvertDataEpic = (action$, store) => 
        action$.ofType(CONVERT_DATA)
            .do(_ => store.dispatch(convertingData()))
            .switchMap(action => {
                const{ id } = action.payload;
                return api.convertPokemonNameFromId(id);
            })
            .map(({data}) => {
                debug('data', data);
                return convertedDataResult(data);
            })
;

export default createEpicMiddleware(combineEpics(
    requestDataEpic,
    requestConvertDataEpic
));
