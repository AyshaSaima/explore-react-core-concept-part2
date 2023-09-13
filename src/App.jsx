import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './Users'
import Friends from './friends'

function App() {

  function handleClick(){
    alert('button clicked')
  }
  const handleClick2=()=>{
    alert('btn2 clicked')
  }
  const addToFive=(num)=>{
    alert(num+5);
  }

  return (
    <>
      <h3>React Core concepts 2</h3>
      <Friends></Friends>
      <Users></Users>
      <Counter></Counter>
      <Team></Team>
      <button onClick={handleClick}>Click me</button>
     <button onClick={handleClick2}>click 2</button>
     <button onClick={()=>{alert('3rd click')}}>click 3</button>
     <button onClick={()=>addToFive(3)}>Click 4</button>
      
    </>
  )
}

export default App
