import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { AppState } from './store';
import { decrement, increment } from './store/counter_slice';

function App() {
  const orders = useSelector((state: AppState)=> state.counter.value)
  const dispatch = useDispatch()
  

  return (
    <div className="App">

      <div className='counter_form'>
        <button onClick={ ()=> dispatch(decrement()) }>
          -
        </button>
        <h1> {orders} </h1>
        <button onClick={ ()=> dispatch(increment()) }>
          +
        </button>
      </div>

    </div>
  );
}

export default App;
