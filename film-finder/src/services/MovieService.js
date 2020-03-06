import rawQuery from '../common/query';
import {OMDB_MOVIES_URL} from '../common/constants';
import Movie from '../models/Movie';

const query = (queryParams) => fetch(rawQuery(OMDB_MOVIES_URL, {...queryParams, apikey: process.env.REACT_APP_OMDB_API_KEY}));

export const searchMoviesByTitle = async (searchQuery, page=1) => {
    const result = await query({s: searchQuery, type: 'movie', page});
    const asJson = await result.json();
    if (!asJson.Search) return [];
    return asJson.Search.map(item => Movie.parse(item));
}