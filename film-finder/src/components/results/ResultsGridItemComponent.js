import React from 'react';
import '../../css/movie-card-css.css'

export default ({movie}) => (
    <div className="row">
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 card">
            <img
                className={"wbdv-results"}
                src="https://upload.wikimedia.org/wikipedia/en/b/bd/Spider-Man_Far_From_Home_poster.jpg"
                width={"200px"}
                height={"200px"}/>


            <div className={"wbdv-movie-title"} id={"spiderman"}>
                Spiderman: Far From Home (2019)
            </div>

            Best Stream: <a href="https://www.netflix.com/">Netflix</a>

            <button className={"wbdv-details-button btn btn-default"}>
                Details
            </button>
        </div>

        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 card">
            <img
                className={"wbdv-results"}
                src="https://upload.wikimedia.org/wikipedia/en/e/e1/Joker_%282019_film%29_poster.jpg"
                width={"200px"}
                height={"200px"}/>


            <div className={"wbdv-movie-title"} id={"spiderman"}>
                Joker (2020)
            </div>

            Best Stream: <a href="https://www.netflix.com/">Netflix</a>

            <button className={"wbdv-details-button btn btn-default"}>
                Details
            </button>
        </div>
    </div>
);
