import React from "react";
import '../../css/home-page-css.css';
import RecommendationComponent from "../../components/recommendation/RecommendationComponent";
import query from '../../common/query'
import NavBarComponent from "../common/NavBarComponent";

class HomePageComponent extends React.Component {

    state = {
        searchText: ''
    }

    _doSearch() {
        this.props.history.push(query('/search', {
            s: this.state.searchText
        }));
    }

    _handleSearchTextChange = (event) => this.setState({searchText: event.target.value});

    _handleSearchKeyPress = (event) => {
        if (event.key === 'Enter') {
            this._doSearch();
        }
    }

    _handleSearchButtonPress = (event) => {
        event.preventDefault();
        this._doSearch();
    }



    render() {
        return (
            <div className="homepage">
                <NavBarComponent/>
                <RecommendationComponent/>
            </div>

        )
    }
}

export default HomePageComponent;
