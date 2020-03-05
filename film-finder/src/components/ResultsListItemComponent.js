import React from "react"
import {faPencilAlt, faSave, faTrash} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

// Using same approach as Assignment select each result with active state.

class ResultsListItemComponent extends React.Component {

    render() {
        return (
            <div>
                {/* <li className={`list-group-item ${this.state.active?'active':''}`}> */}
                <li>
                    <div class="row">
                        <div class="col-12">
                            <div class="col-4">
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
                            </div>

                            <div class="col-3">

                                <div className={"wbdv-movie-title"} id={"spiderman"}>
                                    Spiderman: Far From Home (2019)
                                </div>

                                Best Stream: <a href="https://www.netflix.com/">Netflix</a>

                            </div>

                            <div class="col-5">
                                <button className={"wbdv-details-button btn btn-default"}>
                                    Details
                                </button>
                                Last Modified: March 04 2020
                                Rating: PG-13
                                Duration: 2 Hours 9 Minutes
                            </div>
                        </div>
                    </div>
                </li>
            </div>
        )
    }
}

export default ResultsListItemComponent
