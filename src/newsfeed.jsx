import React from "react-native";
import Styles from "./styles";
import { connect } from 'react-redux'
import {fetchNewsfeedData } from './actions/newsfeed';

import Home from './components/home';

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
)(Home);

export default NewsFeed
