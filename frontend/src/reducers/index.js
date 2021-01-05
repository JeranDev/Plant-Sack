import { combineReducers } from 'redux'
import plantsReducer from './plantsReducer'
import detailReducer from './detailReducer'
import moreReducer from './moreReducer'

const rootReducer = combineReducers({
  plants: plantsReducer,
  detail: detailReducer,
  more: moreReducer,
})

export default rootReducer
