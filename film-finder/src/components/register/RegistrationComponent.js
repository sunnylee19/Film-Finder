import React from 'react'
import "../../css/registration-page-css.css"

import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

import withUser from '../../common/withUser'
import moment from 'moment';
import { register } from '../../services/UserService';
import { Redirect } from 'react-router';
import {Link} from 'react-router-dom';
import NavBarComponent from "../common/NavBarComponent";
import PrivacyLinkComponent from "../privacy/PrivacyLinkComponent";

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
        error: null,
        privacyChecked: false
    };

    _handleChangeFirstName = event => this.setState({firstName: event.target.value});
    _handleChangeLastName = event => this.setState({lastName: event.target.value});
    _handleChangeEmail = event => this.setState({email: event.target.value});
    _handleChangePassword = event => this.setState({password: event.target.value});
    _handleChangeConfirmPassword = event => this.setState({confirmPassword: event.target.value});
    _handleChangeRole = event => this.setState({role: event.target.value});
    _handleChangeDob = day => this.setState({dob: moment(day, 'YYYY-M-D')});
    _handleCheckPrivacy = event => this.setState({privacyChecked: event.target.checked});

    _handleSubmit = async (event) => {
        event.preventDefault();
        this.setState({error: null});
        const alphanumeric = /^[a-zA-Z0-9\- ]+$/;
        const {firstName, lastName, email, password, confirmPassword, role, dob} = this.state;
        if (password !== confirmPassword) {
            this.setState({
                              error: 'Passwords do not match.'
                          });
        } else if (firstName.trim() === '' || lastName.trim() === '') {
            this.setState({
                              error: 'Please enter your name.'
                          });
        } else if (!alphanumeric.test(firstName) || !alphanumeric.test(lastName)) {
            this.setState({
                error: 'Name must only contain letters, numbers, dashes, and spaces'
            });
        } else if (dob.isSameOrAfter(moment(moment().format('YYYY-MM-DD'), 'YYYY-MM-DD'))) {
            this.setState({
                              error: 'Please select a valid birthday.'
                          });
        } else if (email.trim() === '') {
            this.setState({
                              error: 'Please enter your email.'
                          })
        } else if (password.trim() === '' || password.length < 6) {
            this.setState({
                              error: 'Please enter a valid password (must have at least 6 characters).'
                          });
        } else if (!email.includes('@') && email.length > 0) {
            this.setState({
                              error: 'Please enter a valid email with @ symbol.'
                          });
        } else if (!this.state.privacyChecked) {
            this.setState({
                error: 'Please read and accept our privacy policy'
            })
        } else {
            try {
                const user = await register(email, password, firstName, lastName, moment(dob, 'YYYY-M-D'), role);
                this.props.setUser(user);
            } catch (ex) {
                this.setState({
                                  error: 'Email already in use'
                              });
            }
        }

    };

    render() {
        const {user, setUser} = this.props;
        const {firstName, lastName, email, password, confirmPassword, role, dob, error, focused} = this.state;
        if (user !== null) {
            return <Redirect to="/"/>;
        }
        return (
            <div className="text-center">
                <NavBarComponent/>
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
                    <input type="password" name="inputPassword" className="form-control"
                           placeholder="Confirm password" required="" autoFocus=""
                           value={confirmPassword} onChange={this._handleChangeConfirmPassword}/>
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

                    <DayPickerInput placeholder="Birthday (YYYY-M-DD)"
                                    format="YYYY-MM-DD"
                                    classNames={{
                                        container: "form-group",
                                        overlay: "DayPickerInput-Overlay",
                                        overlayWrapper: "DayPickerInput-OverlayWrapper"
                                    }}
                                    inputProps={{
                                        className: "form-control"
                                    }}
                                    onDayChange={this._handleChangeDob}/>


                    <div className="form-group">
                        <select name="inputRole" value={role} onChange={this._handleChangeRole} className="custom-select">
                            <option value="MEMBER">Member</option>
                            <option value="ADMIN">Admin</option>
                        </select>
                        <label htmlFor="inputRole" className="sr-only">
                            Role
                        </label>
                    </div>

                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="privacy-check" value={this.state.privacyChecked} onChange={this._handleCheckPrivacy}>
                        </input>
                        <label className="form-check-label" htmlFor="privacy-check">
                            <PrivacyLinkComponent/>
                        </label>
                    </div>

                    <button className="form-group btn btn-md btn-dark btn-block"
                       onClick={this._handleSubmit}
                            type="submit">
                        Register
                    </button>
                    <p>
                        Already have an account?
                        <Link to="/login"> Log In</Link>
                    </p>
                    <br/>
                    {error && <span className="text-danger">{error}</span>}
                </form>
            </div>
        )
    }
}

export default withUser(RegistrationComponent);
