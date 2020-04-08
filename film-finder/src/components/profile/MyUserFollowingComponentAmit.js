import React from 'react';
import withUser from "../../common/withUser";
import '../../css/user-following-resize-css.css'
import {Link} from "react-router-dom";
import RatingComponent from "../rating/RatingComponent";

class MyUserFollowingComponent extends React.Component {

    render () {
        return (


            <div>
                <div className="card">
                    <h5 className="card-header">Following</h5>
                    <div className="card-body">
                        <ul>
                            <li><RatingComponent/></li>

                        </ul>
                    </div>
                </div>

            </div>



        )
    }
}

export default withUser(MyUserFollowingComponent);
