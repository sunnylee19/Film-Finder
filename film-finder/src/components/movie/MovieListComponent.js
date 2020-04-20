import React from "react";
import MovieComponent from "./MovieComponent";

class MovieListComponent extends React.Component {

    render() {
        return (
            <div className="container">
                <MovieComponent movies={this.props.movies}/>
            </div>
        );
    }
}

export default MovieListComponent;
