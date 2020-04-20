import { connect } from "react-redux";
import { setUser } from "../actions/userActions";

const mapStateToProps = (propName) => ({user}) => ({[propName]: user.user, [propName + 'Loading']: user.loading});
const mapDispatchToProps = (dispatch) => ({
    setUser(user) {
        dispatch(setUser(user));
    }
});

export default (component, propName = "user") => connect(mapStateToProps(propName), mapDispatchToProps)(component);