import React from 'react';
import moment from 'moment';
import {removeComment} from "../../services/CommentService";
import '../../css/comment-moderation-css.css'

const handleFlagComment = async () => {
    console.log("Comment flagged.");
}

const displayToolTip = async () => {

}

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
            <p></p>
            <div className="row float-right">
                <button className="btn btn-sm btn-warning" onClick={handleFlagComment}>
                    <div className="tooltip">
                    <span
                        className="tooltiptext">Flag comment for moderation, given a violation of <a
                        href="#">Terms of Service.</a>
                    </span>
                    </div>
                    <h6>Flag&nbsp;&nbsp;<span></span><i className="fa fa-flag"></i></h6>
                </button>
                <span>&nbsp;</span>
                <button className="btn btn-sm btn-danger" onClick={removeComment}>
                    <div className="tooltip">
                        <span className="tooltiptext">Remove comment.</span>
                    </div>
                    <h6>Delete&nbsp;&nbsp;<i className="fa fa-trash"></i></h6>
                </button>
            </div>
        </div>
    </div>
);
