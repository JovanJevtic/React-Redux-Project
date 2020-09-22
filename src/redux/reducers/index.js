import { combineReducers } from 'redux'
import visibilityFilter from './visibilityFilter'
import bookmarks from './bookmarks'

export default combineReducers({ bookmarks, visibilityFilter });