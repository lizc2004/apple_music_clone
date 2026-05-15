import { createStore, combineReducers} from 'redux'
import playerReducer from '../reducers/playerReducer'
import favouriteReducer from '../reducers/favouriteReducers'

const rootReducer = combineReducers({
  player: playerReducer,
  favourites: favouriteReducer
})

const store = createStore(rootReducer)

export default store 