import axios from 'axios';
import Debug from 'debug';
import qs from 'qs';
import 'babel-polyfill';

const debug = Debug('ocreilly::apiUtil');
const host = 'http://pokeapi.co/api/v2/';

class Utils {
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
}

const api = new Utils();
export default api;