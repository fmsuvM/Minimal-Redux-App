import { createAction } from 'redux-actions';
import Debug from 'debug';

const debug = Debug('ocreilly::actions::index');

export const REQUEST_DATA = 'REQUEST_DATA';
export const FETCHING_PROJECTS = 'FETCHING_PROJECTS';
export const RECEIVE_DATA = 'RECEIVE_DATA';

export const requestData = createAction(REQUEST_DATA);
export const fetchingProjects = createAction(FETCHING_PROJECTS);
export const receiveData = createAction(RECEIVE_DATA);
