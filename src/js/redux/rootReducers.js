import { combineReducers } from 'redux'
import movieModule from './modules/movieModule/movieModule'
import userModule from './modules/userModule/userModule'

export default combineReducers({
  movieModule, userModule,
})
