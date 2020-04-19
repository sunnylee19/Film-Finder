import React, {useState, useEffect} from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { findMovieById } from '../../services/MovieService';
import {Link} from 'react-router-dom';

export default (props) => {
    const [movie, setMovie] = useState(null);
    useEffect(() => {
        const movieId = props.rating.id.movieId;

        (async () => {
            setMovie(await findMovieById(movieId));
        })();
    }, [props.rating.id.movieId]);

    return movie && (
        <li>
            <Box component="fieldset" mb={3} borderColor="transparent">
                <Typography component="legend">
                    <Link to={`/movies/${movie.id}`} className="movie-link">
                        {movie.title}
                    </Link>
                </Typography>
                <Rating
                    value={props.rating.value}
                    readOnly={true}
                />
            </Box>
        </li>
    );
};
