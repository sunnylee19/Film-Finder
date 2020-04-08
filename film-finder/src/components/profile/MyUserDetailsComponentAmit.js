import React from 'react';
import MyUserFollowingComponent from "./MyUserFollowingComponent";
import withUser from "../../common/withUser";

class MyUserDetailsComponent extends React.Component {

    render() {
        return (
            <div>
                <div className="container card user-box col-4 float-left" >
                    <img className="user-photo" src="https://www.ccs.neu.edu/home/ashesh/img/amit.jpg" alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title text-center">Amit</h5>
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

                <div className="container card user-box float-left">
                    <MyUserFollowingComponent/>
                </div>
            </div>
        )
    }
}

export default withUser(MyUserDetailsComponent);
