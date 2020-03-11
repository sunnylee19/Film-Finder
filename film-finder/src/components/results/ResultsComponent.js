import React from "react";
import {searchMoviesByTitle} from "../../services/MovieService"
import '../../css/home-page-css.css';
import '../../css/user-page-css.css'
import ResultsSearchComponent from "./ResultsSearchComponent";
import '../../css/results-page-css.css'
import ResultsGridComponent from "./ResultsGridComponent";
import NavBarComponent from "../common/NavBarComponent";

import ResultsListComponent from "./ResultsListComponent";

class ResultsComponent extends React.Component {

    state = {
        layout: 'grid',
        displayResults: true,
        newMovieResult: 'New Movie Result',
        movies: [],
        loading: true
    }

    async searchMovies() {
        this.setState({loading: true});
        const queryParams = new URLSearchParams(this.props.location.search)
        const searchTerm = queryParams.get('s');
        if (!searchTerm) return;

        const movies = await searchMoviesByTitle(searchTerm);

        this.setState({movies, loading: false});
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

// embed the HTML coding for the render.
    render() {
        return (

            <div>

                <NavBarComponent/>

                <br/>

                {/* grid format for the components */}

                {
                    this.state.displayResults && this.toggle && <ResultsGridComponent
                        loading={this.state.loading} movies={this.state.movies}/>
                }
            </div>
        )
    }
}

export default ResultsComponent;
