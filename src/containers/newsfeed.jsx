'use strict';

import React from "react-native";
import { connect } from 'react-redux'
import {fetchNewsfeedData, updateAddResult, addNewMusic } from '../actions/newsfeed';

import NewsfeedView from '../components/newsfeed/newsfeed';

const mapStateToProps = (state) => {
  return {
    newsfeedCardData: state.Newsfeed.newsfeedCardData,
    isRefreshing: state.Newsfeed.isRefreshing,
    addNewsfeedResult: state.Newsfeed.addNewsfeedResult,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchNewsfeedData: () => {
      dispatch(fetchNewsfeedData());
    },
    addNewMusic: (data) => {
      dispatch(addNewMusic(data));
    },
  };
};

const NewsFeed = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsfeedView);

export default NewsFeed
