import React from 'react'
import "../../css/registration-page-css.css"

class RegistrationComponent extends React.Component {

    /* pop-up to alert if user is under-age. */
    alertUser () {
        alert('User is underage, please select a different role!')
    }

    render() {
        return (
            <div>
                <body className="text-center">
                <form className="form-signin">
                    <div className="h1 logo">
                        Film Finder
                    </div>

                    <h2>Sign Up</h2>

                    <input type="email" id="inputEmail" className="form-control"
                           placeholder="Email address" required="" autoFocus=""/>
                    <label htmlFor="inputEmail" className="sr-only">
                        Email
                    </label>
                    <input type="password" id="inputPassword" className="form-control"
                           placeholder="Password" required="" autoFocus=""/>
                    <label htmlFor="inputEmail" className="sr-only">
                        Password
                    </label>
                    <input type="confirm-password" id="inputPassword" className="form-control"
                           placeholder="Confirm password" required="" autoFocus=""/>
                    <label htmlFor="inputEmail" className="sr-only">
                        Confirm Password
                    </label>

                    <h5>Select a role:</h5>

                    <select id="users">
                        <option value="Admin">Admin</option>
                        <option onClick={this.alertUser} value="Minor">Minor</option>
                        <option value="Regular">Regular</option>
                    </select>

                    <br/>

                    <button className="btn btn-md btn-dark btn-block"
                            type="submit">Register
                    </button>
                </form>
                </body>
            </div>
        )
    }
}

export default RegistrationComponent;
