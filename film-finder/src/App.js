import React from 'react';
import './App.css';
import HomePageComponent from "./components/home/HomePageComponent";
import SignInPageComponent from "./components/login/SignInPageComponent";
import UserPageComponent from "./components/user/UserPageComponent";
import ResultsComponent from "./components/results/ResultsComponent";
import MovieDetailsComponent from "./components/details/MovieDetailsComponent"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// switch design to Route.

const App = () =>

    <Router>
        <Switch>
            <Route exact path="/" component={HomePageComponent}/>
            <Route exact path="/login" component={SignInPageComponent}/>
            <Route exact path="/user" component={UserPageComponent}/>
            <Route exact path="/movies" component={ResultsComponent}/>
            <Route exact path="/movies/:movieId" component={MovieDetailsComponent}/>
        </Switch>
    </Router>

    //<SignInPageComponent/>;
    //<HomePageComponent/>;
    //<UserPageComponent/>;
    //<ResultsComponent/>;
    //<NavBarComponent/>;

export default App;
