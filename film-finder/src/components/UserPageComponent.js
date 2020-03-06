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
import NavBarComponent from "./NavBarComponent";

class UserPageComponent extends React.Component {

    render() {
        return (
            <div>
                <NavBarComponent/>
                <MyUserDetailsComponent/>
                <MyUserRatingListComponent/>
                <MyUserCommentsListComponent/>
            </div>
        )
    }
}

export default UserPageComponent;
