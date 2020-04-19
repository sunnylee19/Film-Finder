import React from "react";
import '../../css/my-user-comment-list-css.css';
import CommentComponent from "../common/CommentComponent";
import withUser from "../../common/withUser";

class MyUserCommentsListComponent extends React.Component {

    render() {
        return (
            <div className="w-100">

                <div className="card">
                    <h5 className="card-header">Comments</h5>
                    <div className="card-body">
                        <ul className="list-group">
                            {this.props.comments.map(item => (
                                <CommentComponent key={item.id} comment={item}/>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default withUser(MyUserCommentsListComponent);
