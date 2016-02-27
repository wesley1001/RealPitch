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
    let firebase = getState().Newsfeed.firebaseRef;

    try {
      let readResult = firebase.child('testing').once('value', function (snapshot) {
        let data = snapshot.val();
        data = _.forIn(data, (value, key) => {value.key = key});
        dispatch(updateNewsfeedCards(_.toArray(data)));
      }, function (errorObject) {
        console.log('the read failed: ' + errorObject.code);
        dispatch(updateNewsfeedCards(null, errorObject));
      });
    } catch (ex) {
      console.log('Read failed: ', ex);
    }
  };
};

// actions for showing add music layer or sending music data to add
export const ADD_NEW_MUSIC = 'ADD_NEW_MUSIC';
export const addNewMusic = (data) => {
  return function (dispatch, getState) {
    let firebase = getState().Newsfeed.firebaseRef;

    console.log('SUBMIT36', data);

    return co(function *() {
      try {
        let writeResult = yield firebase.child('testing').push(data);
        fetchNewsfeedData();
      } catch (ex) {
        console.log('Write failed', ex);
      }
    });
  };
};
