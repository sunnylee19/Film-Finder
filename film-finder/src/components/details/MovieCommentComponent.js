import React from 'react';
import moment from 'moment';
import {removeComment} from "../../services/CommentService";
import { Tooltip, OverlayTrigger } from 'react-bootstrap';

const handleFlagComment = async () => {
    console.log("Comment flagged.");
}

const renderFlagTooltip = (props) => (
    <Tooltip id="flag-tooltip" {...props}>
        <span className="tooltiptext">
            Flag comment for moderation
        </span>
    </Tooltip>
);

const renderDeleteTooltip = (props) => (
    <Tooltip id="delete-tooltip" {...props}>
        <span className="tooltiptext">Remove comment.</span>
    </Tooltip>
);

export default ({comment}) => (
    <div className="card" id={`c${comment.id}`}>
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
                <OverlayTrigger overlay={renderFlagTooltip} placement="top">
                    <button className="btn btn-sm btn-warning" onClick={handleFlagComment}>
                        <h6>Flag&nbsp;&nbsp;<span></span><i className="fa fa-flag"></i></h6>
                    </button>
                </OverlayTrigger>
                <span>&nbsp;</span>
                <OverlayTrigger overlay={renderDeleteTooltip} placement="top">
                    <button className="btn btn-sm btn-danger" onClick={removeComment}>
                        <h6>Delete&nbsp;&nbsp;<i className="fa fa-trash"></i></h6>
                    </button>
                </OverlayTrigger>
            </div>
        </div>
    </div>
);
