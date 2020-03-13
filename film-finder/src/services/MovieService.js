import rawQuery from '../common/query';
import {OMDB_MOVIES_URL, API_KEY} from '../common/constants';
import Movie from '../models/Movie';

const query = (queryParams) => fetch(rawQuery(OMDB_MOVIES_URL, {...queryParams, apikey: API_KEY}));

export const searchMoviesByTitle = async (searchQuery, page=1) => {
    const result = await query({s: searchQuery, type: 'movie', page});
    const asJson = await result.json();
    if (!asJson.Search) return [[], 0];

    const movies = asJson.Search.map(item => Movie.parse(item));
    const numPages = Math.ceil(asJson.totalResults / 10);
    let foundIds = [];
    return [movies.filter(item => {
        const result = !(foundIds.find(id => id === item.id));
        foundIds.push(item.id);
        return result;
    }), numPages];
}

export const findMovieById = async (id) => {
    const result = await query({i: id});
    const asJson = await result.json();

    return Movie.parse(asJson);
}
