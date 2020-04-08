import React from 'react';
import moment from 'moment';

export default ({comment}) => (
    <div className="card">
        <div className="card-header">
            <div className="comment-name">
                {comment.user.firstName}
            </div>
            <div className="comment-date">
                Posted {moment(comment.postedOn).calendar()}
            </div>
        </div>
        <div className="card-body">
            {comment.body}
        </div>
    </div>
);
