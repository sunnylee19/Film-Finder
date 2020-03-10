import React from "react";
import '../../css/my-user-comment-list-css.css';
import CommentComponent from "../common/CommentComponent";

class MyUserCommentsListComponent extends React.Component {

    render() {
        return (
            <div>
                <div className="card">
                    <h5 className="card-header">My Comments</h5>
                    <div className="card-body">
                        <ul>
                            <li><CommentComponent/></li>
                        </ul>
                    </div>
                </div>

            </div>
        )
    }
}

export default MyUserCommentsListComponent;
