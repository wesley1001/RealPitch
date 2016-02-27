import _ from 'lodash';

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
    let user = firebase.authWithPassword({
      email: email,
      password: password,
    }, (error, userData) => {
      if (error) {
        console.log("Error logging in user:", error);
      } else {
        dispatch(setUID(userData));
        console.log("Logged in with uid:", userData.uid);
      }
    });
  };
};

export const CREATE_USER = 'CREATE_USER';
export const createUser = (email, password) => {
  return function (dispatch, getState) {
    let firebase = getState().User.firebaseRef;
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
  };
};
