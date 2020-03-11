import React from "react"
import ResultsGridComponent from "./ResultsGridComponent";
import ResultsListComponent from "./ResultsListComponent";

class ResultsSearchComponent extends React.Component {

    render () {
        return (
            <div>
                <h2>Search Movies</h2>
                <input/>
                <button>Search Film Finder</button>

                <input/>
                <button>Search</button>
            </div>
        )
    }
}

export default ResultsSearchComponent;
