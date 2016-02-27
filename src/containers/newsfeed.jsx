import React from "react-native";
import Styles from "../styles";
import { connect } from 'react-redux'
import {fetchNewsfeedData } from '../actions/newsfeed';

import NewsfeedView from '../components/newsfeed';

const mapStateToProps = (state) => {
  return {
    newsfeedCardData: state.newsfeedCardData,
    addMusicLayerShown: state.addMusicLayerShown,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchNewsfeedData: () => {
      dispatch(fetchNewsfeedData());
    },
    addMusicData: () => {
      dispatch(addMusicData());
    },
    showAddMusicLayer: (show) => {
      dispatch(showAddMusicLayer(show));
    },
  };
};

const NewsFeed = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsfeedView);

export default NewsFeed
