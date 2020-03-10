import React from "react";
import '../../css/user-page-css.css';
import MyUserRatingListComponent from "../profile/MyUserRatingListComponent";
import MyUserCommentsListComponent from "../profile/MyUserCommentsListComponent";
import MyUserDetailsComponent from "../profile/MyUserDetailsComponent";
import ResultsComponent from "../results/ResultsComponent";
import ResultsGridComponent from "../results/ResultsGridComponent";
import ResultsListComponent from "../results/ResultsListComponent";
import {Link} from "react-router-dom"
import ResultsListItemComponent from "../results/ResultsListItemComponent";
import NavBarComponent from "../../components/common/NavBarComponent";

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
