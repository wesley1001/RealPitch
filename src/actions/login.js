'use strict';

import co from 'co';

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
    return co(function *() {
      let res;
      res = yield fetch('http://127.0.0.1:8080/user/login', {
        method: 'POST',
        body: JSON.stringify({email, password}),
      });

      let text = yield res.text();

      if (res.ok && text !== '') {
        dispatch(setUID({uid: text}));
      }
    });
  };
};

export const CREATE_USER = 'CREATE_USER';
export const createUser = (email, password) => {
  return function (dispatch, getState) {
    return co(function *() {
      let res;
      res = yield fetch('http://127.0.0.1:8080/user/signup', {
        method: 'POST',
        body: JSON.stringify({email, password}),
      });

      let text = yield res.text();

      if (res.ok && text !== '') {
        dispatch(setUID({uid: text}));
      }
    });
  };
};
