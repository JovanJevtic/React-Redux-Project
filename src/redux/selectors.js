import { VISIBILITY_FILTERS } from './reducers/visibilityFilter'

export const getBookmarksState = store => store.bookmarks

export const getBookmarksList = store =>
  getBookmarksState(store) ? getBookmarksState(store).allIds : []

export const getBookmarkById = (store, id) =>
  getBookmarksState(store) ? { ...getBookmarksState(store).byIds[id], id } : {}

export const getBookmarks = store =>
  getBookmarksList(store).map(id => getBookmarkById(store, id))

export const getBookmarksByVisibilityFilter = (store, visibilityFilter) => {
  const allBookmakrs = getBookmarks(store)
  switch (visibilityFilter) {
    case VISIBILITY_FILTERS.COMPLETED:
      return allBookmakrs.filter(bookmakr => bookmakr.completed)
    case VISIBILITY_FILTERS.INCOMPLETE:
      return allBookmakrs.filter(bookmakr => !bookmakr.completed)
    case VISIBILITY_FILTERS.ALL:
    default:
      return allBookmakrs
  }
}
