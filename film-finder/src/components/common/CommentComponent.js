import React, { useEffect, useState } from 'react';
import { findMovieById } from '../../services/MovieService';
import {Link} from 'react-router-dom';
export default (props) => {
    const comment = props.comment;
    const [movie, setMovie] = useState(null);
    useEffect(() => {
        const movieId = comment.movieId;
        (async () => setMovie(await findMovieById(movieId)))();
    }, [comment.movieId])
    return (
        movie &&
        <li className="list-group-item">
            <h5>
                <Link to={`/movies/${movie.id}#c${comment.id}`} className="movie-link">{movie.title}</Link>
            </h5>
            {comment.body}
        </li>
    );
};
