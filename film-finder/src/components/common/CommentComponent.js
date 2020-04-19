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
                        <p>Zootopia- "This is a really good movie, must watch!"</p>
                    </li>

                </ul>

                <br/>

                <ul>
                    <li>Star Wars- "Very enjoyable, definitely nice movie after semester ends."</li>
                </ul>
            </div>
        )
    }
}

export default CommentComponent;
