
import { useRef, useState, useEffect } from 'react'
import './App.css'

function App() {

  const [time, setTime] = useState(0);

  let timerRef = useRef(null);


  function startTimer(){
    timerRef.current =setInterval(() => {
      setTime(time => time+1);
      
    }, 1000);
  }

  function stopTimer(){
    clearInterval(timerRef.current);
    timerRef.current = null;
  }

  function resetTimer(){
    stopTimer();
    setTime(0);

  }
  
  // const[count, setCount] = useState(0);

  // let val = useRef(0);

  // let btnRef = useRef();

  // function handleIncrement (){
  //   val.current = val.current +1;
  //   console.log("Value of val :", val);
  //   setCount (count + 1);
  // }
  // // it runs on every render
  // useEffect(() => {
  //   console.log("i have render one more time");
  // })

  // function changeColor(){
  //   btnRef.current.style.backgroundColor ="red";

  // }
  
  return (
    
    
    <div>

      <div>
        <h1>StopWatch : {time} second</h1>
        <button onClick={startTimer}>
          Start
        </button>
        <br /><br />

        <button onClick={stopTimer}>
          Stop
        </button>
        <br /><br />

        <button onClick={resetTimer}>
          Reset
        </button>
      </div>





      {/* <button 
      ref={btnRef}
      onClick={handleIncrement}>Increment</button>

      <br /><br />

      <button onClick={changeColor}>
        Change the color of the first button
      </button>
      <br />
      <div>
        Count : {count}
      </div> */}
    </div>
  )
}

export default App
