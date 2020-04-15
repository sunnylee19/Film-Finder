import rawQuery, { get } from '../common/query';
import {TMDB_MOVIES_URL, API_KEY} from '../common/constants';
import Movie from '../models/Movie';

const query = (path, queryParams = {}) => fetch(rawQuery(TMDB_MOVIES_URL + path, {...queryParams, api_key: API_KEY}));

export const searchMoviesByTitle = async (searchQuery, page=1) => {
    const result = await query('/search/movie', {
        query: searchQuery,
        include_adult: false,
        language: 'en-US',
        page
    });
    const asJson = await result.json();
    if (!asJson.results) return [];

    const movies = asJson.results.map(item => Movie.parseSearchResult(item));
    const numPages = asJson.total_pages;
    let foundIds = [];
    return [movies.filter(item => {
        const result = !(foundIds.find(id => id === item.id));
        foundIds.push(item.id);
        return result;
    }), numPages];
}

export const findMovieById = async (id) => {
    const [movie, credits] = await Promise.all([query(`/movie/${id}`), query(`/movie/${id}/credits`)]);
    const [movieAsJSON, creditsAsJSON] = await Promise.all([movie.json(), credits.json()]);

    return Movie.parse(movieAsJSON, creditsAsJSON.crew);
}

export const getPopularMovies = async (id) => {
    const resp = await query('/movie/popular');
    const json = await resp.json();
    return json.results.map(item => Movie.parseSearchResult(item));
}