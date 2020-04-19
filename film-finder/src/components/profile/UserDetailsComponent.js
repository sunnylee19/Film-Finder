import React from 'react';
import '../../css/sign-in-css.css';
import { updateMyProfile } from '../../services/UserService';

class UserDetailsComponent extends React.Component {

    state = {
        isEditing: false,
        updatedFirstName: '',
        updatedLastName: '',
        updatedEmail: '',
        updatedPassword: ''
    };

    updateForm = (newState) => {
        this.setState(newState)
    };
    doEditProfile = async (event) => {
        event.preventDefault();
        const updatedUser = {
        };
        if (this.state.updatedFirstName !== '') {
            updatedUser.firstName = this.state.updatedFirstName;
        }
        if (this.state.updatedLastName !== '') {
            updatedUser.lastName = this.state.updatedLastName;
        }
        if (this.state.updatedEmail !== '') {
            updatedUser.email = this.state.updatedEmail;
        }
        if (this.state.updatedPassword.trim().length > 6) {
            updatedUser.password = this.state.updatedPassword.trim();
        }
        const newUser = await updateMyProfile(updatedUser);
        this.props.setUser(newUser);
        this.setState({
            isEditing: false
        });
    };
    
    render() {
        const {user} = this.props;
        let state = this.state;

        return (
            <div>
                <div className="card" >
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
                                                this.updateForm({
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
                                                this.updateForm({
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
                                                this.updateForm({
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
                                                this.updateForm({
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
                                    this.updateForm({
                                                        isEditing: true
                                                    })
                                }}

                            >
                            EDIT PROFILE
                        </button>
                        }
                        {state.isEditing && user &&
                        <button className="btn btn-secondary btn-block"
                                onClick={this.doEditProfile}
                            >
                            UPDATE PROFILE
                        </button>
                        }

                    </div>
                </div>


            </div>
        );
    }
}

export default UserDetailsComponent;
