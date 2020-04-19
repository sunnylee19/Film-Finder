import React from "react";
import '../../css/my-user-rating-list-css.css';
import RatingComponent from "../rating/RatingComponent";

class UserRatingListComponent extends React.Component {

    render() {
        return (
            <div className="w-100">
                <div className="card">
                    <h5 className="card-header">Ratings</h5>
                    <div className="card-body">
                        <ul>
                            {this.props.ratings.map(rating =>
                                <RatingComponent key={rating.id.movieId} rating={rating}/>
                            )}
                        </ul>
                    </div>
                </div>

            </div>
        )
    }
}

export default UserRatingListComponent;



