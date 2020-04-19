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

import React from 'react';
import {postComment} from "../../services/CommentService";
import moment from "moment";

class CommentComponent extends React.Component {

    /* To Do: figure out this part to add user followers */
    addComment = () => {
        postComment()
    }

    render() {
        return (
            <div>
                <ul>
                    <li class="border border-dark">
                        <p>Zootopia- "This is a really good movie, must watch!"
                        {moment().calendar().day}</p>
                    </li>

                </ul>

                <br/>
            </div>
        )
    }
}

export default CommentComponent;
