import axios from 'axios';

export const getLairs = () => {
    return axios.get('/api/lairs')
}