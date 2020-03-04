import React from "react";
import '../css/user-page-css.css';
import MyUserRatingListComponent from "./MyUserRatingListComponent";
import MyUserCommentsListComponent from "./MyUserCommentsListComponent";
import MyUserDetailsComponent from "./MyUserDetailsComponent";
class UserPageComponent extends React.Component {

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark navbar-static-top">
                    <div className="navbar-brand logo">Film Finder</div>
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