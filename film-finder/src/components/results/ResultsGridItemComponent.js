import React from 'react';
import '../../css/movie-card-css.css'
import '../../css/results-page-css.css'
import { Link } from 'react-router-dom';

export default ({movie}) => (
    <div className="col-xs-12 col-sm-6 col-md-4 d-flex justify-content-center wbdv-movie-card">
       <div className="card">
            <Link to={`/movies/${movie.id}`}>
                <div className="wbdv-card-container">
                    <img className="wbdv-movie-poster" src={movie.posterUrl} alt="Poster not available"/>
                    <div className="wbdv-movie-title">
                        <h4>{movie.title}</h4>
                    </div>
                </div>
            </Link>
       </div>
    </div>
);
