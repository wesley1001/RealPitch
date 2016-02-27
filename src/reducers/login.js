import { SET_UID } from '../actions/login';

const login = (state = {}, action) => {
  switch (action.type) {
    case SET_UID:
      return {
        ...state,
        uid: action.uid,
      };
    default:
      return state;
  }
};

export default login
