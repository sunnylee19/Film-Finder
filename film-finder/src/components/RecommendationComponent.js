import React from "react";
import MovieListComponent from "./MovieListComponent";


class RecommendationComponent extends React.Component {

    render() {
        return (
            <div>
                <div className="text-center mt-5">
                    <h1 className="user-greeting">Hello Jose!</h1>
                </div>
                <div>
                    <MovieListComponent/>
                </div>
            </div>
        )
    }
}

export default RecommendationComponent;