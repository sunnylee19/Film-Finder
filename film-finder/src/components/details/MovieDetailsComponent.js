import React, {useEffect, useState} from 'react';
import {findMovieById} from '../../services/MovieService';
import '../../css/details-page-css.css';
import MovieCommentComponent from './MovieCommentComponent';

export default ({match}) => {
    const [movie, setMovie] = useState(null);
    useEffect(() => {
        (async () => {
            const movie = await findMovieById(match.params.movieId);
            setMovie(movie);
        })();
    }, [match.params.movieId]);    
    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark navbar-static-top">
                <div className="navbar-brand logo">Film Finder</div>

                <div  className="navbar-collapse">
                    <form className="form-inline col-lg-12 mx-auto">
                        <input className="form-control mr-sm-2 w-50" type="text"
                                placeholder="Find movies"
                                aria-label="Search"/>
                        <button className="btn btn-outline-info my-2 my-sm-0"
                                type="submit">Search
                        </button>
                    </form>
                </div>
                <div>
                    <a className="nav-link" href="#">
                        Log out <i className="fas fa-user"></i>
                    </a>
                </div>
            </nav>
            {movie &&
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-3">
                        <img src={movie.posterUrl} className="movie-poster"/>
                    </div>
                    <div className="col-12 col-md-9">
                        <div className="card">
                            <div className="card-body">
                                <h2 className="movie-title">
                                    {movie.title} ({movie.year})
                                </h2>
                                <hr/>
                                <div className="movie-genres">
                                    {movie.genres.join(', ')}
                                </div>
                                <br/>
                                {/* <hr/> */}
                                Director: {movie.director}
                                <br/>
                                Released: {movie.releaseDate}
                                <br/><br/>
                                <h3>
                                    Summary
                                </h3>
                                <hr/>
                                <p>
                                    {movie.plot}
                                </p>
                            </div>                        
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                <h4>Comments</h4>
                                <hr/>

                                <MovieCommentComponent comment={{
                                    user: {
                                        name: 'Jose Annunziato'
                                    },
                                    postedOn: 'Yesterday at 11:45am',
                                    body: 'This movie was really great. 10/10'
                                }}/>
                                <MovieCommentComponent comment={{
                                    user: {
                                        name: 'Jose Annunziato'
                                    },
                                    postedOn: 'Yesterday at 11:45am',
                                    body: 'This movie was really great. 10/10'
                                }}/>
                                <MovieCommentComponent comment={{
                                    user: {
                                        name: 'Jose Annunziato'
                                    },
                                    postedOn: 'Yesterday at 11:45am',
                                    body: 'This movie was really great. 10/10'
                                }}/>
                            </div>
                        </div>

                        
                    </div>
                </div>
            </div>
            }
        </div>
    );
}