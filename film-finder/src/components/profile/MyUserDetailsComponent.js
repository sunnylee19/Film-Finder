import React from 'react';
import MyUserFollowingComponent from "./MyUserFollowingComponent";

class MyUserDetailsComponent extends React.Component {

    render() {
        return (
            <div>
                <div className="container card user-box col-4 float-left" >
                    <img className="user-photo" src="https://avatars0.githubusercontent.com/u/1682522?s=400&u=5616079a6e3baa83b765695adce7515ac1749114&v=4" alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title text-center">Jose</h5>
                        <form>
                            <div className="form-group row readonly">
                                <label htmlFor="colFormLabelSm"
                                       className="col-sm-2 col-form-label col-form-label-sm">
                                    Email
                                </label>
                                <div className="col-sm-10">
                                    <input type="email" className="form-control form-control-sm"
                                           id="colFormLabelSm" placeholder="reviewer@northeastern.edu"/>
                                </div>
                            </div>
                            <div className="form-group row readonly">
                                <label htmlFor="colFormLabelSm"
                                       className="col-sm-2 col-form-label col-form-label-sm">
                                    Tel.
                                </label>
                                <div className="col-sm-10">
                                    <input type="tel" className="form-control form-control-sm"
                                           id="colFormLabelSm" placeholder="617-XXX-XXXX"/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="container card user-box col-8 float-left">
                    <MyUserFollowingComponent/>
                </div>
            </div>
        )
    }
}

export default MyUserDetailsComponent;
