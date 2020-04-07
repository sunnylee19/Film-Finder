import { ACTION_TYPES } from "../common/constants";


const initialState = {
    user: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.USER_SET:
            return {
                ...state,
                user: action.user
            };
        default:
            return state;
    }
};