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

                <button class="btn btn-group-sm btn-success" onClick={this.addComment}>
                    Add Comment
                </button>

                <button class="btn btn-group-sm btn-danger" onClick={this.removeComment}>
                    Delete Comment
                </button>

            </div>
        )
    }
}

export default CommentComponent;
