import React from 'react';
import UserCard  from './Components/UserCard';
import './App.css'

function App() {

  return (
    <div className='container'>
      <UserCard name="sarvesh" desc="Desc 1" />
      <UserCard name="ayush" desc="Desc 2" />
      <UserCard name="suhas" desc="Desc 3" />
    </div>
  )
}

export default App
