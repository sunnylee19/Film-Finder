import React from "react";
import '../css/home-page-css.css';
import RecommendationComponent from "./RecommendationComponent";

class HomePageComponent extends React.Component {

    render() {
        return (
            <div>


                <nav className="navbar navbar-expand-md navbar-dark bg-dark navbar-static-top">
                    <div className="navbar-brand">Film Finder</div>

                    <div  className="navbar-collapse">
                        <form className="form-inline col-lg-12 mx-auto">
                            <input className="form-control mr-sm-2 w-50" type="text"
                                   placeholder="Find movies"
                                   aria-label="Search"/>
                            <button className="btn btn-outline-info my-2 my-sm-0"
                                    type="submit">Search
                            </button>
                        </form>
                    </div>
                    <div>
                        <a className="nav-link" href="#">
                            Log out <i className="fas fa-user"></i>
                        </a>
                    </div>
                </nav>
                <RecommendationComponent/>
            </div>
        )
    }
}

export default HomePageComponent;