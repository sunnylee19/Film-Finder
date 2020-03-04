import React from "react";
import '../css/sign-in-css.css';
class SignInPageComponent extends React.Component {

    render() {
        return (
            <div>
                <body className="text-center">
                    <form className="form-signin">
                        <div className="h1 logo">Film Finder</div>
                        <label htmlFor="inputEmail" className="sr-only">
                            Email address
                        </label>
                        <input type="email" id="inputEmail" className="form-control"
                               placeholder="Email address" required="" autoFocus=""/>
                        <label htmlFor="inputPassword" className="sr-only">
                            Password
                        </label>
                        <input type="password" id="inputPassword" className="form-control"
                               placeholder="Password" required=""/>
                        <button className="btn btn-md btn-dark btn-block"
                                type="submit">Sign in
                        </button>
                    </form>


                </body>
            </div>
        )
    }
}

export default SignInPageComponent;