import _ from 'lodash';
import co from 'co';
import Promise from 'bluebird';

// Actions for updating newsfeed cards
export const UPDATE_NEWSFEED_CARDS = 'UPDATE_NEWSFEED_CARDS';
export const updateNewsfeedCards = (snapshot, error, isRefreshing) => {
  return {
    type: UPDATE_NEWSFEED_CARDS,
    isRefreshing: isRefreshing,
    newsfeedSnapshot: snapshot,
    newsfeedGetError: error,
  };
};

export const FETCH_NEWSFEED_DATA = 'FETCH_NEWSFEED_DATA';
export const fetchNewsfeedData = () => {
  return function (dispatch, getState) {
    let firebase = getState().Newsfeed.firebaseRef;

    return co(function *() {
      let res = yield fetch('http://127.0.0.1:8080/newsfeed', {
        method: 'GET'
      });

      let newsfeedData = JSON.parse(yield res.text());

      dispatch(updateNewsfeedCards(newsfeedData));
    });
  };
};

// actions for showing add music layer or sending music data to add
export const ADD_NEW_MUSIC = 'ADD_NEW_MUSIC';
export const addNewMusic = (data) => {
  return function (dispatch, getState) {
    let firebase = getState().Newsfeed.firebaseRef;

    return co(function *() {
      console.log(4040, data);
      let res = yield fetch('http://127.0.0.1:8080/newsfeed', {
        method: 'POST',
        body: JSON.stringify(data),
      });

      return res
    });
  };
};
