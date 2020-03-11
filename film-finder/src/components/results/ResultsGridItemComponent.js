import React from 'react';
import '../../css/movie-card-css.css'

// try W3 schools card:
// source: https://www.w3schools.com/w3css/w3css_cards.asp

// To Do: make it dynamic, instead of placeholder data.

export default ({movie}) => (
    <div className="row w3-container">
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 w3-card-4">
            <img
                className={"wbdv-results"}
                src="https://upload.wikimedia.org/wikipedia/en/b/bd/Spider-Man_Far_From_Home_poster.jpg"
                width={"100px"}
                height={"100px"}/>


            <div className={"wbdv-movie-title w3-container w3-center"} id={"spiderman"}>
                Spiderman: Far From Home (2019)
            </div>

            Best Stream: <a href="https://www.netflix.com/">Netflix</a>

            <button className={"wbdv-details-button btn btn-default"}>
                Details
            </button>
        </div>

        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 w3-card-4">
            <img
                className={"wbdv-results"}
                src="https://upload.wikimedia.org/wikipedia/en/e/e1/Joker_%282019_film%29_poster.jpg"
                width={"100px"}
                height={"100px"}/>


            <div className={"wbdv-movie-title w3-container w3-center"} id={"spiderman"}>
                Joker (2020)
            </div>

            Best Stream: <a href="https://www.netflix.com/">Netflix</a>

            <button className={"wbdv-details-button btn btn-default"}>
                Details
            </button>
        </div>

        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 w3-card-4">
            <img
                className={"wbdv-results"}
                src="https://upload.wikimedia.org/wikipedia/en/4/4f/Frozen_2_poster.jpg"
                width={"100px"}
                height={"100px"}/>


            <div className={"wbdv-movie-title w3-container w3-center"} id={"spiderman"}>
                Frozen II (2019)
            </div>

            Best Stream: <a href="https://www.netflix.com/">Netflix</a>

            <button className={"wbdv-details-button btn btn-default"}>
                Details
            </button>
        </div>
    </div>
);
