import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, toggle } from './actions';

function App() {

  const counter = useSelector(state => state.counter);
  const toggler = useSelector(state => state.toggler);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1> Counter: {counter} </h1>
      <button onClick={() => dispatch(increment())} >Increment</button>
      <button onClick={() => dispatch(decrement())} >Decrement</button>

      <button onClick={() => dispatch(toggle())} >Show hidden data</button>
      { toggler && <h1>Hidden Data</h1> }
    </div>
  );
}

export default App;
