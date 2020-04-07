import React from 'react';
import './App.css';
import HomePageComponent from "./components/home/HomePageComponent";
import SignInPageComponent from "./components/login/SignInPageComponent";
import UserPageComponent from "./components/user/UserPageComponent";
import ResultsComponent from "./components/results/ResultsComponent";
import RegistrationComponent from './components/register/RegistrationComponent';
import MovieDetailsComponent from "./components/details/MovieDetailsComponent"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import userReducer from './reducers/userReducer';
import { getMyProfile } from './services/UserService';
import { setUser } from './actions/userActions';

// switch design to Route.

const store = createStore(combineReducers({
    user: userReducer
}));

(async () => {
    try {
        const me = await getMyProfile();
        store.dispatch(setUser(me));
    } catch (ex) {}
})()

const App = () =>
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path="/" component={HomePageComponent}/>
                <Route exact path="/login" component={SignInPageComponent}/>
                <Route exact path="/register" component={RegistrationComponent}/>
                <Route exact path="/user" component={UserPageComponent}/>
                <Route exact path="/movies" component={ResultsComponent}/>
                <Route exact path="/movies/:movieId" component={MovieDetailsComponent}/>
            </Switch>
        </Router>
    </Provider>

export default App;
