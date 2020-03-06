import React from 'react';
import './App.css';
import HomePageComponent from "./components/HomePageComponent";
import SignInPageComponent from "./components/SignInPageComponent";
import UserPageComponent from "./components/UserPageComponent";
import ResultsComponent from "./components/ResultsComponent";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const App = () =>
    <Router>
        <Switch>
            <Route exact path="/" component={HomePageComponent}/>
            <Route exact path="/login" component={SignInPageComponent}/>
            <Route exact path="/user" component={UserPageComponent}/>
            <Route exact path="/movies" component={ResultsComponent}/>
        </Switch>
    </Router>
    //<SignInPageComponent/>;
    //<HomePageComponent/>;
    //<UserPageComponent/>;
    // <ResultsComponent/>;

export default App;
