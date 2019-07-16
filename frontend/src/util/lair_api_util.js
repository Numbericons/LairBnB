import axios from 'axios';

export const getLairs = () => {
    return axios.get('/api/lairs')
}

export const getLair = (id) => {
    return axios.get(`/api/lairs/${id}`)
}

export const getLairByBounds = (bounds) => {
    return axios.get(`/api/lairs/bounds/${bounds}`)
}

export const getCoordinatesByLocation = (location) => {
    
}