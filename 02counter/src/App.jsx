import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(10)

  const addValue = () => {
    if(counter>=20){
      setCounter(20)
    }
    else{
      setCounter(counter+1)
    }
  }

  const removeValue = () => {
    setCounter(counter-1)
    if(counter<=0){
      setCounter(0)
    }
  }

  return (
    <>
      <h1>React</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick = {addValue}>Add Value</button><br/>
      <button onClick = {removeValue}>Remove Value</button>
    </>
  )
}

export default App
