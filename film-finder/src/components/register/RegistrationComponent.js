import React from 'react'
import "../../css/registration-page-css.css"
import withUser from '../../common/withUser'
import moment from 'moment';
import { register } from '../../services/UserService';
import { Redirect } from 'react-router';

class RegistrationComponent extends React.Component {

    /* pop-up to alert if user is under-age. */
    alertUser () {
        alert('User is underage, please select a different role!')
    }

    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        role: 'MEMBER',
        dob: moment(),
        error: null
    };

    _handleChangeFirstName = event => this.setState({firstName: event.target.value});
    _handleChangeLastName = event => this.setState({lastName: event.target.value});
    _handleChangeEmail = event => this.setState({email: event.target.value});
    _handleChangeEmail = event => this.setState({email: event.target.value});
    _handleChangePassword = event => this.setState({password: event.target.value});
    _handleChangeConfirmPassword = event => this.setState({confirmPassword: event.target.value});
    _handleChangeRole = event => this.setState({role: event.target.value});
    _handleChangeDob = (event) => this.setState({dob: moment(event.target.value)});

    _handleSubmit = async (event) => {
        event.preventDefault();

        const {firstName, lastName, email, password, confirmPassword, role, dob} = this.state;
        if (password !== confirmPassword) {
            this.setState({
                error: 'Passwords do not match'
            });
        }
        try {
            const user = await register(email, password, firstName, lastName, dob, role);
            this.props.setUser(user);
        } catch (ex) {
            console.log(ex);
        }
    };

    render() {
        const {user, setUser} = this.props;
        const {firstName, lastName, email, password, confirmPassword, role, dob, error, focused} = this.state;
        if (user !== null) {
            return <Redirect to="/"/>;
        }
        return (
            <div>
                <body className="text-center">
                <form className="form-signin" onSubmit={this._handleSubmit}>
                    <div className="h1 logo">
                        Film Finder
                    </div>

                    <h2>Sign Up</h2>

                    <input type="email" name="inputEmail" className="form-control"
                           placeholder="Email address" required="" autoFocus=""
                           value={email} onChange={this._handleChangeEmail}/>
                    <label htmlFor="inputEmail" className="sr-only">
                        Email
                    </label>
                    <input type="password" name="inputPassword" className="form-control"
                           placeholder="Password" required="" autoFocus=""
                           value={password} onChange={this._handleChangePassword}/>
                    <label htmlFor="inputEmail" className="sr-only">
                        Password
                    </label>
                    <input type="confirm-password" name="inputPassword" className="form-control"
                           placeholder="Confirm password" required="" autoFocus=""
                           value={confirmPassword} onChange={this._handleChangeConfirmPassword}/>
                    <label htmlFor="inputEmail" className="sr-only">
                        Confirm Password
                    </label>
                    <input type="text" name="inputFirstName" className="form-control"
                           placeholder="First name" required="" autoFocus=""
                           value={firstName} onChange={this._handleChangeFirstName}/>
                    <label htmlFor="inputFirstName" className="sr-only">
                        First Name
                    </label>
                    <input type="text" name="inputLastName" className="form-control"
                           placeholder="Last name" required="" autoFocus=""
                           value={lastName} onChange={this._handleChangeLastName}/>
                    <label htmlFor="inputLastName" className="sr-only">
                        Last Name
                    </label>
                    <input className="form-control" name="dob"
                           type="date"
                           value={dob.format('YYYY-MM-DD')} onChange={this._handleChangeDob}></input>
                    
                    <div className="form-group">
                    <select name="inputRole" value={role} onChange={this._handleChangeRole} className="form-control">
                        <option value="ADMIN">Admin</option>
                        <option value="MEMBER">Member</option>
                    </select>
                    <label htmlFor="inputRole" className="sr-only">
                        Role
                    </label>
                    </div>
                    <br/>

                    <button className="btn btn-md btn-dark btn-block" onClick={this._handleSubmit}
                            type="submit">Register
                    </button>
                    {error && <span className="text-danger">{error}</span>}
                </form>
                </body>
            </div>
        )
    }
}

export default withUser(RegistrationComponent);
