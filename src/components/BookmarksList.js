import React from 'react'
import { connect } from 'react-redux'
import Bookmark from './Bookmark'

import { getBookmarksByVisibilityFilter } from '../redux/selectors'
import { VISIBILITY_FILTERS } from '../redux/reducers/visibilityFilter'

const BookmarksList = ({ bookmarks }) => (
  <ul className="bookmarks-list">
    {bookmarks && bookmarks.length
      ? bookmarks.map((bookmark, index) => {
          return <Bookmark key={`bookmark-${bookmark.id}`} bookmark={bookmark} />
        })
      : 'No bookmarks'}
  </ul>
)

const mapStateToProps = state => {
  const { visibilityFilter } = state
  const bookmarks = getBookmarksByVisibilityFilter(state, visibilityFilter)
  return { bookmarks }
}

// export default BookmarksList
export default connect(mapStateToProps)(BookmarksList)