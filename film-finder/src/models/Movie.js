export default class Movie {

    constructor({title, year, releaseDate, runtime, rated, genres, director, plot, posterUrl, id}) {
        this.title = title;
        this.year = year;
        this.releaseDate = releaseDate;
        this.runtime = runtime;
        this.rated = rated;
        this.genres = genres;
        this.director = director;
        this.plot = plot;
        this.posterUrl = posterUrl;
        this.id = id;
    }

    static parse({
        Title,
        Year,
        Rated,
        Released,
        Runtime,
        Genre = '',
        Director,
        Writer,
        Plot,
        Poster,
        imdbID
    }) {
        return new Movie({
            title: Title,
            year: Year,
            rated: Rated,
            releaseDate: Released,
            runtime: Runtime,
            genres: Genre.split(',').map(genre => genre.trim()),
            director: Director,
            plot: Plot,
            posterUrl: Poster,
            id: imdbID
        })
    }
}
