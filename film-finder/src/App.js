import React from 'react';
import './App.css';
import HomePageComponent from "./components/home/HomePageComponent";
import SignInPageComponent from "./components/login/SignInPageComponent";
import MyUserPageComponent from "./components/user/MyUserPageComponent";
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
    } catch (ex) {
        store.dispatch(setUser(null));
    }
})()

const App = () =>
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path="/" component={HomePageComponent}/>
                <Route exact path="/login" component={SignInPageComponent}/>
                <Route exact path="/register" component={RegistrationComponent}/>
                <Route exact path="/profile" component={MyUserPageComponent}/>
                <Route exact path="/profile/:userId" component={UserPageComponent}/>
                <Route exact path="/search" component={ResultsComponent}/>
                <Route exact path="/details/:movieId" component={MovieDetailsComponent}/>
            </Switch>
        </Router>
    </Provider>

export default App;
