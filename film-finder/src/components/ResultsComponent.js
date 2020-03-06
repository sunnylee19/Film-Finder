import React from "react";
import {findAllMovies} from "../services/FilmFinderService"
import '../css/home-page-css.css';
import '../css/user-page-css.css';
import ResultsSearchComponent from "./ResultsSearchComponent";
import '../css/results-page-css.css'
import ResultsGridComponent from "./ResultsGridComponent";
import UserPageComponent from "./UserPageComponent";
import ResultsListComponent from "./ResultsListComponent";
import ResultsNotExistComponent from "./ResultsNotExistComponent";

class ResultsComponent extends React.Component {

    state = {
        layout: 'grid',
        displayResults: true,
        newMovieResult: 'New Movie Result',
        movies: []
    }

    // component did mount from the extension.
    componentDidMount = async () => {
        const movies = await findAllMovies()

    }

    // component did update from the extension.
    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    // toggle between grid and layout

    toggle = () => {
        this.setState((prevState) => {
            if (prevState.layout === 'table') {
                return {
                    layout: 'grid'
                }
            } else {
                return {
                    layout: 'table'
                }
            }
        })
    }

// embed the HTML coding for the render.
    render() {
        return (

            <div>
                <h1>Film Finder Search Results</h1>

                <br/>

                <ResultsSearchComponent/>

                Based on the query you have provided, here are the results:

                {/* grid format for the components */}

                {
                    this.state.displayResults && this.toggle && <ResultsGridComponent
                        showMovieResults={this.showMovieResults}/>
                }

                {
                    this.state.displayResults && this.toggle && <ResultsListComponent
                        showMovieResults={this.showMovieResults}/>
                }

                <ResultsNotExistComponent/>

            </div>
        )
    }
}

export default ResultsComponent;
