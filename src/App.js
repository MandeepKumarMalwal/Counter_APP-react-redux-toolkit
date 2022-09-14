import React from 'react'
import './App.css'
import { useSelector,useDispatch } from 'react-redux'
import {actions} from "./store/index"

function App() {
  const counter = useSelector((state)=>state.counter)
  const dispatch = useDispatch()
  const increment = () =>{
    dispatch(actions.increment())
  }
  const decrement = () =>{
    dispatch(actions.decrement())
  }
  const addBy20= () => {
    dispatch(actions.addBy20(20))
  }

  const reset = () => {
    dispatch(actions.reset())
  }
  return(
    <div className='main'>
      <h1 className='h1'>COUNTER APP</h1>
      <h2 className='h2'>{counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button><br/>
      <button onClick={addBy20}>Add + 20</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}


export default App