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

                    <h2>Please register for new account.</h2>

                    <input type="email" id="inputEmail" className="form-control"
                           placeholder="Email address" required="" autoFocus=""/>
                    <label htmlFor="inputEmail" className="sr-only">
                        Email
                    </label>
                    <input type="confirm-email" id="inputEmail" className="form-control"
                           placeholder="Confirm Email" required="" autoFocus=""/>
                    <label htmlFor="inputEmail" className="sr-only">
                        Confirm Email
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

                    Select a role:

                    <br/>

                    <input type="checkbox" id="role1" name="admin" value="Admin" />
                        <label htmlFor="role1">Admin</label>

                    <br/>

                    <input onClick={this.alertUser} type="checkbox" id="role2" name="admin" value="Under 18" />
                        <label htmlFor="role2">Under 18</label>

                    <br/>

                    <input type="checkbox" id="role3" name="admin" value="Over 18" />
                        <label htmlFor="role3">Over 18</label>

                    <br/>

                    <input type="checkbox" id="role4" name="admin" value="Guest" />
                        <label htmlFor="role4">Guest</label>

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
