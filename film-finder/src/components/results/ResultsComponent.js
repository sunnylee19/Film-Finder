import React from "react";
import {searchMoviesByTitle} from "../../services/MovieService"
import '../../css/home-page-css.css';
import '../../css/user-page-css.css'
import ResultsSearchComponent from "./ResultsSearchComponent";
import '../../css/results-page-css.css'
import ResultsGridComponent from "./ResultsGridComponent";
import UserPageComponent from "../user/UserPageComponent";
import ResultsListComponent from "./ResultsListComponent";

class ResultsComponent extends React.Component {

    state = {
        layout: 'grid',
        displayResults: true,
        newMovieResult: 'New Movie Result',
        movies: []
    }

    async searchMovies() {
        const queryParams = new URLSearchParams(this.props.location.search)
        const searchTerm = queryParams.get('s');
        if (!searchTerm) return;

        const movies = await searchMoviesByTitle(searchTerm);

        this.setState({movies});
    }


    // component did mount from the extension.
    componentDidMount = async () => {
        await this.searchMovies();
    }

    // component did update from the extension.
    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.location.search !== prevProps.location.search) {
            await this.searchMovies();
        }
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
                        showMovieResults={this.showMovieResults} movies={this.state.movies}/>
                }

                {
                    this.state.displayResults && this.toggle && <ResultsListComponent
                        showMovieResults={this.showMovieResults} movies={this.state.movies}/>
                }
            </div>
        )
    }
}

export default ResultsComponent;
