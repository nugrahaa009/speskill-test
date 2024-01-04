import { combineReducers } from 'redux'
import listProductReducer from './listProductReducer'

export default combineReducers({
  listProduct: listProductReducer
})