import { ADD_BOOKMARK, TOGGLE_BOOKMARK, SET_FILTER } from './actionTypes'

let nextBookmarkId = 0

export const addBookmark = content => ({
  type: ADD_BOOKMARK,
  payload: {
    id: ++nextBookmarkId,
    content
  }
})

export const toggleBookmark = id => ({
  type: TOGGLE_BOOKMARK,
  payload: { id }
})

export const setFilter = filter => ({ type: SET_FILTER, payload: { filter } })