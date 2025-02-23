import React, { useCallback, useEffect, useState,useRef } from 'react'

const ExpensiveComponenet = () => {

  const [count, setCount] =useState(0);
  const [text, setText] =useState("");
  const previousFunction = useRef(null);

  const expensiveCalculation = useCallback(() => {
    console.log("Runing expensive Calcualtion");
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
      result += i;
      
    }
    return result;
  }, [count]);

  useEffect(() => {
    if (previousFunction.current) {
      if (previousFunction === expensiveCalculation) {
        console.log("Function Not Re-created");
        
      }
      else{
        console.log("Function got re-created")
      }
      
    }
    else{
      previousFunction.current = expensiveCalculation;
    }
  }, [expensiveCalculation])
  

  return (
    <div>
        <input 
        type="text" 
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder='Type Something '
        />
        <p>Expensive Calculation Result :{expensiveCalculation()}</p>

        <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  )
}

export default ExpensiveComponenet