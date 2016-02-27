import {UPDATE_NEWSFEED_CARDS} from '../actions/newsfeed';

const newsfeed = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_NEWSFEED_CARDS:
      return {
        ...state,
        newsfeedCardData: [...action.newsfeedSnapshot],
        isGettingNewsfeedData: false,
      };
    default:
      return state;
  }
};

export default newsfeed
