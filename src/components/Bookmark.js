import React from 'react'
import { connect } from 'react-redux'
import cx from 'classnames'
import { toggleBookmark } from '../redux/actions'

const Bookmark = ({ bookmark, toggleBookmark }) => (
  <li className="bookmark-item" onClick={() => toggleBookmark(bookmark.id)}>
    {bookmark && bookmark.completed ? "👌" : "👋"}{" "}
    <span
      className={cx(
        "bookmark-item__text",
        bookmark && bookmark.completed && "bookmark-item__text--completed"
      )}
    >
      {bookmark.content}
    </span>
  </li>
)

// export default Bookmark
export default connect(
  null,
  { toggleBookmark }
)(Bookmark)
