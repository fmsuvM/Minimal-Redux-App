import { combineEpics, createEpicMiddleware } from 'redux-observable';
import Rx from 'rxjs';
import Debug from 'debug';
import api from '../utils/apiUtils';

import {
    REQUEST_DATA,
    FETCHING_PROJECTS,
    RECEIVE_DATA,
    requestData,
    fetchingProjects,
    receiveData
} from '../actions/index';

const debug = Debug('ocreilly::middleware::index');

const requestDataEpic = (action$, store) =>
    action$.ofType(REQUEST_DATA)
        .do(_ => store.dispatch(fetchingProjects()))
        .switchMap(action => {
            const{ id } = action.payload;
            return api.getPokemonNameFromId(id)
        })
        .map(({ data }) => {
            return receiveData(data)
        })
;

export default createEpicMiddleware(combineEpics(
    requestDataEpic
));
