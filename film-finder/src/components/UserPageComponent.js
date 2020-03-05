import React from "react";
import '../css/user-page-css.css';
import MyUserRatingListComponent from "./MyUserRatingListComponent";
import MyUserCommentsListComponent from "./MyUserCommentsListComponent";
import MyUserDetailsComponent from "./MyUserDetailsComponent";
import ResultsComponent from "./ResultsComponent";
import ResultsGridComponent from "./ResultsGridComponent";
import ResultsListComponent from "./ResultsListComponent";
import {Link} from "react-router-dom"
import ResultsListItemComponent from "./ResultsListItemComponent";

class UserPageComponent extends React.Component {

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark navbar-static-top">
                    <div className="navbar-brand logo">
                        <a href="/HomePageComponent.js">
                        Film Finder
                        </a>
                    </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <div className="dashboard">Dashboard</div>
                            </li>

                            <li className="nav-item">
                                <div className="dashboard">
                                    <button>
                                    <a href="http://localhost:3000/ResultsComponent.js">Results</a>
                                    </button>
                                </div>
                            </li>

                            <li className="nav-item">
                                <div className="dashboard">
                                    Privacy Policy
                                </div>
                            </li>

                            <li className="nav-item">
                                <div className="dashboard">
                                    General Information
                                </div>
                            </li>

                            <li className="nav-item">
                                <div className="dashboard">
                                    Credits
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
                <MyUserDetailsComponent/>
                <MyUserRatingListComponent/>
                <MyUserCommentsListComponent/>
            </div>
        )
    }
}

export default UserPageComponent;
