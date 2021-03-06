import React from "react"
import '../../css/movie-card-css.css'

// Using same approach as Assignment select each result with active state.

class ResultsListItemComponent extends React.Component {

    render() {
        return (
            <div>
                {/* <li className={`list-group-item ${this.state.active?'active':''}`}> */}
                <li>
                    <div className="row">
                        <div className="col-12 row">
                            <div className="col-12 wbdv-list-item-border">

                                <div className={"wbdv-movie-title"} id={"spiderman"}>
                                    <h3 className={"wbdv-movie-title-item"}>Spiderman: Far From Home (2019)</h3>
                                </div>

                                Best Stream: <a href="https://www.netflix.com/">Netflix</a>

                            <div className="col-12 wbdv-table-view">
                                <button className={"wbdv-details-button btn btn-default"}>
                                    Details
                                </button>
                                <ol>Last Modified: March 04 2020</ol>
                                <ol>Rating: PG-13</ol>
                                <ol>Duration: 2 Hours 9 Minutes</ol>
                            </div>
                            </div>

                                <div className="col-12 wbdv-list-item-border">
                                <div className={"wbdv-movie-title"} id={"spiderman"}>
                                    <h3 className={"wbdv-movie-title-item"}> Joker (2020)</h3>
                                </div>

                                Best Stream: <a href="https://www.netflix.com/">Netflix</a>

                            <div className="col-5 wbdv-table-view">
                                <button className={"wbdv-details-button btn btn-default"}>
                                    Details
                                </button>
                                <ol>Last Modified: March 04 2020</ol>
                                <ol>Rating: R</ol>
                                <ol>Duration: 2 hours 10 minutes</ol>
                            </div>
                        </div>
                        </div>
                    </div>
                </li>
            </div>
        )
    }
}

export default ResultsListItemComponent
