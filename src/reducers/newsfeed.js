import {UPDATE_ADD_RESULT, UPDATE_NEWSFEED_CARDS} from '../actions/newsfeed';

const newsfeed = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_NEWSFEED_CARDS:
      return {
        ...state,
        isRefreshing: false,
        newsfeedCardData: [...action.newsfeedSnapshot],
      };
    case UPDATE_ADD_RESULT:
      return {
        ...state,
        addNewsfeedResult: action.addNewsfeedResult,
      };
    default:
      return state;
  }
};

export default newsfeed
