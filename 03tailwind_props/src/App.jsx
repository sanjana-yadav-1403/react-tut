import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "sanjana",
    age: 21
  }
  return (
    <>
      <h1 className='bg-blue-400 text-black p-4 rounded-xl mb-4'>Tailwind CSS</h1>
      <Card username="sanjana" designation="engineer"/>
      <Card username="khushi" designation="doctor" someObj = {myObj}/>
    </>
  )
}

export default App
