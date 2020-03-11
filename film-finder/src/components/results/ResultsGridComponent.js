import React from "react";
import {faPlusCircle} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import '../../css/results-page-css.css'
import ResultsGridItemComponent from "./ResultsGridItemComponent";
import {MOVIE_URL_SPIDERMAN} from "../../common/constants";

/* Using same cards design as Assignment 4 for whiteboard. */

/* Bootstrap Cards Source:
https://getbootstrap.com/docs/4.3/components/card/
* */

class ResultsGridComponent extends React.Component {

    showMovieResults = () => {

    }

    render() {
        return (
            <div className="container">

                <h2>Search Results</h2>

                <div class="row">
                    {this.props.movies.map(
                        movie => <ResultsGridItemComponent movie={movie} key={movie.id}/>)}
                </div>
            </div>
        )
    }
}

export default ResultsGridComponent
