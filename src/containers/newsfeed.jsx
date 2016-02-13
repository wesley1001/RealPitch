import React from "react-native";
import Styles from "../styles";
import { connect } from 'react-redux'
import {fetchNewsfeedData } from '../actions/newsfeed';

import NewsfeedScrollView from '../components/newsfeedScrollView';

const mapStateToProps = (state) => {
  return {
    newsfeedCardData: state.newsfeedCardData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchNewsfeedData: () => {
      dispatch(fetchNewsfeedData());
    },
  };
};

const NewsFeed = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsfeedScrollView);

export default NewsFeed
