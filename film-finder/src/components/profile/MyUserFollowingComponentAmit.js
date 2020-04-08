import React from 'react';
import withUser from "../../common/withUser";
import '../../css/user-following-resize-css.css'
import {Link} from "react-router-dom";

class MyUserFollowingComponent extends React.Component {

    render () {
        return (
            <div>
                User is following:

                <div className="wbdv-card-container fa-border">

                    <Link className="fa-border" to="100">Jose Annunziato</Link>

                    <Link className="fa-border" href="#">User 123</Link>

                    <Link className="fa-border" href="#">User 234</Link>

                    <Link className="fa-border" href="#">User 345</Link>

                </div>

            </div>
        )
    }
}

export default withUser(MyUserFollowingComponent);
