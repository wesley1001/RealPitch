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
    let df = new Promise((resolve, reject) => {
        try {
          let readResult = firebase.child('testing').once('value', function (snapshot) {
            let data = snapshot.val();
            data = _.forIn(data, (value, key) => {value.key = key});
            dispatch(updateNewsfeedCards(_.toArray(data)));
            resolve();
          }, function (errorObject) {
            console.log('the read failed: ' + errorObject.code);
            dispatch(updateNewsfeedCards(null, errorObject));
            reject();
          });
        } catch (ex) {
          console.log('Read failed: ', ex);
        }
      }
    );

    return df;
  };
};

// actions for showing add music layer or sending music data to add
export const ADD_NEW_MUSIC = 'ADD_NEW_MUSIC';
export const addNewMusic = (data) => {
  return function (dispatch, getState) {
    let firebase = getState().Newsfeed.firebaseRef;

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
