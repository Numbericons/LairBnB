import { getLairs, getLair } from '../util/lair_api_util';
export const RECEIVE_ALL_LAIRS = "RECEIVE_ALL_LAIRS";
export const RECEIVE_ONE_LAIR = "RECEIVE_ONE_LAIR";

export const receiveLairs = (lairs) => {
    return ({
        type: RECEIVE_ALL_LAIRS,
        lairs
    })
}

export const receiveLair = (lair) => {
    return ({
        type: RECEIVE_ONE_LAIR,
        lair
    })
}

export const fetchLairs = () => (dispatch) => {
    getLairs()
        .then(lairs => dispatch(receiveLairs(lairs)))
}

export const fetchLair = (id) => (dispatch) => {
    return getLair(id)
        .then(lair => dispatch(receiveLair(lair.data)))
}