import { useState } from 'react'
import './App.css'
import Button from './Components/Button'
import Card from './Components/Card'

function App() {

  const  [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <Button handleClick = {handleClick} text ="Click ME" >
        <h1>{count}</h1>
      </Button>




      {/* <Card name = "Props Children Sarvesh Sonawane">

        <h1>Best Web Dev Course </h1>
        <p> Trying to be consitent in this</p>
        <p> Will complete the cousre soon</p>
      </Card>

      <Card chidren = "I am a child">  //override this
        Hi Sarvesh Sonawane
      </Card> */}
    </div>
  )
}

export default App
