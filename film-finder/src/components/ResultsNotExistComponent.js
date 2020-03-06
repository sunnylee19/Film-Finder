import React from "react"
import '../css/results-page-css.css'
import ResultsGridComponent from "./ResultsGridComponent";
import ResultsListComponent from "./ResultsListComponent";

class ResultsNotExistComponent extends React.Component {
    render () {
        return (
            <div>
                Sorry, no results are found.

                <br/>

                <img src="https://www.emojirequest.com/images/SorryEmoji.jpg"/>
            </div>
        )
    }
}

export default ResultsNotExistComponent
