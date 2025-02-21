import { useState } from 'react'
import './App.css'
import Card from './Components/Card'

function App() {
  
  const [name, setName] = useState('');
  return (
    <div>
      <Card title="Card1" name={name} setName={setName}/>
      <Card title="Card2" name={name} setName={setName}/>
      <p>Parent Name State variable ki value inside the card : {name}</p>
    </div>
  )
}

export default App
