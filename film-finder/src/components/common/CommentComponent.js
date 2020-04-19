import React from 'react';
import {postComment} from "../../services/CommentService";

class CommentComponent extends React.Component {

    /* To Do: figure out this part to add user followers */
    addComment = () => {
        postComment()
    }

    render() {
        return (
            <div>
                <ul>
                    <li>
                        <textarea>Zootopia- "This is a really good movie, must watch!"</textarea>
                    </li>

                </ul>

                <br/>

                <h1>Comments Posted By User: </h1>

                <ul>
                    <li>Star Wars- "Very enjoyable, definitely nice movie after semester ends."</li>
                </ul>

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
