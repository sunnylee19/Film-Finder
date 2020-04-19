import { ACTION_TYPES } from "../common/constants"

export const setUser = (user) => ({type: ACTION_TYPES.USER_SET, user});