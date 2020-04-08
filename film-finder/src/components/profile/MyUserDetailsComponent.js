import React, { useState } from 'react';
import '../../css/sign-in-css.css';
import withUser from '../../common/withUser';
import { logout } from '../../services/UserService';

export default withUser(props => {


    const {user} = props;

    const logoutHandler = async () => {
        await logout();
        props.setUser(null);
    };


    return (

        <div>
            <div className="container card user-box col-4 float-left" >
                <img className="user-photo" src="https://avatars0.githubusercontent.com/u/1682522?s=400&u=5616079a6e3baa83b765695adce7515ac1749114&v=4" alt="Card image cap"/>
                <div className="card-body">

                    <h5 className="card-title text-center">
                        Jose

                    </h5>


                    <form>
                        {user &&
                        <div className="form-group row">
                            <label htmlFor="colFormLabelSm"
                                   className="col-sm-4 col-form-label col-form-label-sm">
                                Email

                            </label>
                            {user &&
                            <div className="col-sm-8">
                                <input readOnly type="email" className="form-control form-control-sm"
                                       id="colFormLabelSm" placeholder={user.email}/>
                            </div>}
                        </div>
                        }
                        {user &&
                            <div className="form-group row">
                                <label htmlFor="colFormLabelSm"
                                       className="col-sm-4 col-form-label col-form-label-sm">
                                    Password
                                </label>
                                <div className="col-sm-8">
                                    <input readOnly type="text"
                                           className="form-control form-control-sm"
                                           id="colFormLabelSm" placeholder={user.password}/>
                                </div>
                            </div>
                        }
                        {user &&
                         <div className="form-group row">
                             <label htmlFor="colFormLabelSm"
                                    className="col-sm-4 col-form-label col-form-label-sm">
                                 Birthday
                             </label>
                             <div className="col-sm-8">
                                 <input readOnly type="date"
                                        className="form-control form-control-sm"
                                        id="colFormLabelSm" placeholder={user.dob}/>
                             </div>
                         </div>
                        }
                    </form>
                    {user &&
                     <button className="btn btn-secondary btn-block">EDIT PROFILE</button>
                    }
                </div>
            </div>


        </div>
    )

});