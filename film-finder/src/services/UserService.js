import { API_URL } from "../common/constants";
import { get, post, put } from "../common/query";


export const login = async (email, password) => {
    return await post(API_URL + '/login', {
        email,
        password
    });
};

export const register = async (email, password, firstName, lastName, dob, role) => {
    return await post(API_URL + '/users', {
        email,
        password,
        dob: dob.format('YYYY-MM-DD'),
        firstName,
        lastName,
        type: role
    });
};

export const logout = async () => await post(API_URL + '/logout');

export const getProfileForUser = async (userId) => {
    return await get(API_URL + `/users/${userId}`)
};

export const getMyProfile = async () => {
    return await get(API_URL + '/users/user');
};

export const updateMyProfile = async (user) => await put(API_URL + '/users/user', user);