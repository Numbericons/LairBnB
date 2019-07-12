import axios from 'axios';

export const getLairs = () => {
    return axios.get('/api/lairs')
}

export const getLair = (id) => {
    return axios.get(`/api/lairs/${id}`)
}