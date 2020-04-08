import React from "react";
import '../../css/user-page-css.css';
import MyUserRatingListComponent from "../profile/MyUserRatingListComponent";
import MyUserCommentsListComponent from "../profile/MyUserCommentsListComponent";
import MyUserDetailsComponentAmit from "../profile/MyUserDetailsComponentAmit"
import NavBarComponent from "../../components/common/NavBarComponent";
import MyUserFollowingComponent from "../profile/MyUserFollowingComponent";

class UserPageComponentAmit extends React.Component {
    render() {
        return (
            <div>
                <NavBarComponent/>
                <MyUserDetailsComponentAmit/>
                <MyUserRatingListComponent/>
                <MyUserCommentsListComponent/>
                <MyUserFollowingComponent/>
            </div>
        )
    }
}

export default UserPageComponentAmit;
