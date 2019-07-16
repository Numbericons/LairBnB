import * as APIUtil from '../util/session_api_util';

import jwt_decode from 'jwt-decode';
import { receiveErrors } from './errors_actions';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_USER_LOGOUT = "RECEIVE_USER_LOGOUT";
export const RECEIVE_A_USER = "RECEIVE_A_USER";
export const RECEIVE_USERS = "RECEIVE_USERS";

export const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

export const receiveAUser = user => ({
    type: RECEIVE_A_USER,
    user
});

export const receiveUsers = users => ({
    type: RECEIVE_USERS,
    users
})


export const logoutUser = () => ({
    type: RECEIVE_USER_LOGOUT
});

export const fetchUser = id => dispatch => {
    return APIUtil.getUser(id)
        .then(user => {
            const { _id, email, username, image_url, host_description } = user.data;
            const id = _id;
            return dispatch(receiveAUser({ id, email, username, image_url, host_description }))
        })
}

export const fetchUsers = () => dispatch => {
    return APIUtil.getUsers()
        .then(users => {
            return dispatch(receiveUsers(users.data))
        })
}

export const editUser = (user) => dispatch => {
    return APIUtil.patchUser(user)
        .then(user => {
            const { _id, email, username, image_url, host_description } = user.data;
            const id = _id;
            return dispatch(receiveCurrentUser({ id, email, username, image_url, host_description }))
        })
};

export const signup = user => dispatch => (
    APIUtil.signup(user).then((res) => {
        const {email, password} = user;
        return dispatch(login({email, password}));
    }, err => {
        dispatch(receiveErrors(err.response.data));
        throw Error
    })
);

export const login = user => dispatch => (
    APIUtil.login(user).then(res => {
        const { token } = res.data;
        localStorage.setItem('jwtToken', token);
        APIUtil.setAuthToken(token);
        const decoded = jwt_decode(token);
        const {id, email, username, image_url, host_description} = decoded;
        return dispatch(receiveCurrentUser({id, email, username, image_url, host_description}))
    })
    .catch(err => {
        dispatch(receiveErrors(err.response.data));
        throw Error
    })
)

export const logout = () => dispatch => {
    localStorage.removeItem('jwtToken')
    APIUtil.setAuthToken(false)
    dispatch(logoutUser())
};