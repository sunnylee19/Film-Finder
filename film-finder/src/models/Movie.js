import moment from 'moment';
import { GENRES } from '../common/constants';

export default class Movie {

    constructor({title, releaseDate, runtime, rated, genres, director, plot, posterUrl, id, imdbRating, imdbId}) {
        this.title = title;
        this.releaseDate = releaseDate;
        this.runtime = runtime;
        this.rated = rated;
        this.genres = genres;
        this.director = director;
        this.plot = plot;
        this.posterUrl = posterUrl || 'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg';
        this.id = id;
        this.imdbRating = imdbRating;
        this.imdbId = imdbId;
    }

    static parse({
        id,
        overview,
        release_date,
        genres,
        poster_path,
        vote_average,
        title,
        runtime,
        imdb_id
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
            runtime,
            imdbId: imdb_id
        })
    }

    static parseSearchResult({
        id,
        title,
        release_date,
        genre_ids,
        overview,
        poster_path,
        vote_average,
        imdb_id
    }) {
        return new Movie({
            id,
            title,
            releaseDate: moment(release_date),
            genres: genre_ids.map(id => GENRES[id]),
            plot: overview,
            posterUrl: poster_path && `https://image.tmdb.org/t/p/w600_and_h900_bestv2${poster_path}`,
            imdbRating: vote_average,
            imdbId: imdb_id
        });
    }
}
