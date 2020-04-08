import React, { useState } from 'react';
import '../../css/sign-in-css.css';
import withUser from '../../common/withUser';

export default withUser(props => {

    const {user} = props;
    let state;

    state = {
        isEditing: false,
        updatedFirstName: '',
        updatedLastName: '',
        updatedEmail: '',
        updatedPassword: ''
    };

    const updateForm = (newState) => {
        //this.setState(newState)
    };


    return (
        <div>
            <div className="container card user-box col-4 float-left" >
                <img className="user-photo" src="https://avatars0.githubusercontent.com/u/1682522?s=400&u=5616079a6e3baa83b765695adce7515ac1749114&v=4" alt="Card image cap"/>
                <div className="card-body">

                    {user &&
                     <h5 className="card-title text-center">
                        {user.firstName}
                    </h5>
                    }


                    <form>
                        {user &&
                         <div className="form-group row">
                             <label htmlFor="colFormLabelSm"
                                    className="col-sm-4 col-form-label col-form-label-sm">
                                 First Name
                             </label>
                              <div className="col-sm-8">
                                  {!state.isEditing &&
                                   <input readOnly type="text" className="form-control form-control-sm"
                                          id="colFormLabelSm" placeholder={user.firstName}/>
                                  }
                                  {state.isEditing &&
                                   <input type="text" className="form-control form-control-sm"
                                          id="colFormLabelSm" placeholder={user.firstName}
                                          onChange={(e) => {
                                              updateForm({
                                                                  updatedFirstName: e.target.value
                                                              });
                                          }}/>}

                              </div>
                         </div>
                        }
                        {user &&
                         <div className="form-group row">
                             <label htmlFor="colFormLabelSm"
                                    className="col-sm-4 col-form-label col-form-label-sm">
                                 Last Name
                             </label>
                              <div className="col-sm-8">
                                  {!state.isEditing &&
                                   <input readOnly type="text" className="form-control form-control-sm"
                                          id="colFormLabelSm" placeholder={user.lastName}/>}
                                  {state.isEditing &&
                                   <input type="text" className="form-control form-control-sm"
                                          id="colFormLabelSm" placeholder={user.lastName}
                                          onChange={(e) => {
                                              updateForm({
                                                                  updatedLastName: e.target.value
                                                              });
                                          }}/>}

                              </div>
                         </div>
                        }

                        {user &&
                         <div className="form-group row">
                             <label htmlFor="colFormLabelSm"
                                    className="col-sm-4 col-form-label col-form-label-sm">
                                 Email

                             </label>

                              <div className="col-sm-8">
                                  {!state.isEditing &&
                                  <input readOnly type="email" className="form-control form-control-sm"
                                         id="colFormLabelSm" placeholder={user.email}/>}
                                  {state.isEditing &&
                                   <input type="email" className="form-control form-control-sm"
                                          id="colFormLabelSm" placeholder={user.email}
                                          onChange={(e) => {
                                              updateForm({
                                                                  updatedEmail: e.target.value
                                                              });
                                          }}/>}
                              </div>
                         </div>
                        }
                        {state.isEditing && user &&
                         <div className="form-group row">
                             <label htmlFor="colFormLabelSm"
                                    className="col-sm-4 col-form-label col-form-label-sm">
                                 Password
                             </label>
                             <div className="col-sm-8">
                                  <input type="password"
                                         className="form-control form-control-sm"
                                         id="colFormLabelSm" placeholder={user.password}
                                         onChange={(e) => {
                                             updateForm({
                                                                 updatedPassword: e.target.value
                                                             });
                                         }}/>
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
                                 <input readOnly type="text"
                                        className="form-control form-control-sm"
                                        id="colFormLabelSm" placeholder={user.dob}/>
                             </div>
                         </div>
                        }

                    </form>
                    {!state.isEditing && user &&
                     <button className="btn btn-secondary btn-block"
                             onClick={() => {
                                 updateForm({
                                                     isEditing: true
                                                 })
                             }}

                         >
                         EDIT PROFILE
                     </button>
                    }
                    {state.isEditing && user &&
                     <button className="btn btn-secondary btn-block"
                             onClick={() => {
                                 updateForm({
                                                     isEditing: false
                                                 })
                             }}
                         >
                         UPDATE PROFILE
                     </button>
                    }

                </div>
            </div>


        </div>
    )

    // NEEDS TO PUSH DATA BACK TO DATABASE

});
