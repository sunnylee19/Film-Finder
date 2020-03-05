import React from "react";
import {faPencilAlt, faPlusCircle, faSave, faTrash} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import '../css/results-page-css.css'
import {MOVIE_URL_SPIDERMAN} from "../common/constants";

/* Using same cards design as Assignment 4 for whiteboard. */

/* Bootstrap Cards Source:
https://getbootstrap.com/docs/4.3/components/card/
* */

class ResultsGridComponent extends React.Component {

    showMovieResults = () => {

    }

    render () {
        return (
            <div className="container">

                <h1>Movie Results: </h1>

                <div class="row">
            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 card">
                <img src="https://upload.wikimedia.org/wikipedia/en/b/bd/Spider-Man_Far_From_Home_poster.jpg" />

                {/* Add in some CRUD buttons here. */}
                <button className={"btn btn-danger"}>
                    <FontAwesomeIcon icon={faTrash}>
                        Delete Movie
                    </FontAwesomeIcon>
                </button>

                <button className={"btn btn-warning"}>
                    <FontAwesomeIcon icon={faSave}>
                        Save Movie
                    </FontAwesomeIcon>
                </button>

                <button className={"btn btn-success"}>
                    <FontAwesomeIcon icon={faPencilAlt}>
                        Edit Movie
                    </FontAwesomeIcon>
                </button>

                <div className={"wbdv-movie-title"} id={"spiderman"}>
                    Spiderman: Far From Home (2019)
                </div>

                Best Stream: <a href="https://www.netflix.com/">Netflix</a>

                <button className={"wbdv-details-button btn btn-default"}>
                    Details
                </button>
            </div>

                <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 card">
                    <img src="https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg"/>

                    {/* Add in some CRUD buttons here. */}
                    <button className={"btn btn-danger"}>
                        <FontAwesomeIcon icon={faTrash}>
                            Delete Movie
                        </FontAwesomeIcon>
                    </button>

                    <button className={"btn btn-warning"}>
                        <FontAwesomeIcon icon={faSave}>
                            Save Movie
                        </FontAwesomeIcon>
                    </button>

                    <button className={"btn btn-success"}>
                        <FontAwesomeIcon icon={faPencilAlt}>
                            Edit Movie
                        </FontAwesomeIcon>
                    </button>

                    <div className={"wbdv-movie-title"} id={"spiderman"}>
                        Avengers: Endgame (2018)
                    </div>

                    Best Stream: <a href="https://www.hulu.com/">Hulu</a>

                    <button className={"wbdv-details-button btn btn-default"}>
                        Details
                    </button>
                </div>

                    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 card">
                        <img src="https://upload.wikimedia.org/wikipedia/en/f/f9/Spider-Man_Homecoming_poster.jpg"/>
                        {/* Add in some CRUD buttons here. */}
                        <button className={"btn btn-danger"}>
                            <FontAwesomeIcon icon={faTrash}>
                                Delete Movie
                            </FontAwesomeIcon>
                        </button>

                        <button className={"btn btn-warning"}>
                            <FontAwesomeIcon icon={faSave}>
                                Save Movie
                            </FontAwesomeIcon>
                        </button>

                        <button className={"btn btn-success"}>
                            <FontAwesomeIcon icon={faPencilAlt}>
                                Edit Movie
                            </FontAwesomeIcon>
                        </button>

                        <div className={"wbdv-movie-title"} id={"spiderman"}>
                            Spiderman: Homecoming (2017)
                        </div>

                        Best Stream: <a href="https://www.hulu.com/">Hulu</a>

                        <button className={"wbdv-details-button btn btn-default"}>
                            Details
                        </button>
                    </div>

                </div>

                {/* Can add movies later if they want to to results. */}
                <div className="wbdv-add-movie">
                    <FontAwesomeIcon icon={faPlusCircle} size={"2x"}>
                        Add more movies to results
                    </FontAwesomeIcon>
                </div>

            </div>
        )
    }
}

export default ResultsGridComponent
