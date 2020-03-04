import React from 'react';

class MyUserDetailsComponent extends React.Component {

    render() {
        return (
            <div>
                <div className="container card user-box col-4 float-left" >
                    <img className="user-photo" src="https://www.indiewire.com/wp-content/uploads/2018/06/peterotooleratatouille-e1529340929384.jpg?w=780" alt="Card image cap"/>
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
                                           id="colFormLabelSm" placeholder="reviewer@northeaster.edu"/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default MyUserDetailsComponent;
