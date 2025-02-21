import React, { useState } from 'react'
import './Counter.css'

const Counter = () => {
    const [count, setCount] = useState(0);
  return (
    <div className='counter-container'>Counter
    <p id='para'> You Have clicked {count} times</p>
    <button id='btn' onClick={()=> { setCount(count+1) }}>Click Me</button>
    
    </div>
  )
}

export default Counter