import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { logout } from './actions/session_actions';
import "./stylesheets/output.css"
import jwt_decode from 'jwt-decode';
import { setAuthToken } from './util/session_api_util';
import axios from 'axios';

document.addEventListener('DOMContentLoaded', () => {
  let store;

  const googleMapsReadyPromise = axios.get('/google').then((google) => {
    return new Promise((resolve) => {
      window.googleMapsLoaded = function () {
        resolve()
      }
      const script = document.createElement("script");
      // const apiKey = jwt_decode(document.cookie['google'])
      script.src = `https://maps.googleapis.com/maps/api/js?key=${google.data.key}&callback=googleMapsLoaded&libraries=places`;
      script.type = "text/javascript";
      document.head.appendChild(script);
    })
  })

  if (localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);
    const decodedUser = jwt_decode(localStorage.jwtToken);
    const { id, username, email, image_url, host_description } = decodedUser;
    const preloadedState = {
      entities: {
        users: { 
          [id]: { id, username, email, image_url, host_description }
        }
      },
      session: { id }
    };
    store = configureStore(preloadedState);    
    const currentTime = Date.now() / 1000;

    if (decodedUser.exp < currentTime) {
      store.dispatch(logout());
      window.location.href = '/';
    }

  } else {
    store = configureStore({});
  }
  window.getState = store.getState;
  const root = document.getElementById('root');

  googleMapsReadyPromise.then(() => ReactDOM.render(<Root store={store} />, root))

});