import _ from 'lodash';
import Promise from 'bluebird';

export const SET_UID = 'SET_UID';
export const setUID = (userData) => {
  return {
    type: SET_UID,
    uid: userData.uid,
  };
};

export const LOGIN = 'LOGIN';
export const login = (email, password) => {
  return function (dispatch, getState) {
    let firebase = getState().User.firebaseRef;
    let df = new Promise((resolve, reject) => {
      let user =  firebase.authWithPassword({
        email: email,
        password: password,
      }, (error, userData) => {
        if (error) {
          console.log("Error logging in user:", error);
          reject();
        } else {
          dispatch(setUID(userData));
          console.log("Logged in with uid:", userData.uid);
          resolve(userData);
        }
      });
    });

    return df;
  };
};

export const CREATE_USER = 'CREATE_USER';
export const createUser = (email, password) => {
  return function (dispatch, getState) {
    let firebase = getState().User.firebaseRef;
    let df = new Promise((resolve, reject) => {
      let user = firebase.createUser({
        email: email,
        password: password,
      }, (error, userData) => {
        if (error) {
          console.log("Error creating user:", error);
        } else {
          dispatch(setUID(userData));
          console.log("Created user with uid:", userData.uid);
        }
      });
    });

    return df;
  };
};
