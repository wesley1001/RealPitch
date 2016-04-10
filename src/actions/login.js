'use strict';

import co from 'co';
import Config from '../config';
import {httpGet, httpPost} from '../../common/api';

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
      let res = yield httpGet(Config.address + '/user/login', {
        body: JSON.stringify({email, password}),
      });

      if (res.ok && res.text !== '') {
        dispatch(setUID({uid: res.text}));
      }
    });
  };
};

export const createUser = (email, password) => {
  return function (dispatch) {
    return co(function *() {
      let res = yield httpPost(Config.address + '/user/signup', {
        body: JSON.stringify({email, password}),
      });

      if (res.ok && res.text !== '') {
        dispatch(setUID({uid: res.text}));
      }
    });
  };
};
