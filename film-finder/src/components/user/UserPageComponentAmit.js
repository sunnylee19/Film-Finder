import React from "react";
import '../../css/user-page-css.css';
import MyUserRatingListComponent from "../profile/MyUserRatingListComponent";
import MyUserCommentsListComponent from "../profile/MyUserCommentsListComponent";
import MyUserDetailsComponent from "../profile/MyUserDetailsComponent";
import MyUserDetailsComponentAmit from "../profile/MyUserDetailsComponentAmit"
import NavBarComponent from "../../components/common/NavBarComponent";

class UserPageComponentAmit extends React.Component {
    render() {
        return (
            <div>
                <NavBarComponent/>
                <MyUserDetailsComponentAmit/>
                <MyUserRatingListComponent/>
                <MyUserCommentsListComponent/>
            </div>
        )
    }
}

export default UserPageComponentAmit;
