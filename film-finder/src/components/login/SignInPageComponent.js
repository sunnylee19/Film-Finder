import React from "react";
import '../../css/sign-in-css.css';
import withUser from "../../common/withUser";
import { login } from "../../services/UserService";
import { Redirect } from "react-router";
import {Link} from 'react-router-dom';
import NavBarComponent from "../common/NavBarComponent";

class SignInPageComponent extends React.Component {

    state = {
        email: '',
        password: '',
        error: null
    };

    _handleChangeEmail = event => this.setState({email: event.target.value});
    _handleChangePassword = event => this.setState({password: event.target.value});

    login = async (event) => {
        event.preventDefault();
        try {
            this.props.setUser(await login(this.state.email, this.state.password));
        } catch (ex) {
            this.setState({
                error: 'Incorrect username or password'
            });
        }
    };

    render() {
        const {user} = this.props;
        const {email, password, error} = this.state;
        if (user !== null) {
            return <Redirect to="/"/>;
        }
        return (
            <div className="text-center">
                <NavBarComponent/>
                <form className="form-signin" onSubmit={this.login}>
                    <div className="h1 logo">Film Finder</div>
                    <label htmlFor="inputEmail" className="sr-only">
                        Email address
                    </label>
                    <input type="email" id="inputEmail" className="form-control"
                            placeholder="Email address" required="" autoFocus="" value={email} onChange={this._handleChangeEmail}/>
                    <label htmlFor="inputPassword" className="sr-only">
                        Password
                    </label>
                    <input type="password" id="inputPassword" className="form-control"
                            placeholder="Password" required="" value={password} onChange={this._handleChangePassword}/>
                    <button className="btn btn-md btn-dark btn-block"
                            type="submit">
                        Sign in
                    </button>
                    {error && <span className="text-danger">{error}</span>}
                    <p>For new users, please first register in the &nbsp;
                        <Link className="btn-btn-link" to="/register">sign up page.</Link></p>
                </form>
            </div>
        )
    }
}

export default withUser(SignInPageComponent);
