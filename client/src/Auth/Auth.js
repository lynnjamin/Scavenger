import history from '../history';
import auth0 from 'auth0-js';
import axios from "axios";

const origin = window.location.origin;

export default class Auth {
  accessToken;
  idToken;
  expiresAt;

  auth0 = new auth0.WebAuth({
    domain: 'lynnjamint.auth0.com',
    clientID: 'cwVXg8Y39wZ6yUNJSnaOdJ0bCwMuf301',
    redirectUri: origin + '/callback',
    responseType: 'token id_token',
    audience: 'https://lynnjamint.auth0.com/userinfo',
    scope: 'openid profile'
  });

  constructor() {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.getAccessToken = this.getAccessToken.bind(this);
    this.getIdToken = this.getIdToken.bind(this);
    this.renewSession = this.renewSession.bind(this);
  }

  login() {
    this.auth0.authorize();
  }

  handleAuthentication() {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
      } else if (err) {
        history.replace('/home');
        console.log(err);
        alert(`Error: ${err.error}. Check the console for further details.`);
      }
    });
  }


  getAccessToken() {
    return this.accessToken;
  }

  getIdToken() {
    return this.idToken;
  }

  setSession(authResult) {
    // Set the time that the access token will expire at
    let expiresAt = (authResult.expiresIn * 1000) + new Date().getTime();

    // Set their tokens at local storage
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
    localStorage.setItem('sub', authResult.idTokenPayload.sub);


    const userData = {name: authResult.idTokenPayload.name, 
      nickname: authResult.idTokenPayload.nickname, 
      sub: authResult.idTokenPayload.sub};


    axios.put("/api/users/:id", userData)
    .then(() => {
      history.replace('/home');
    }).catch((error) => {
        console.log(error);
        history.replace('/home');
    });

  } 

  renewSession() {
    this.auth0.checkSession({}, (err, authResult) => {
       if (authResult && authResult.accessToken && authResult.idToken) {
        //  this.setSession(authResult);
       } else if (err) {
        //  this.logout();
         console.log(err);
         alert(`Could not get a new token (${err.error}: ${err.error_description}).`);
       }
    });
  }

  logout() {
    // Remove isLoggedIn flag from localStorage
    // localStorage.removeItem('isLoggedIn');

    this.auth0.logout({
      returnTo: window.location.origin
    });
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    // navigate to the home route
    history.replace('/home');
  }


  isAuthenticated() {
    // Check whether the current time is past the
    // access token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }



}
