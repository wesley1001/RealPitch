import {UPDATE_NEWSFEED_CARDS} from '../actions/newsfeed';

const newsfeed = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_NEWSFEED_CARDS:
      return {
        ...state,
        isRefreshing: false,
        newsfeedCardData: [...action.newsfeedSnapshot],
      };
    default:
      return state;
  }
};

export default newsfeed
