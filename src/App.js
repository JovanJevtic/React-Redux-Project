import React from 'react';
import './App.scss';
import { Provider } from 'react-redux';

import Header from './Components/Layout/Header';
import Posts from './Components/Posts';
import PostForm from './Components/PostForm';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <div className="container">
          <PostForm />
          <hr></hr>
          <Posts />
        </div>
      </div>
    </Provider>
  );
}

export default App;
