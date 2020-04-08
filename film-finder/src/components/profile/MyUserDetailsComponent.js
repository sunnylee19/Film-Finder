import React from 'react';
import MyUserFollowingComponent from "./MyUserFollowingComponent";
import withUser from "../../common/withUser";

class MyUserDetailsComponent extends React.Component {

    render() {
        return (
            <div>
                <div className="container card user-box col-4 float-left" >
                    <img className="user-photo" src="https://avatars0.githubusercontent.com/u/1682522?s=400&u=5616079a6e3baa83b765695adce7515ac1749114&v=4" alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title text-center">Jose</h5>
                        <form>
                            <div className="form-group row">
                                <label htmlFor="colFormLabelSm"
                                       className="col-sm-4 col-form-label col-form-label-sm">
                                    Email
                                </label>
                                <div className="col-sm-8">
                                    <input readOnly type="email" className="form-control form-control-sm"
                                           id="colFormLabelSm" placeholder="reviewer@northeastern.edu"

                                    />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="colFormLabelSm"
                                       className="col-sm-4 col-form-label col-form-label-sm">
                                    Password
                                </label>
                                <div className="col-sm-8">
                                    <input readOnly type="password" className="form-control form-control-sm"
                                           id="colFormLabelSm" placeholder=""/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="colFormLabelSm"
                                       className="col-sm-4 col-form-label col-form-label-sm">
                                    Birthday
                                </label>
                                <div className="col-sm-8">
                                    <input readOnly type="date" className="form-control form-control-sm"
                                           id="colFormLabelSm" placeholder="04/08/1998"/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>


            </div>
        )
    }
}

export default withUser(MyUserDetailsComponent);
