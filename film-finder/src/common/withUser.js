import { connect } from "react-redux";
import { setUser } from "../actions/userActions";

const mapStateToProps = ({user}) => ({user: user.user, userLoading: user.loading});
const mapDispatchToProps = (dispatch) => ({
    setUser(user) {
        dispatch(setUser(user));
    }
});

export default (component) => connect(mapStateToProps, mapDispatchToProps)(component);