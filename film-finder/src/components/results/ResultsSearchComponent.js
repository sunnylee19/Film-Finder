import React from "react"
import ResultsComponent from "./ResultsComponent";
import ResultsGridComponent from "./ResultsGridComponent";

class ResultsSearchComponent extends React.Component {

    render () {
        return (
            <div>
                <h2>Search Movies</h2>
                <input/>
                <button>Search Film Finder</button>

                <input/>
                <button>Search</button>

                <ul>
                    <li>
                        <ResultsGridComponent/>
                    </li>
                </ul>
            </div>
        )
    }
}

export default ResultsSearchComponent;
