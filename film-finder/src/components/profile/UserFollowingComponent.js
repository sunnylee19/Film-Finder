import React from 'react';
import withUser from "../../common/withUser";
import '../../css/user-following-resize-css.css'
import {Link} from "react-router-dom";
import RatingComponent from "../rating/RatingComponent";
import UserFollowerListComponent from "../user/UserFollowerListComponent";

class UserFollowingComponent extends React.Component {

    render () {
        return (
            <div className="w-100">
                <div className="card">
                    <h5 className="card-header">Following</h5>
                    <div className="card-body">
                        <ul>
                            <li><UserFollowerListComponent/></li>
                        </ul>
                    </div>
                </div>

            </div>
        )
    }
}

export default withUser(UserFollowingComponent);
