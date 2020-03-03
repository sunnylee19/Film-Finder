import React from "react";
import MovieComponent from "./MovieComponent";

class MovieListComponent extends React.Component {

    render() {
        return (
            <div>
                <div className="card-columns row">
                   <MovieComponent/>
                </div>
            </div>
        )
    }
}

export default MovieListComponent;