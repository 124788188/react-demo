import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import RootReducer from '../reducer'
import ReduxThunk from 'redux-thunk'

const store = createStore(RootReducer, applyMiddleware(ReduxThunk))

export default store