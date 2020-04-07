import React, { useState } from 'react';
import { useLocation, useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import query from '../../common/query';
import '../../../src/css/nav-bar-component.css'
import withUser from '../../common/withUser';
import { logout } from '../../services/UserService';

export default withUser(props => {
    const queryParams = new URLSearchParams(useLocation().search);
    const history = useHistory();
    const {user} = props;
    const [searchText, setSearchText] = useState(queryParams.get('s') || '');

    const doSearch = () => history.push(query('/movies', {s: searchText, page: 1}));
    const handleSearchTextChange = e => setSearchText(e.target.value);
    const handleSearchKeyPress = e => e.key === 'Enter' && doSearch();
    const handleSearchButtonPress = e => {
        e.preventDefault();
        doSearch();
    };
    const logoutHandler = async () => {
        await logout();
        props.setUser(null);
    };

    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark navbar-static-top">
            <div className="navbar-brand logo"><Link to="/">Film Finder</Link></div>

            <div  className="navbar-collapse">
                <form className="form-inline col-lg-12 mx-auto">
                    <input className="form-control mr-sm-2 w-50" type="text"
                           value={searchText}
                           onChange={handleSearchTextChange}
                           onKeyPress={handleSearchKeyPress}
                           placeholder="Find movies"
                           aria-label="Search"/>
                    <button className="btn btn-outline-info my-2 my-sm-0"
                            onClick={handleSearchButtonPress}
                            type="submit">Search
                    </button>
                </form>
            </div>
            {!user &&
            <Link className="nav-link" to="/login">
                Log In
            </Link>
            }
            {!user &&
            <Link className="nav-link" to="/register">
                Sign Up
            </Link>
            }
            {user &&
            <Link className="nav-link" to="/user">
                My Profile <i className="fas fa-user"></i>
            </Link>
            }
            {user &&
            <a className="nav-link" href="#" onClick={logoutHandler}>
                Log Out
            </a>
            }
        </nav>
    );
});
