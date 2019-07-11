import * as APIUtil from '../util/session_api_util';

import jwt_decode from 'jwt-decode';
import { receiveErrors } from './errors_actions';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_USER_LOGOUT = "RECEIVE_USER_LOGOUT";

export const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});


export const logoutUser = () => ({
    type: RECEIVE_USER_LOGOUT
});

export const signup = user => dispatch => (
    APIUtil.signup(user).then((res) => {
        const {email, password} = user;
        return dispatch(login({email, password}));
    }, err => {
        dispatch(receiveErrors(err.response.data));
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
        throw "eeep";
    })
)

export const logout = () => dispatch => {
    localStorage.removeItem('jwtToken')
    APIUtil.setAuthToken(false)
    dispatch(logoutUser())
};