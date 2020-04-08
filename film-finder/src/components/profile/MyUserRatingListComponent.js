import React from "react";
import '../../css/my-user-rating-list-css.css';
import RatingComponent from "../rating/RatingComponent";
import withUser from "../../common/withUser";
class MyUserRatingListComponent extends React.Component {

    render() {
        return (
            <div>
                <div className="card">
                    <h5 className="card-header">My Ratings</h5>
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

export default withUser(MyUserRatingListComponent);
