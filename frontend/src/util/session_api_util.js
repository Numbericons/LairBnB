import axios from 'axios';

export const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = token;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};

export const signup = (userData) => {
  return axios.post('/api/users/register', userData);
};

export const login = (userData) => {
  return axios.post('/api/users/login', userData);
};

export const patchUser = (user) => {
  return axios.patch('/api/users/edit', user);
};

export const getUser = id => {
  return axios.get(`/api/users/${id}`);
}

export const getUsers = () => {
  return axios.get('/api/users')
}