import { combineReducers } from 'redux'
import Login from './login'
import Newsfeed from './newsfeed'

export default combineReducers({
  User: Login,
  Newsfeed: Newsfeed,
})
