import React from 'react';
import { Link } from 'react-router-dom';

export default ({movie}) => (
    <div class="col-xs-12 col-sm-6 col-md-3 card">
        <img src={movie.posterUrl}/>
        <div className="wbdv-movie-title">
            {movie.title}
        </div>

        Best Stream: <a href="https://www.netflix.com/">Netflix</a>

        
            <button className="wbdv-details-button btn btn-default">
                <Link to={`/movies/${movie.id}`}>
                    Details
                </Link>
            </button>
        
    </div>
);