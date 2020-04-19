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
