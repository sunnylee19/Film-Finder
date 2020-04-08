import React from "react";
import MovieComponent from "./MovieComponent";

class MovieListComponent extends React.Component {

    render() {
        return (
            <div className="container">
                <MovieComponent/>
            </div>
        );
    }
}

export default MovieListComponent;