'use strict';

import co from 'co';
import Config from '../config';

export const SET_UID = 'SET_UID';
export const setUID = (userData) => {
  return {
    type: SET_UID,
    uid: userData.uid,
  };
};

export const login = (email, password) => {
  return function (dispatch) {
    return co(function *() {
      let res;
      res = yield fetch(Config.address + '/user/login', {
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

export const createUser = (email, password) => {
  return function (dispatch) {
    return co(function *() {
      let res;
      res = yield fetch(Config.address + '/user/signup', {
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
