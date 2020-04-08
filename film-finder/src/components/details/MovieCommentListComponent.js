import React, { useEffect, useState } from 'react';
import MovieCommentComponent from './MovieCommentComponent';
import { findCommentsForMovie, postComment } from '../../services/CommentService';
import withUser from '../../common/withUser';

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
        await updateComments();
    };


    useEffect(() => {
        updateComments();
    }, [id]);
    return (
        <div>
            {comments.map(comment =>
                <MovieCommentComponent comment={comment} key={comment.id}/>
            )}
            {comments.length === 0 && !loading &&
            <span>No comments yet</span>}
            {user &&
            <div>
                <textarea className="form-control" value={commentText} onChange={handleCommentChange}/>
                <br/>
                <button className="btn btn-primary" onClick={handlePostComment}>
                    Post Comment
                </button>
            </div>}
        </div>
    );
});