import React, {useState, useEffect} from "react";
import '../../css/user-page-css.css';
import UserRatingListComponent from "../profile/UserRatingListComponent";
import UserCommentsListComponent from "../profile/UserCommentsListComponent";
import UserDetailsComponent from "../profile/UserDetailsComponent";
import NavBarComponent from "../common/NavBarComponent";
import withUser from "../../common/withUser";
import { getMyProfile } from "../../services/UserService";
import { Redirect } from "react-router";

const MyUserPageComponent = (props) => {
    const {user, setUser} = props;
    const [localUser, setLocalUser] = useState(null);

    useEffect(() => {
        (async () => {
            if (!user) return;
            const me = await getMyProfile();
            setLocalUser(me);
        })();
    }, [user]);
    if (!user) {
        return <Redirect to="/"/>;
    }
    return (
        localUser &&
        <div>
            <NavBarComponent/>
            <div className="row">
                <div className="col-12 col-md-5 float-left">
                    <UserDetailsComponent user={localUser} setUser={setUser} editable={true}/>
                </div>
                <div className="col-12 col-md-7 float-right">
                    <UserRatingListComponent ratings={localUser.ratings}/>
                    <UserCommentsListComponent comments={localUser.comments}/>
                </div>
            </div>
        </div>
    );
}

export default withUser(MyUserPageComponent);
