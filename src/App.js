import React from 'react'
import AddBookmark from './components/AddBookmark'
import BookmarksList from './components/BookmarksList'
import VisibilityFilters from './components/VisibilityFilters'

import './index.css'

export default function App() {
  return (
    <div className="App">
      <h1>Bookmarks</h1>
      <AddBookmark />
      <BookmarksList />
      <VisibilityFilters />
    </div>
  );
}