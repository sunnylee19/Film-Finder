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

                <h1>Movie Results: </h1>

                <div class="row">
                    {/*
                    {this.props.movies.map(
                        movie => <ResultsGridItemComponent movie={movie} key={movie.id}/>)}
                        */}

                    <ResultsGridItemComponent/>

                    {/* Can add movies later if they want to to results. */}
                    <div className="wbdv-add-movie">
                        <FontAwesomeIcon icon={faPlusCircle} size={"2x"}>
                            Add more movies to results
                        </FontAwesomeIcon>
                    </div>
                </div>
            </div>
        )
    }
}

export default ResultsGridComponent
