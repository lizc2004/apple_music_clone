import { createStore, combineReducers } from 'redux'
import playerReducer from '../reducers/playerReducer'
import favouriteReducer from '../reducers/favouriteReducers'
import searchReducer from '../reducers/searchReducer'

const rootReducer = combineReducers({
  player: playerReducer,
  favourites: favouriteReducer,
  search: searchReducer
})

const store = createStore(rootReducer)

export default store