import React from "react";
import '../css/home-page-css.css';
import RecommendationComponent from "./RecommendationComponent";
import query from '../common/query';
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import UserPageComponent from "./UserPageComponent";
import ResultsComponent from "./ResultsComponent";
import NavBarComponent from './common/NavBarComponent';

class HomePageComponent extends React.Component {

    render() {
        return (
            <div>
                <NavBarComponent/>
                <RecommendationComponent/>

                {null/* add routing here
                <Router>

                    <Route path="/profile/:profileId"
                        exact={true}
                           render={(props) =>
                               <UserPageComponent
                                   {...props}
                                   profileId={props.match.params.profileId}/>
                           }
                    />

                    <Route path="/profile/:profileId/results/:resultsId"
                           exact={true}
                           render={(props) =>
                               <ResultsComponent
                                   {...props}
                                   resultsId={props.match.params.resultsId}/>
                           }
                    />

                </Router> */}
            </div>
        )
    }
}

export default HomePageComponent;
