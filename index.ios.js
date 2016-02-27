import React from 'react-native';
import Newsfeed from './src/containers/newsfeed';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import newsfeedReducer from './src/reducers/newsfeed';
import thunk from 'redux-thunk';
import Firebase from 'firebase';
import config from './src/config';
import {fetchNewsfeedData} from './src/actions/newsfeed';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import Empty from './src/components/empty';

var {AppRegistry} = React;

let rootFirebase = new Firebase(config.FIREBASE_ROOT);
let initialState = {
  firebaseRef: rootFirebase,
  newsfeedCardData: [],
  isGettingNewsfeedData:true,
};

let store = createStore(newsfeedReducer, initialState, applyMiddleware(thunk));

const AppWithStore = () => {
  return (
    <Provider store={store}>
      <ScrollableTabView
        tabBarUnderlineColor='ca6144'
        tabBarBackgroundColor='e9e6c9'
        tabBarActiveTextColor='ca6144'
        tabBarInactiveTextColor='e0b58c'>
          <Newsfeed tabLabel='Newsfeed'/>
          <Empty tabLabel='Ask'/>
          <Empty tabLabel='Profile'/>
      </ScrollableTabView>
    </Provider>
  )
};

store.dispatch(fetchNewsfeedData());
AppRegistry.registerComponent('NewProject', () => AppWithStore);
