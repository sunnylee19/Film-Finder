import React, { useEffect, useState } from "react";
import '../../css/user-page-css.css';
import UserRatingListComponent from "../profile/UserRatingListComponent";
import UserCommentsListComponent from "../profile/UserCommentsListComponent";
import UserDetailsComponent from "../profile/UserDetailsComponent";
import NavBarComponent from "../common/NavBarComponent";
import UserFollowingComponent from "../profile/UserFollowingComponent";
import { getProfileForUser } from "../../services/UserService";


export default (props) => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        const userId = props.match.params.userId;

        (async () => {
            setUser(await getProfileForUser(userId));
        })();
    }, [props.match.params.userId]);
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
    );
};
