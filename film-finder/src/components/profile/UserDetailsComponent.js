import React from 'react';
import '../../css/sign-in-css.css';
import {updateMyProfile} from '../../services/UserService';
import IconButton from "@material-ui/core/IconButton";
import FavoriteTwoToneIcon from '@material-ui/icons/FavoriteTwoTone';
import Button from "@material-ui/core/Button";
import withUser from '../../common/withUser';

class UserDetailsComponent extends React.Component {

    state = {
        isEditing: false,
        updatedFirstName: '',
        updatedLastName: '',
        updatedEmail: '',
        updatedPassword: ''
    };

    endorseUser = () => {
        const user = this.props.user;
        if (user.endorsed) return;
        this.props.endorseUser(user.id);
    };

    updateForm = (newState) => {
        this.setState(newState)
    };
    doEditProfile = async (event) => {
        event.preventDefault();
        const updatedUser = {};
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
                <div className="card user-box">


                    <img className="user-photo"
                         src="https://inayatmiah.files.wordpress.com/2015/01/fbpic.jpg"
                         alt="Card image cap"/>
                    <div className="card-body">

                        {user &&

                         <h1 className="card-title text-center">
                             {user.firstName}

                             <IconButton color={user.endorsed ? "secondary" : "default"} disabled={this.props.editable || !this.props.loggedIn} disableRipple={this.props.editable || !this.props.loggedIn} onClick={this.props.endorseUser}>
                                 <FavoriteTwoToneIcon style={{ fontSize: 40 }}/>
                                 <Button color="secondary" disabled style={{ fontSize: 40 }}>
                                     {user.numEndorsements}
                                 </Button>
                             </IconButton>
                         </h1>
                        }
                        <div>

                        </div>


                        <form>
                            {user &&
                             <div className="form-group row">
                                 <label htmlFor="colFormLabelSm"
                                        className="col-sm-4 col-form-label col-form-label-sm">
                                     First Name
                                 </label>
                                 <div className="col-sm-8">
                                     {!state.isEditing &&
                                      <input readOnly type="text"
                                             className="form-control form-control-sm"
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
                                      <input readOnly type="text"
                                             className="form-control form-control-sm"
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
                                      <input readOnly type="email"
                                             className="form-control form-control-sm"
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

                            {user &&
                             <div className="form-group row">
                                 <label htmlFor="colFormLabelSm"
                                        className="col-sm-4 col-form-label col-form-label-sm">
                                     Status
                                 </label>
                                 <div className="col-sm-8">
                                     <input readOnly type="text"
                                            className="form-control form-control-sm"
                                            id="colFormLabelSm" placeholder={"User"}/>
                                 </div>
                             </div>}

                        </form>
                        {this.props.editable && !state.isEditing &&
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

export default withUser(UserDetailsComponent, 'loggedIn');
