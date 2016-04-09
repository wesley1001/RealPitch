import React from 'react-native';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, combineReducers} from 'redux'
import Reducer from './src/reducers/index';
import thunk from 'redux-thunk';
import Firebase from 'firebase';
import config from './src/config';
import {fetchNewsfeedData} from './src/actions/newsfeed';
import ScrollableTabView from 'react-native-scrollable-tab-view';

import Newsfeed from './src/containers/newsfeed';
import Login from './src/containers/login';

var {AppRegistry} = React;

let rootFirebase = new Firebase(config.FIREBASE_ROOT);
let initialState = {
  Newsfeed: {
    firebaseRef: rootFirebase,
    newsfeedCardData: [],
    isRefreshing: false,
  },
  User: {
    firebaseRef: rootFirebase,
    uid: null,
  },
};

let store = createStore(Reducer, initialState, applyMiddleware(thunk));

const AppWithStore = () => {
  return (
    <Provider store={store}>
      <ScrollableTabView
        tabBarUnderlineColor='ca6144'
        tabBarBackgroundColor='e9e6c9'
        tabBarActiveTextColor='ca6144'
        tabBarInactiveTextColor='e0b58c'>
        <Newsfeed tabLabel='Newsfeed'/>
        <Login tabLabel='Profile'/>
      </ScrollableTabView>
    </Provider>
  )
};

store.dispatch(fetchNewsfeedData());
AppRegistry.registerComponent('Real_Pitch', () => AppWithStore);
