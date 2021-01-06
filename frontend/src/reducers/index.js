import { combineReducers } from 'redux'
import plantsReducer from './plantsReducer'
import detailReducer from './detailReducer'

const rootReducer = combineReducers({
  plants: plantsReducer,
  detail: detailReducer,
})

export default rootReducer
