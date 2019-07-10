import {getLairs} from '../util/lair_api_util';

export const RECEIVE_ALL_LAIRS = "RECEIVE_ALL_LAIRS";

export const receiveLairs = (lairs) => {
    return ({
        type: RECEIVE_ALL_LAIRS,
        lairs
    })
}

export const fetchLairs = () => (dispatch) => {
    getLairs()
        .then(lairs => dispatch(receiveLairs(lairs)))
}