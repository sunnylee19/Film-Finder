import React, { useEffect, useState } from 'react';
import MovieCommentComponent from './MovieCommentComponent';
import { findCommentsForMovie, postComment, removeComment, flagComment, endorseComment } from '../../services/CommentService';
import withUser from '../../common/withUser';
import { Link } from 'react-router-dom';

export default withUser(({id, user}) => {
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [commentText, setCommentText] = useState('');
    const handleCommentChange = (event) => setCommentText(event.target.value);
    const updateComments = (async () => {
        setComments(await findCommentsForMovie(id));
        setLoading(false);
    });

    const handlePostComment = async () => {
        if (commentText.trim() === '') return;
        await postComment(id, {
            body: commentText
        });
        setCommentText('');
        await updateComments();
    };

    const handleRemoveComment = async (id) => {
        await removeComment(id);
        await updateComments();
    };

    const handleFlagComment = async (id, flagged = true) => {
        await flagComment(id, flagged);
        await updateComments();
    };

    const handleEndorseComment = async (id, endorsed = true) => {
        await endorseComment(id, endorsed);
        await updateComments();
    }

    useEffect(() => {
        updateComments();
    }, [id]);
    return (
        <div>
            {comments.map(comment =>
                <MovieCommentComponent comment={comment}
                                       key={comment.id}
                                       removeComment={handleRemoveComment}
                                       flagComment={handleFlagComment}
                                       endorseComment={handleEndorseComment}/>
            )}
            {comments.length === 0 && !loading &&
             <p>No comments yet</p>
            }

            {user &&
            <div>
                <textarea className="form-control" value={commentText}
                          placeholder="Enter comment here."
                          onChange={handleCommentChange}/>
                <br/>
                <button className="btn btn-primary" onClick={handlePostComment}>
                    Post Comment
                </button>
            </div>}
            {!user &&
            <span>Please <Link to="/login">sign in</Link> or <Link to="/register">register</Link> to comment</span>}
        </div>
    );
});
