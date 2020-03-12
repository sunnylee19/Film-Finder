import moment from 'moment';
import { GENRES } from '../common/constants';

export default class Movie {

    constructor({title, releaseDate, runtime, rated, genres, director, plot, posterUrl, id, imdbRating}) {
        this.title = title;
        this.releaseDate = releaseDate;
        this.runtime = runtime;
        this.rated = rated;
        this.genres = genres;
        this.director = director;
        this.plot = plot;
        this.posterUrl = posterUrl;
        this.id = id;
        this.imdbRating = imdbRating;
    }

    static parse({
        id,
        overview,
        release_date,
        genres,
        poster_path,
        vote_average,
        title,
        runtime
    }, credits) {
        const director = credits.find(item => item.job === 'Director');
        return new Movie({
            id,
            title,
            releaseDate: moment(release_date),
            genres: genres.map(g => g.name),
            plot: overview,
            posterUrl: poster_path && `https://image.tmdb.org/t/p/w600_and_h900_bestv2${poster_path}`,
            imdbRating: vote_average,
            director: director && director.name || 'Unknown',
            runtime
        })
    }

    static parseSearchResult({
        id,
        title,
        release_date,
        genre_ids,
        overview,
        poster_path,
        vote_average
    }) {
        return new Movie({
            id,
            title,
            releaseDate: moment(release_date),
            genres: genre_ids.map(id => GENRES[id]),
            plot: overview,
            posterUrl: poster_path && `https://image.tmdb.org/t/p/w600_and_h900_bestv2${poster_path}`,
            imdbRating: vote_average
        });
    }
}
