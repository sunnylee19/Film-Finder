import React from 'react';

export default ({comment}) => (
    <div className="card">
        <div className="card-header">
            <div className="comment-name">
                {comment.user.name}
            </div>
            <div className="comment-date">
                Posted {comment.postedOn}
            </div>
        </div>
        <div className="card-body">
            {comment.body}
        </div>
    </div>
);