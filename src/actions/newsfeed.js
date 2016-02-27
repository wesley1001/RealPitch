import _ from 'lodash';
import co from 'co';

// Actions for updating newsfeed cards
export const UPDATE_NEWSFEED_CARDS = 'UPDATE_NEWSFEED_CARDS';
export const updateNewsfeedCards = (snapshot, error) => {
  return {
    type: UPDATE_NEWSFEED_CARDS,
    newsfeedSnapshot: snapshot,
    newsfeedGetError: error,
  };
};

export const FETCH_NEWSFEED_DATA = 'FETCH_NEWSFEED_DATA';
export const fetchNewsfeedData = () => {
  return function (dispatch, getState) {
    let firebase = getState().firebaseRef;

    let readResult = firebase.child('testing').once('value', function (snapshot) {
      let data = snapshot.val();
      data = _.forIn(data, (value, key) => {value.key = key});
      dispatch(updateNewsfeedCards(_.toArray(data)));
    }, function (errorObject) {
      console.log('the read failed: ' + errorObject.code);
      dispatch(updateNewsfeedCards(null, errorObject));
    });
  };
};

// actions for showing add music layer or sending music data to add
export const SHOW_ADD_MUSIC = 'SHOW_ADD_MUSIC';
export const showAddMusicLayer = (show) => {
  return {
    type: UPDATE_NEWSFEED_CARDS,
    addMusicLayerShown: show,
  };
};

export const ADD_MUSIC = 'ADD_MUSIC';
export const addMusicData = (data) => {
  return function (dispatch, getState) {
    let firebase = getState().firebaseRef;

    console.log(data);
  };
};
