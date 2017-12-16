import axios from 'axios';
import Debug from 'debug';
import qs from 'qs';
import 'babel-polyfill';

const debug = Debug('ocreilly::apiUtil');
const host = 'http://pokeapi.co/api/v2';

class Utils {
    constructor() {
        this.dispatch = null;
        this.store = null;
    }

    init(store) {
        this.dispatch = store.dispatch;
        this.store = store;
    }

    async getPokemonNameFromId(id) {
        debug('get pokemon name from id', id);
        const url = `${host}/pokemon/${id}`;

        return axios({
            responseType: 'json',
            method: 'GET',
            url: url
        })
        .catch((err) => {
            debug('error is occuered');
        })
    }

    async convertPokemonNameFromId(id) {
        debug('convert pokemon name from id', id);
        const url = `${host}/pokemon-species/${id}`;

        return axios({
            responseType: 'json',
            method: 'GET',
            url: url
        })
        .catch((err) => {
            debug('error is occuered')
        })
    }
}

const api = new Utils();
export default api;