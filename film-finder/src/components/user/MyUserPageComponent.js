import React from "react";
import '../../css/user-page-css.css';
import UserRatingListComponent from "../profile/UserRatingListComponent";
import UserCommentsListComponent from "../profile/UserCommentsListComponent";
import UserDetailsComponent from "../profile/UserDetailsComponent";
import NavBarComponent from "../../components/common/NavBarComponent";
import UserFollowingComponent from "../profile/UserFollowingComponent";
import withUser from "../../common/withUser";

class UserPageComponent extends React.Component {

    render() {
        const {user, setUser} = this.props;
        return (
            user &&
            <div>
                <NavBarComponent/>
                <div className="row">
                    <div className="col-12 col-md-5 float-left">
                        <UserDetailsComponent user={user} setUser={setUser}/>
                    </div>
                    <div className="col-12 col-md-7 float-right">
                        <UserRatingListComponent ratings={user.ratings}/>
                        <UserCommentsListComponent comments={user.comments}/>
                        <UserFollowingComponent/>
                    </div>
                </div>
            </div>
        )
    }
}

export default withUser(UserPageComponent);
