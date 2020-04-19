import React from 'react';
import '../../css/user-follower-list-component-css.css';
import {Link} from 'react-router-dom';

class UserFollowerListComponent extends React.Component {

    render() {
        return (
            <div>
                <ul>
                    <div className="row">
                    <li className="col-3">
                        <div className="card user-following-user" >
                            <img className="mx-auto user-following-user"
                                 src="https://inayatmiah.files.wordpress.com/2015/01/fbpic.jpg"
                                 alt="User image"/>
                            <div className="card-body text-center">
                                <Link to="/user/111">Amit</Link>
                            </div>
                        </div>
                    </li>
                    <li className="col-3">
                        <div className="card user-following-user" >
                            <img className="mx-auto user-following-user"
                                 src="https://i.pinimg.com/236x/8d/90/a9/8d90a954dd2cbd7b67ed7e5b4013c46e.jpg"
                                 alt="User image"/>
                            <div className="card-body text-center">
                                <Link to="/user/112">Alice</Link>
                            </div>
                        </div>
                    </li>
                    <li className="col-3">
                        <div className="card user-following-user" >
                            <img className="mx-auto user-following-user"
                                 src="https://inayatmiah.files.wordpress.com/2015/01/fbpic.jpg"
                                 alt="User image"/>
                            <div className="card-body text-center">
                                <Link to="/user/113">Bob</Link>
                            </div>
                        </div>
                    </li>
                    </div>
                </ul>
            </div>
        )
    }
}

export default UserFollowerListComponent;
