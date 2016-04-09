'use strict';

import co from 'co';
import NewsfeedSnapshot from '../snapshots/newsfeed';
import Config from '../config';

export const UPDATE_NEWSFEED_CARDS = 'UPDATE_NEWSFEED_CARDS';
export const updateNewsfeedCards = (snapshot, error, isRefreshing) => {
  return {
    type: UPDATE_NEWSFEED_CARDS,
    isRefreshing: isRefreshing,
    newsfeedSnapshot: snapshot,
    fetchNewsfeedError: error,
  };
};

export const UPDATE_ADD_RESULT = 'UPDATE_ADD_RESULT';
export const updateAddResult = (result) => {
  return {
    type: UPDATE_ADD_RESULT,
    addNewsfeedResult: result
  };
};

export const fetchNewsfeedData = () => {
  return function (dispatch) {
    return co(function *() {
      let res = yield fetch(Config.address + '/newsfeed', {
        method: 'GET'
      });

      let newsfeedData = JSON.parse(yield res.text()) || [];
      let newsfeedSnapshots = newsfeedData.map(NewsfeedSnapshot.create.bind(NewsfeedSnapshot));

      dispatch(updateNewsfeedCards(newsfeedSnapshots));
    });
  };
};

export const addNewMusic = (data) => {
  return function (dispatch) {
    return co(function *() {
      let res = yield fetch(Config.address + '/newsfeed', {
        method: 'POST',
        body: JSON.stringify(data),
      });

      dispatch(updateAddResult(res));
    });
  };
};
