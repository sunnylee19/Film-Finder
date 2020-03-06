import React from "react";
import '../css/home-page-css.css';
import RecommendationComponent from "./RecommendationComponent";
import query from '../common/query';
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import UserPageComponent from "./UserPageComponent";
import ResultsComponent from "./ResultsComponent";

class HomePageComponent extends React.Component {

    state = {
        searchText: ''
    }

    _doSearch() {
        this.props.history.push(query('/movies', {
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
            <div>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark navbar-static-top">
                    <div className="navbar-brand logo">Film Finder</div>

                    <div  className="navbar-collapse">
                        <form className="form-inline col-lg-12 mx-auto">
                            <input className="form-control mr-sm-2 w-50" type="text"
                                   value={this.state.searchText}
                                   onChange={this._handleSearchTextChange}
                                   onKeyPress={this._handleSearchKeyPress}
                                   placeholder="Find movies"
                                   aria-label="Search"/>
                            <button className="btn btn-outline-info my-2 my-sm-0"
                                    onClick={this._handleSearchButtonPress}
                                    type="submit">Search
                            </button>
                        </form>
                    </div>
                    <div>
                        <a className="nav-link" href="#">
                            Log out <i className="fas fa-user"></i>
                        </a>
                    </div>
                </nav>
                <RecommendationComponent/>

                {null/* add routing here
                <Router>

                    <Route path="/profile/:profileId"
                        exact={true}
                           render={(props) =>
                               <UserPageComponent
                                   {...props}
                                   profileId={props.match.params.profileId}/>
                           }
                    />

                    <Route path="/profile/:profileId/results/:resultsId"
                           exact={true}
                           render={(props) =>
                               <ResultsComponent
                                   {...props}
                                   resultsId={props.match.params.resultsId}/>
                           }
                    />

                </Router> */}
            </div>
        )
    }
}

export default HomePageComponent;
