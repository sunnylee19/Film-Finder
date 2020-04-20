import React from 'react';
import moment from 'moment';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import withUser from '../../common/withUser';
import {Link} from 'react-router-dom';

const renderFlagTooltip = (props) => (
    <Tooltip id="flag-tooltip" {...props}>
        <span className="tooltiptext">
            Flag comment for moderation
        </span>
    </Tooltip>
);

const renderEndorseTooltip = (props) => (
    <Tooltip id="endorse-tooltip" {...props}>
        Endorse this comment as high quality content
    </Tooltip>
);

const renderDeleteTooltip = (props) => (
    <Tooltip id="delete-tooltip" {...props}>
        <span className="tooltiptext">Remove comment.</span>
    </Tooltip>
);

export default withUser(({comment, user, removeComment, flagComment, endorseComment}) => {
    const handleFlagComment = () => {
        flagComment(comment.id);
    };
    const handleUnflagComment = () => {
        flagComment(comment.id, false);
    };
    const handleEndorseComment = () => {
        endorseComment(comment.id);
    };
    const handleDeleteComment = () => {
        removeComment(comment.id);
    };
    return (
        <div className="card" id={`c${comment.id}`}>
            <div className="card-header">
                <div className="comment-name">
                    <Link to={`/profile/${comment.user.id}`}>
                        {comment.user.firstName}
                        <span> </span>
                        {comment.user.lastName}
                    </Link>
                </div>
                <div className="comment-date">
                    Posted {moment(comment.postedOn).calendar()}
                </div>
            </div>
            <div className="card-body">
                {comment.body}
                <p></p>
                <div className="row d-block">
                    <div className="float-right">
                        {comment.flagged &&
                        <span className="text-danger">
                                Flagged <i className="fa fa-flag"></i>
                        </span>
                        }
                        <span> </span>
                        {comment.endorsed &&
                        <span className="text-success">
                            Endorsed by
                            <Link to={`/profile/${comment.endorsed.id}`}>
                                {' ' + comment.endorsed.firstName + ' ' + comment.endorsed.lastName + ' '}
                            </Link>
                            <i className="fa fa-thumbs-up"></i>
                        </span>
                        }
                        <span> </span>
                        {user && user.type !== 'ADMIN' && !comment.flagged &&
                        <OverlayTrigger overlay={renderFlagTooltip} placement="top">
                            <button className="btn btn-sm btn-warning" onClick={handleFlagComment}>
                                <h6>Flag&nbsp;&nbsp;<span></span><i className="fa fa-flag"></i></h6>
                            </button>
                        </OverlayTrigger>
                        }
                        <span>&nbsp;</span>
                        {user && user.type === 'ADMIN' && !comment.endorsed &&
                        <OverlayTrigger overlay={renderEndorseTooltip} placement="top">
                            <button className="btn btn-sm btn-success" onClick={handleEndorseComment}>
                                <h6>Endorse&nbsp;&nbsp;<i className="fa fa-thumbs-up"></i></h6>
                            </button>
                        </OverlayTrigger>
                        }
                        <span>&nbsp;</span>
                        {user && user.type === 'ADMIN' && comment.flagged &&
                        <button className="btn btn-sm btn-primary" onClick={handleUnflagComment}>
                            <h6>Remove Flag&nbsp;&nbsp;<i className="fa fa-check"></i></h6>
                        </button>
                        }
                        <span>&nbsp;</span>
                        {user && user.type === 'ADMIN' &&
                        <OverlayTrigger overlay={renderDeleteTooltip} placement="top">
                            <button className="btn btn-sm btn-danger" onClick={handleDeleteComment}>
                                <h6>Delete&nbsp;&nbsp;<i className="fa fa-trash"></i></h6>
                            </button>
                        </OverlayTrigger>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
});
