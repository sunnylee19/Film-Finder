import React from 'react';

class MyUserFollowingComponent extends React.Component {

    render () {
        return (
            <div>
                Jose is following:

                <div className="wbdv-card-container fa-border">

                <img className="user-photo" src="https://www.ccs.neu.edu/home/ashesh/img/amit.jpg"/>
                <a href="#">Amit Shesh</a>

                <img className="user-photo" src="https://www.ccs.neu.edu/home/ntuck/images/nat-photo.jpg"/>
                <a href="#">Nathaniel Tuck</a>

                </div>

            </div>
        )
    }
}

export default MyUserFollowingComponent;
