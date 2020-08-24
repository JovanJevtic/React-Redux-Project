import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, toggle, fetch } from './actions';
import Posts from './components/Posts';

function App() {

  const counter = useSelector(state => state.counter);
  const toggler = useSelector(state => state.toggler);
  const fetched = useSelector(state => state.fetched);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetch())
  }, [])

  return (
    <div className="App">

    <h1> Counter: {counter} </h1>
    <button onClick={() => dispatch(fetch())} >Fetch</button>

    <Posts />

      {/* <h1> Counter: {counter} </h1>
      <button onClick={() => dispatch(increment())} >Increment</button>
      <button onClick={() => dispatch(decrement())} >Decrement</button>
      <button onClick={() => dispatch(fetch())} >Fetch</button>

      <button onClick={() => dispatch(toggle())} >Show hidden data</button>
      { toggler && <h1>Hidden Data</h1> }

      <div>{ fetched }</div> */}

    </div>
  );
}

export default App;
