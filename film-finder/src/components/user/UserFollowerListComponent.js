import React from 'react';
import '../../css/user-follower-list-component-css.css';

class UserFollowerListComponent extends React.Component {

    render() {
        return (
            <div>
                <ul>
                    <li className="col-3">
                        <div className="card user-following-user" >
                            <img className="mx-auto user-following-user"
                                 src="https://inayatmiah.files.wordpress.com/2015/01/fbpic.jpg"
                                 alt="User image"/>
                            <div className="card-body text-center">
                                Amit
                            </div>
                        </div>
                    </li>
                </ul>
            </div>




        )
    }
}

export default UserFollowerListComponent;